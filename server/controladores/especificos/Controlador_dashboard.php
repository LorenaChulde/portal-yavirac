<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_dashboard extends Controlador_Base
{
   function leer_noticias($args)
   { 
       
        $sql = "SELECT descripcion, titulo, fecha  From Noticia";
        $parametros = array();
        
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}