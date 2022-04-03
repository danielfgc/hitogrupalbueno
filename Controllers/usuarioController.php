<?php

class UsuarioController
{
	
	function __construct()
	{
		
	}
	function vervista(){
		require_once('Views/Usuario/vervista.php');
	}
 
	function lista(){
		require_once('Views/Usuario/lista.php');
	}
	
	function nuevavista(){

 
		require_once('Views/Usuario/nuevavista.php');
	}

 
	function editarvista(){
		require_once('Views/Usuario/editarvista.php');
	}
	function eliminar(){
		$id=$_GET['idvista'];
		Usuario::eliminar($id);
		$this->lista();
	}
	function cerrarsesion(){
		setcookie('iduser','',time()-1000);
		setcookie('usuario','',time()-1000);
		header('Location:index.php');
	}
 
	function error(){
		require_once('Views/Usuario/error.php');
	}
 
}