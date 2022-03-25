<?php

class Producto{
    private $id;
    private $nombre;
    private $unidades;
    private $precio;

    public function __construct($id,$nombre, $unidades, $precio)
    {
        $this->setId($id);
        $this->setnombre($nombre);
        $this->setunidades($unidades);
        $this->setprecio($precio);
    }
    public function getId(){
        return $this->id;
    }
    public function setId($id){
        $this->id;
    }
    public function getnombre(){
        return $this->nombre;
    }
    public function setnombre($nombre){
        $this->nombre;
    }
    public function getunidades(){
        return $this->unidades;
    }
    public function setunidades($unidades){
        $this->unidades;
    }
    public function getprecio(){
        return $this->precio;
    }
    public function setprecio($precio){
 
			$this->precio;
    }
}