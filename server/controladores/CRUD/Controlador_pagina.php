<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Pagina.php');
class Controlador_pagina extends Controlador_Base
{
   function crear($args)
   {
      $pagina = new Pagina($args["id"],$args["slider"],$args["esPrincipal"],$args["texto"],$args["idFoto"],$args["idMenu"]);
      $sql = "INSERT INTO Pagina (slider,esPrincipal,texto,idFoto,idMenu) VALUES (?,?,?,?,?);";
      $parametros = array($pagina->slider,$pagina->esPrincipal,$pagina->texto,$pagina->idFoto,$pagina->idMenu);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $pagina = new Pagina($args["id"],$args["slider"],$args["esPrincipal"],$args["texto"],$args["idFoto"],$args["idMenu"]);
      $parametros = array($pagina->slider,$pagina->esPrincipal,$pagina->texto,$pagina->idFoto,$pagina->idMenu,$pagina->id);
      $sql = "UPDATE Pagina SET slider = ?,esPrincipal = ?,texto = ?,idFoto = ?,idMenu = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Pagina WHERE id = ?;";
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
         $sql = "SELECT * FROM Pagina;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Pagina WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Pagina LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Pagina;";
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
            $sql = "SELECT * FROM Pagina WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Pagina WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Pagina WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Pagina WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}