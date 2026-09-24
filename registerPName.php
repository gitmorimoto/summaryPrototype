<?php
include('config.php');
include('class.RegisterName.php');
$sender = json_decode(file_get_contents('php://input'));
$sender = array('たけひこ','武彦');
$hPName = $sender[0];
$kPName = $sender[1];
$Obj = new RegisterName($registerPath);
$personalNameArray =$Obj->registerP($hPName,$kPName);
echo json_encode($personalNameArray,JSON_UNESCAPED_UNICODE);
?>