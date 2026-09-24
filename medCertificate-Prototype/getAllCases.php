<?php
include('config.php');
//1 get idToPath from databasePath/manager/idToPath.json
$filePath = $databasePath.'/manager/idToPath.json';
$idToPath = json_decode(file_get_contents($filePath),true);
//print_r($idToPath);
//2 get all paths from idToPath.json
$pathArray = [];
$res = [];
foreach($idToPath as $array)
{
    //print_r($array);echo '<br>';
    foreach($array as $path)
    {
        array_push($pathArray,$path);
    }
}
//print_r($pathArray);
//3 get id,name,date from each of paths
foreach($pathArray as $p)
{
    $cont = json_decode(file_get_contents($p),true);
    $id = $cont[0];
    $name = $cont[1];
    $day = $cont[12];
    //4 make array([id,name,data],each of paths);
    $res[] = array($id.'/'.$name.'/'.$day,$p);

}

   
//5 send this array as result
echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>