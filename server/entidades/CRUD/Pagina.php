<?php
class Pagina
{
   public $id;
   public $slider;
   public $esPrincipal;
   public $texto;
   public $idFoto;
   public $idMenu;
   public $descripcion;

   function __construct($id,$slider,$esPrincipal,$texto,$idFoto,$idMenu){
      $this->id = $id;
      $this->slider = $slider;
      $this->esPrincipal = $esPrincipal;
      $this->texto = $texto;
      $this->idFoto = $idFoto;
      $this->idMenu = $idMenu;
      $this->descripcion = $descripcion;
   }
}
?>