<?php
class DatosConexion{
    public $nombreConexion;
    public $servidor;
    public $usuario;
    public $clave;
    public $baseDatos;

    function __construct($nombreConexion,$servidor,$baseDatos,$usuario,$clave)
    {
        $this->nombreConexion=$nombreConexion;
        $this->servidor = $servidor;
        $this->baseDatos = $baseDatos;
        $this->usuario = $usuario;
        $this->clave = $clave;
    }
}