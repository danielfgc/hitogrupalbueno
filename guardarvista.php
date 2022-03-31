<?php

$request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    $inputs = $data['inputs'];
    $cabecera = $data['cabecera'];



?>