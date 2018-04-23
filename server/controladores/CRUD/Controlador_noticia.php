<?php
include_once('../controladores/Controlador_Base.php');
include_once('../entidades/CRUD/Noticia.php');
class Controlador_noticia extends Controlador_Base
{
   function crear($args)
   {
      $noticia = new Noticia($args["id"],$args["descripcion"],$args["idFoto"],$args["idPagina"],$args["esPublico"],$args["titulo"],$args["fecha"]);
      $sql = "INSERT INTO Noticia (descripcion,idFoto,idPagina,esPublico) VALUES (?,?,?,?,?,?);";
      $parametros = array($noticia->descripcion,$noticia->idFoto,$noticia->idPagina,$noticia->esPublico,$noticia->titulo,$noticia->fecha);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
      }else{
         return false;
      }
   }

   function insertar_imagen($args)
   {
      $sql= "INSERT INTO Imagen (nombreArchivo, tipoArchivo, adjunto) VALUES (?,?,?);";
      $parametros= array(
                  $args['nombreArchivo'],
                  $args['tipoArchivo'],
                  $args['adjunto']);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
       }else{
         return false;
            }
   }
   function insertar_noticia($args)
   {
      $this->insertar_imagen($args);
      $sql= "INSERT INTO Noticia (descripcion,idFoto,idPagina,esPublico,titulo,fecha) 
      VALUES (?,?,?,?,?,?);";
      $parametros= array(
                   $args['descripcion'],
                   //$args['idFoto'],
                   1,
                   $args['idPagina'],
                   $args['esPublico'],
                   $args['titulo'],
                   $args['fecha']);
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      if(is_null($respuesta[0])){
         return true;
       }else{
         return false;
            }
   }
   function actualizar($args)
   {
      $noticia = new Noticia($args["id"],$args["descripcion"],$args["idFoto"],$args["idPagina"],$args["esPublico"]);
      $parametros = array($noticia->descripcion,$noticia->idFoto,$noticia->idPagina,$noticia->esPublico,$noticia->id);
      $sql = "UPDATE Noticia SET descripcion = ?,idFoto = ?,idPagina = ?,esPublico = ? WHERE id = ?;";
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
      $sql = "DELETE FROM Noticia WHERE id = ?;";
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
         $sql = "SELECT * FROM Noticia;";
      }else{
      $parametros = array($id);
         $sql = "SELECT * FROM Noticia WHERE id = ?;";
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function leer_paginado($args)
   {
      $pagina = $args["pagina"];
      $registrosPorPagina = $args["registros_por_pagina"];
      $desde = (($pagina-1)*$registrosPorPagina);
      $sql ="SELECT * FROM Noticia LIMIT $desde,$registrosPorPagina;";
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }

   function numero_paginas($args)
   {
      $registrosPorPagina = $args["registros_por_pagina"];
      $sql ="SELECT IF(ceil(count(*)/$registrosPorPagina)>0,ceil(count(*)/$registrosPorPagina),1) as 'paginas' FROM Noticia;";
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
            $sql = "SELECT * FROM Noticia WHERE $nombreColumna = ?;";
            break;
         case "inicia":
            $sql = "SELECT * FROM Noticia WHERE $nombreColumna LIKE '$filtro%';";
            break;
         case "termina":
            $sql = "SELECT * FROM Noticia WHERE $nombreColumna LIKE '%$filtro';";
            break;
         default:
            $sql = "SELECT * FROM Noticia WHERE $nombreColumna LIKE '%$filtro%';";
            break;
      }
      $respuesta = $this->conexion->ejecutarConsulta($sql,$parametros);
      return $respuesta;
   }
}