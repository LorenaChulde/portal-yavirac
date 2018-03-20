<?php
include_once('../routers/RouterBase.php');

class RouterPrincipal extends RouterBase
{
   public $controlador;

   function route(){
      $NombreControlador = "Controlador_".$this->datosURI->controlador; 
      include_once('../controladores/especificos/'.$NombreControlador.'.php');
      include_once('../controladores/CRUD/'.$NombreControlador.'.php');
      $this->controlador = new $NombreControlador();
      $NombreAccion = $this->datosURI->accion;
      $cabecera = $this->datosURI->mensaje_header;
      $cuerpo = $this->datosURI->mensaje_body;
      $urlArgs = $this->datosURI->argumentos;
      if($cabecera == null){
         $cabecera = array();
      }
      if($cuerpo == null){
         $cuerpo = array();
      }
      if($urlArgs == null){
         $urlArgs = array();
      }
      $args = array_merge($cabecera, $cuerpo, $urlArgs);
      $respuesta = json_encode($this->controlador->$NombreAccion($args));
      return $respuesta;
   }
}
