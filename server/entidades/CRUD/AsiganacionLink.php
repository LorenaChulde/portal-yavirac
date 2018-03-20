<?php
class AsiganacionLink
{
   public $id;
   public $prioridad;
   public $idLink;
   public $idPagina;

   function __construct($id,$prioridad,$idLink,$idPagina){
      $this->id = $id;
      $this->prioridad = $prioridad;
      $this->idLink = $idLink;
      $this->idPagina = $idPagina;
   }
}
?>