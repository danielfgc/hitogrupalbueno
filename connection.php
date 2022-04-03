<?php
class Db
{
	
	function __construct(){}
 
	public static function  getConnect(){
	
			$conexion= new PDO("pgsql:host=postgres;port=5432;dbname=hitogrupal2", "admin", "admin");
		return $conexion;
	}
}
