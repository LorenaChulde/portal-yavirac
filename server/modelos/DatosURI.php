<?php
class DatosURI{
    public $controlador;
    public $accion;
    public $argumentos = array();
    public $mensaje_header;
    public $mensaje_body;

    function __construct($uri){
        $ruta_path = explode('?',$uri)[0];
        $this->argumentos = $_REQUEST;
        $this->mensaje_header = getallheaders();
        $partes_ruta = explode('/',$ruta_path);
        $this->accion = $partes_ruta[count($partes_ruta)-1];
        $this->controlador = $partes_ruta[count($partes_ruta)-2];  
        $this->mensaje_body = json_decode(file_get_contents('php://input'),true);
    }
}