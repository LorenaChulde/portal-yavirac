<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/AsiganacionLink.php');
class Controlador_asiganacionlink extends Controlador_Base
{
   function crear($args)
   {
      $asiganacionlink = new AsiganacionLink($args["id"],$args["prioridad"],$args["idLink"],$args["idPagina"]);
      $sql = "INSERT INTO AsiganacionLink (prioridad,idLink,idPagina) VALUES (?,?,?);";
      $parametros = array($asiganacionlink->prioridad,$asiganacionlink->idLink,$asiganacionlink->idPagina);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $asiganacionlink = new AsiganacionLink($args["id"],$args["prioridad"],$args["idLink"],$args["idPagina"]);
      $parametros = array($asiganacionlink->prioridad,$asiganacionlink->idLink,$asiganacionlink->idPagina,$asiganacionlink->id);
      $sql = "UPDATE AsiganacionLink SET prioridad = ?,idLink = ?,idPagina = ? WHERE id = ?;";
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
      $sql = "DELETE FROM AsiganacionLink WHERE id = ?;";
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
         $sql = "SELECT * FROM AsiganacionLink;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM AsiganacionLink WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM AsiganacionLink LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM AsiganacionLink;";
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
            $sql = "SELECT * FROM AsiganacionLink WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM AsiganacionLink WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM AsiganacionLink WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM AsiganacionLink WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}