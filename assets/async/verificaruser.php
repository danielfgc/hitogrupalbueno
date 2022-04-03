<?php

function verificarUser($name){
    require_once("../../Connection.php");
    $conexion=Db::getConnect();
    $consulta = $conexion->prepare('select usuario from usuarios;');
    $consulta->bindParam('user',$name);
    $consulta->execute();
    $verificar = $consulta->fetch();
    return $verificar;
}

function respuesta(){
    require_once("../../Connection.php");
    $conexion=Db::getConnect();
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $consulta = $conexion->query("select pregunta, respuesta from usuarios where usuario = '".$data['user']."';");
    $modal= "#respuestarecu";
    foreach($consulta->fetchAll() as $fila){
    if (verificarUser($data['recuperaruser'])){
        $jayson = json_encode(['modal'=>$modal,'pregunta'=>$fila[0], 'user'=>$data['recuperaruser']]);
        echo $jayson;
        break;
        
    }
}

}
respuesta();
