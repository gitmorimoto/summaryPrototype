<?php
include('config.php');
include('class.DatabaseManager.php');
$ts=time();
copy('tempfile/temp.json',$databasePath.'/'.$ts.'.json');//add new data to database
$cont=json_decode(file_get_contents('tempfile/temp.json'),true);//get new content
//print_r($cont);echo '<br>';
$id=$cont[0];

$path=$databasePath.'/'.$ts.'.json';//make path to new data
$obj=new DatabaseManager($databasePath);
$obj->addIdPath($id,$path);//add array of $id and $path to $idToPath

echo json_encode(['stored']);

?>