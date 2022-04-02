<?php

function guardar(){
    require_once('connection.php');
    $conexion = Connect::getConnection();
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $inputs = $data['inputs'];
    $cabecera = $data['cabecera'];
    $conexion->query("INSERT INTO vistas(default, '$cabecera','','',2,'$inputs');");
    echo true;
}
guardar();


?>