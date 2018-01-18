<?php
    $data = json_decode( file_get_contents("php://input"));

    include '../conn.php';

    $id_admin = getId(20);

    $qry = $pdo->prepare("INSERT INTO `admin` (`id_admin` , `username` , `password` , `email`)
    VALUE ('$id_admin' , '$data->username' , '$data->password' , '$data->email')");

    if ($data->username) {
        $qry->execute();
    }else{
        echo "err";
    }

    $pdo = null;

    function getId($length){
    	$char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    	$charLength = strlen($char);
    	$randomString = '';

    	for ($i = 0; $i < $length; $i++) {
        $randomString .= $char[rand(0, $charLength - 1)];
    	}
    	return $randomString;
	}
?>