<?php
include('config.php');
$hPName = file_get_contents('php://input');
//$hFName = 'やまだ';
if(file_exists($registerPath.'/hPNameToKPName.json'))
{
    $pNameArray = json_decode(file_get_contents($registerPath.'/hPNameToKPName.json'),true);
}else{
     $pNameArray = [];
}
$kPNameArray = $pNameArray[$hPName];
//print_r($fNameArray);
echo json_encode($kPNameArray,JSON_UNESCAPED_UNICODE);

?>