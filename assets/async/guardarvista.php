<?php

function guardar()
{
    require_once('../../Connection.php');
    $conexion = Db::getConnect();
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $inputs = $data['inputs'];
    $cabecera = $data['cabecera'];
    $cuerpo = $data['cuerpo'];
    $footer = $data['footer'];
    $nombre = $data['nombrevista'];
    $resultado = $conexion->prepare("INSERT INTO vistas values(default, '$cabecera','$cuerpo','$footer',".$_COOKIE['iduser'].",'$inputs','$nombre');");
    $resultado->execute();
    echo $resultado;
}
guardar();
