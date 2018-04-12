<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_noticias_foto extends Controlador_Base
{
   function consultar($args)
   { 
        $sql = "SELECT id,nombreArchivo From Imagen;";
        $parametros = array();
        
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}