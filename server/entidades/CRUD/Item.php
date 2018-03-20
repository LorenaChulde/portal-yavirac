<?php
class Item
{
   public $id;
   public $descripcion;
   public $link;
   public $idMenu;
   public $idPagina;

   function __construct($id,$descripcion,$link,$idMenu,$idPagina){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->link = $link;
      $this->idMenu = $idMenu;
      $this->idPagina = $idPagina;
   }
}
?>