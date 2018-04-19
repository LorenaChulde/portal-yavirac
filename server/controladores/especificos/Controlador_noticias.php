<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_noticias extends Controlador_Base
{
   function leer_noticia($args)
   { 
        $sql = "SELECT descripcion, titulo, fecha  From Noticia where id = ?;";
        $parametros = array($args['idNoticia']);
        
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
        if(is_null($respuesta[0])||$respuesta[0]==0){
           return false;
        }else{
            return $respuesta;
        }   
   }
}