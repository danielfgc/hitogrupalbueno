<?php

function guardar(){
    require_once('connection.php');
    $conexion = Connect::getConnection();
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $inputs = $data['inputs'];
    $cabecera = $data['cabecera'];
    $resultado = $conexion->prepare("INSERT INTO vistas values(default, '$cabecera','','',2,'$inputs');");
    $resultado->execute();
    echo $resultado;
}
guardar();


?>