<?php
include('config.php');
$hFName = file_get_contents('php://input');
//$hFName = 'やまだ';
if(file_exists($registerPath.'/hFNameToKFName.json'))
{
    $fNameArray = json_decode(file_get_contents($registerPath.'/hFNameToKFName.json'),true);
}else{
     $fNameArray = [];
}
$kFNameArray = $fNameArray[$hFName];
//print_r($fNameArray);
echo json_encode($kFNameArray,JSON_UNESCAPED_UNICODE);

?>