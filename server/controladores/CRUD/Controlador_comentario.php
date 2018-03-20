<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Comentario.php');
class Controlador_comentario extends Controlador_Base
{
   function crear($args)
   {
      $comentario = new Comentario($args["id"],$args["fechaHora"],$args["idUsuario"],$args["idNoticia"]);
      $sql = "INSERT INTO Comentario (fechaHora,idUsuario,idNoticia) VALUES (?,?,?);";
      $fechaHoraNoSQLTime = strtotime($comentario->fechaHora);
      $fechaHoraSQLTime = date("Y-m-d H:i:s", $fechaHoraNoSQLTime);
      $comentario->fechaHora = $fechaHoraSQLTime;
      $parametros = array($comentario->fechaHora,$comentario->idUsuario,$comentario->idNoticia);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $comentario = new Comentario($args["id"],$args["fechaHora"],$args["idUsuario"],$args["idNoticia"]);
      $parametros = array($comentario->fechaHora,$comentario->idUsuario,$comentario->idNoticia,$comentario->id);
      $sql = "UPDATE Comentario SET fechaHora = ?,idUsuario = ?,idNoticia = ? WHERE id = ?;";
      $fechaHoraNoSQLTime = strtotime($comentario->fechaHora);
      $fechaHoraSQLTime = date("Y-m-d H:i:s", $fechaHoraNoSQLTime);
      $comentario->fechaHora = $fechaHoraSQLTime;
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
      $sql = "DELETE FROM Comentario WHERE id = ?;";
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
         $sql = "SELECT * FROM Comentario;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Comentario WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Comentario LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Comentario;";
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
            $sql = "SELECT * FROM Comentario WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Comentario WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Comentario WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Comentario WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}