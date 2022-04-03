<?php

function guardar()
{
    require_once('connection.php');
    $conexion = Connect::getConnection();
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $inputs = $data['inputs'];
    $cabecera = $data['cabecera'];
    $cuerpo = $data['cuerpo'];
    $footer = $data['footer'];
    $resultado = $conexion->prepare("UPDATE vistas SET cabecera = '$cabecera', cuerpo = '$cuerpo', footer = '$footer', inputs = '$inputs' where idvista = 3;");
    $resultado->execute();
    echo $resultado;
}
guardar();
