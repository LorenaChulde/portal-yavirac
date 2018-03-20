<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Imagen.php');
class Controlador_imagen extends Controlador_Base
{
   function crear($args)
   {
      $imagen = new Imagen($args["id"],$args["idPersona"],$args["tipoArchivo"],$args["nombreArchivo"],$args["adjunto"]);
      $sql = "INSERT INTO Imagen (idPersona,tipoArchivo,nombreArchivo,adjunto) VALUES (?,?,?,?);";
      $parametros = array($imagen->idPersona,$imagen->tipoArchivo,$imagen->nombreArchivo,$imagen->adjunto);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $imagen = new Imagen($args["id"],$args["idPersona"],$args["tipoArchivo"],$args["nombreArchivo"],$args["adjunto"]);
      $parametros = array($imagen->idPersona,$imagen->tipoArchivo,$imagen->nombreArchivo,$imagen->adjunto,$imagen->id);
      $sql = "UPDATE Imagen SET idPersona = ?,tipoArchivo = ?,nombreArchivo = ?,adjunto = ? WHERE id = ?;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function borrar($args)
   {
      $id = $args["id"];
      $parametros = array($id);
      $sql = "DELETE FROM Imagen WHERE id = ?;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function leer($args)
   {
      $id = $args["id"];
      if ($id==""){
         $sql = "SELECT * FROM Imagen;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Imagen WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Imagen LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Imagen;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta[0];
   }

   function leer_filtrado($args)
   {
      $nombreColumna = $args["columna"];
      $tipoFiltro = $args["tipo_filtro"];
      $filtro = $args["filtro"];
      switch ($tipoFiltro){
         case "coincide":
            $parametros = array($filtro);
            $sql = "SELECT * FROM Imagen WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Imagen WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Imagen WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Imagen WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}