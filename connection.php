<?php

class Connect
{
    static function getConnection()
    {
        $conexion = new PDO("pgsql:host=postgres;port=5432;dbname=hitogrupal", "admin", "admin");
        return $conexion;
    }
}
