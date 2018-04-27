<?php
include_once('../controladores/Controlador_Base.php');
class Controlador_pagina_secundaria extends Controlador_Base
{
   function leer_pagina_secundaria($args)
   { 
        $sql = "SELECT slider,esPrincipal,texto,idFoto,idMenu,descripcion,
        Imagen.tipoArchivo,Imagen.adjunto
                        From Pagina inner join Imagen on Pagina.id = Imagen.id where Pagina.id = ?;";
        $parametros = array($args['idPaginaSecundaria']);
        
        $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
         return $respuesta;
    }
}