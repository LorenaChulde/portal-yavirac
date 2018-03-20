<?php
include_once('../modelos/DatosURI.php');
include_once('../config/Configuracion.php');
class RouterBase
{
   public $datosURI;

   function __construct(){
      $this->datosURI = new DatosURI($_SERVER['REQUEST_URI']);
   }
}
