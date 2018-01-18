<?php
    $data = json_decode( file_get_contents("php://input"));

    include 'conn.php';

    $username = $data->username;
    $passwo = $data->password;  

    $qry = $pdo->prepare("SELECT * FROM `peserta` WHERE `username` = '$username'");
    $qry->execute();

    $selin = $qry->fetch(PDO::FETCH_ASSOC);

    if ($qry->rowCount() == 0) {
        $res = "Fname";
    } else if($passwo <> $selin['password']){
        $res = "Fpass";
    }else {
        $res = $selin;
    }

    echo json_encode($res);



?>