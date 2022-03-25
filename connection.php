<?php

    class Connect{
        function getConnection(){
            $conexion = new PDO("pgsql:host=localhost;port=5432;dbname=mvc", "postgres","curso");
            return $conexion;
        }
    }