<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Producto.php');
class Controlador_producto extends Controlador_Base
{
   function crear($args)
   {
      $producto = new Producto($args["id"],$args["titulo"],$args["descripcion"],$args["icono"],$args["prioridad"],$args["linkPaper"],$args["linkSitio"],$args["idPagina"]);
      $sql = "INSERT INTO Producto (titulo,descripcion,icono,prioridad,linkPaper,linkSitio,idPagina) VALUES (?,?,?,?,?,?,?);";
      $parametros = array($producto->titulo,$producto->descripcion,$producto->icono,$producto->prioridad,$producto->linkPaper,$producto->linkSitio,$producto->idPagina);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function actualizar($args)
   {
      $producto = new Producto($args["id"],$args["titulo"],$args["descripcion"],$args["icono"],$args["prioridad"],$args["linkPaper"],$args["linkSitio"],$args["idPagina"]);
      $parametros = array($producto->titulo,$producto->descripcion,$producto->icono,$producto->prioridad,$producto->linkPaper,$producto->linkSitio,$producto->idPagina,$producto->id);
      $sql = "UPDATE Producto SET titulo = ?,descripcion = ?,icono = ?,prioridad = ?,linkPaper = ?,linkSitio = ?,idPagina = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Producto WHERE id = ?;";
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
         $sql = "SELECT * FROM Producto;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Producto WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Producto LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Producto;";
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
            $sql = "SELECT * FROM Producto WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Producto WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Producto WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Producto WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}