<?php
include_once("../config/ConexionBaseDatos.php");
class AdministradorBaseDatos
{
    private $DatosConexionActual;
    private $Conexion;
    public $baseDatos;

    public function __construct($nombreConexion){
        if (!$this->encontrarConexion($nombreConexion))
        {
            die("Se ha producido un error.");
        }
    }

    private function encontrarConexion($nombreConexion){
        $DatosConexiones = ConexionBaseDatos::DatosConexiones();
        foreach($DatosConexiones as $DatosConexion){
            if($DatosConexion->nombreConexion==$nombreConexion){
                $this->DatosConexionActual = $DatosConexion;
                return true;
            }
        }
        return false;
    }

    private function conectar(){
        $DatosAbrirConexion = $this->DatosConexionActual;
        $this->baseDatos = $DatosAbrirConexion->baseDatos;
        try 
        {
            $this->Conexion = new PDO("mysql:host=$DatosAbrirConexion->servidor;dbname=$DatosAbrirConexion->baseDatos;charset=utf8", $DatosAbrirConexion->usuario, $DatosAbrirConexion->clave,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
            return true;
        }
        catch (PDOException $e) 
        {
            return false;
        }
    }
    
    private function desconectar(){
        $this->Conexion = null;
    }

    private function consultar($sql,$parametros){
        $stmt = $this->Conexion->prepare($sql);
        $stmt->execute($parametros);
        $array = array();
        $cuenta = $stmt->rowCount();
        if($cuenta>0){
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {
                $array[]=$row;
            }
        }else{
            $array[]=$cuenta;
        }
        return $array;
    }

    public function ejecutarConsulta($sql,$parametros){
        $this->conectar();
        $salida = $this->consultar($sql,$parametros);
        $this->desconectar();
        return $salida;
    }
}