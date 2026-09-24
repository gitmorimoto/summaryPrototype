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
      // print_r($array);echo '<br>';
    if(gettype($array)=='array')
    {
        foreach($array as $path)
        {
            //echo $path;echo '<br>';
            array_push($pathArray,$path);
        }
    }else{
        //echo 'not array';echo '<br><br><br>';
        $path = $array;
        //echo $path;echo '<br>';
        array_push($pathArray,$path);
    }
}
//print_r($pathArray);
//3 get id,name,date from each of paths
foreach($pathArray as $p)
{
     $cont = json_decode(file_get_contents($p),true);
    $ts = pathinfo($p)['filename'];
    $formed = date("Y/m/d",(int)$ts);
    //echo $formed;echo '<br>';
   // print_r($cont);echo '<br>';
    if($cont[0])
    {
        $id = $cont[0];
    }else{
        $id = "";
    }
    if($cont[1])
    {
        $name = $cont[1];
    }else{
        $name = "";
    }
    
    if(!empty($formed))
    {
        $day = $formed;
    }else{
        $day = "";
    }
    
    //4 make array([id,name,data],each of paths);
    $res[] = array($id.'/'.$name.'/'.$day,$p);


}

   
//5 send this array as result
echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>