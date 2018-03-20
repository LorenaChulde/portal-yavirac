<?php
class Usuario
{
   public $id;
   public $nombreCompleto;
   public $nickname;
   public $email;
   public $clave;
   public $avatar;

   function __construct($id,$nombreCompleto,$nickname,$email,$clave,$avatar){
      $this->id = $id;
      $this->nombreCompleto = $nombreCompleto;
      $this->nickname = $nickname;
      $this->email = $email;
      $this->clave = $clave;
      $this->avatar = $avatar;
   }
}
?>