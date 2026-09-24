<?php
include('config.php');
include('class.RegisterName.php');
$sender = json_decode(file_get_contents('php://input'));
$sender = array('もりもと','森本');
$hFName = $sender[0];
$kFName = $sender[1];
$Obj = new RegisterName($registerPath);
$familyNameArray =$Obj->register($hFName,$kFName);
echo json_encode($familyNameArray,JSON_UNESCAPED_UNICODE);
?>