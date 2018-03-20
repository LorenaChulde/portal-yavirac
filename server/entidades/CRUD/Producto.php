<?php
class Producto
{
   public $id;
   public $titulo;
   public $descripcion;
   public $icono;
   public $prioridad;
   public $linkPaper;
   public $linkSitio;
   public $idPagina;

   function __construct($id,$titulo,$descripcion,$icono,$prioridad,$linkPaper,$linkSitio,$idPagina){
      $this->id = $id;
      $this->titulo = $titulo;
      $this->descripcion = $descripcion;
      $this->icono = $icono;
      $this->prioridad = $prioridad;
      $this->linkPaper = $linkPaper;
      $this->linkSitio = $linkSitio;
      $this->idPagina = $idPagina;
   }
}
?>