<?php
    $dsn = "mysql:dbname=letsbase;";
    $host = "root";
    $passw = "config123";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin , X-Requested-With, Content-Type , Accept");

    $pdo = new PDO($dsn , $host , $passw);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>