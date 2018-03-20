<?php
class Comentario
{
   public $id;
   public $fechaHora;
   public $idUsuario;
   public $idNoticia;

   function __construct($id,$fechaHora,$idUsuario,$idNoticia){
      $this->id = $id;
      $this->fechaHora = $fechaHora;
      $this->idUsuario = $idUsuario;
      $this->idNoticia = $idNoticia;
   }
}
?>