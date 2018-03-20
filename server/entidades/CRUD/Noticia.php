<?php
class Noticia
{
   public $id;
   public $descripcion;
   public $idFoto;
   public $idPagina;
   public $esPublico;

   function __construct($id,$descripcion,$idFoto,$idPagina,$esPublico){
      $this->id = $id;
      $this->descripcion = $descripcion;
      $this->idFoto = $idFoto;
      $this->idPagina = $idPagina;
      $this->esPublico = $esPublico;
   }
}
?>