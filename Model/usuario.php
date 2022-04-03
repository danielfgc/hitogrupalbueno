<?php

class Usuario
{

 
	public static function eliminar($id){
		$db=Db::getConnect();
		$delete=$db->prepare('delete from vistas where idvista= (:id)');
		$delete->bindValue('id',$id);
		$delete->execute();		
	}
}

 
?>