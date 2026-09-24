<?php
/* This file finds previous data registered with target id. 
If previous data is not found, the client information is found.
This goes to client manager file in case of no data found in database or client data and 
clien information is gotten.
*/
include('config.php');

//get id
$id = file_get_contents('php://input');
//$id = 25496;
$res = [];
//call idToPath from databasePath
$ITPpath = $databasePath.'/manager/idToPath.json';
$idToPath = json_decode(file_get_contents($ITPpath),true);
$clientDataITP = $pathForClientData.'/manager/idToPath.json';
$clIdToPath = json_decode(file_get_contents($clientDataITP),true);
//print_r($clIdToPath);
//in case that id exists in idToPath file

if(array_key_exists($id,$idToPath))
{
    $selPathArray = $idToPath[$id];
    $res = array(0,$selPathArray);
}

//in case that id does not exist in idToPath from databasePah file
//  but exist in idToPath from clienData file
else if(array_key_exists($id,$clIdToPath))
{
    $selClPathArray = $clIdToPath[$id];
    $res = array(1,$selClPathArray);
}
//in case that id doet not exist in idToPath either from databasePath nor clientData file
else
{
    $clientManagerOutPath = '../clientManager-Prototype/port/outPort.txt';
    file_put_contents($clientManagerOutPath,json_encode($selfPath,JSON_UNESCAPED_UNICODE));
    $res = array(2,$clientManagerPath);
}
//send result
echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>