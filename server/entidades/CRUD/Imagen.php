<?php
class Imagen
{
   public $id;
   public $idPersona;
   public $tipoArchivo;
   public $nombreArchivo;
   public $adjunto;

   function __construct($id,$idPersona,$tipoArchivo,$nombreArchivo,$adjunto){
      $this->id = $id;
      $this->idPersona = $idPersona;
      $this->tipoArchivo = $tipoArchivo;
      $this->nombreArchivo = $nombreArchivo;
      $this->adjunto = $adjunto;
   }
}
?>