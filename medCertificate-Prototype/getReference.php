<?php
include('config.php');
$fN = [];
$refArray = [];
//get paths in referenceData
$refPaths = glob('./referenceData/*.json');
//extract framNumber and refArray
foreach($refPaths as $p)
{
    
    $fName = pathinfo($p)['filename'];
    //echo $fName;echo '<br>';
    $n = substr($fName,8);
    //echo $n;echo '<br>';
    $cont = json_decode(file_get_contents($p),true);
    $refArray[$n] = $cont;

}
//print_r($refArray);
echo json_encode($refArray,JSON_UNESCAPED_UNICODE);



?>