<?php

function guardar()
{
    require_once('connection.php');
    $conexion = Db::getConnect();
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $inputs = $data['inputs'];
    $cabecera = $data['cabecera'];
    $cuerpo = $data['cuerpo'];
    $footer = $data['footer'];
    $nombre= $data['nombrevista'];
    $resultado = $conexion->prepare("UPDATE vistas SET cabecera = '$cabecera', cuerpo = '$cuerpo', footer = '$footer', inputs = '$inputs', nombrevista = '$nombre' where idvista = ".$_GET['idvista'].";");
    $resultado->execute();
    echo $resultado;
}
guardar();
