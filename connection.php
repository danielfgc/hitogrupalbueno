<?php

class Connect
{
    function getConnection()
    {
        $conexion = new PDO("pgsql:host=postgres;port=5432;dbname=hitogrupalPG", "admin", "admin");
        return $conexion;
    }
}
