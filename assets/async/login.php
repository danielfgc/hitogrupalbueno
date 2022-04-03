
<?php
 

 
  
  function login(){
    require_once("../../Connection.php");
    $conexion=Db::getConnect();
    $request_body = file_get_contents("php://input");
    $data = json_decode($request_body, true);
    $consulta = $conexion->query("select iduser, usuario, contraseña from usuarios where usuario = '".$data["usuario"]."';");
    foreach($consulta->fetchAll() as $con){
    if($data["usuario"] == $con[1] && password_verify($data["contraseña"], $con[2])){
        $jayson = json_encode(["usuario"=>$data["usuario"],"iduser"=>$con[0]]);
        echo $jayson;
        break;
    }
    }
  }


  login();