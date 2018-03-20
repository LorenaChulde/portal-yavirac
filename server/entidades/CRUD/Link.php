<?php
class Link
{
   public $id;
   public $descripcion;
   public $url;
   public $idMenu;

   function __construct($id,$descripcion,$url,$idMenu){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->url = $url;
      $this->idMenu = $idMenu;
   }
}
?>