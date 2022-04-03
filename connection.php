<?php
class Db
{
	
	function __construct(){}
 
	public static function  getConnect(){
	
			$conexion= new PDO("pgsql:host=localhost;port=5432;dbname=hitogrupal2", "postgres", "curso");
		return $conexion;
	}
}