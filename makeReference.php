<?php
include('config.php');
//1 get item and frame number
$sender = json_decode(file_get_contents('php://input'));
//$sender = [7,'MR'];
$fN = $sender[0];
$item = $sender[1];


//2 get item frequency file data (itemFreqArray)
$rPath = './referenceData/itemFreq'.$fN.'.json';
if(file_exists($rPath))
{
    $itemFreqArray[$fN] = json_decode(file_get_contents($rPath),true);
}else{
    $itemFreqArray[$fN] = [];
}

//3 in case where the item exist previousy in itemFreqArray
if(array_key_exists($item,$itemFreqArray[$fN]))
{
    $freq = $itemFreqArray[$fN][$item];
    $freq = $freq+1;
    //echo $freq;
    $itemFreqArray[$fN][$item] = $freq;
//4 in case where the item does'nt exist in itemFreqArray
}else{
    $itemFreqArray[$fN][$item] = 1;
}
arsort($itemFreqArray[$fN]);
$total = array_sum($itemFreqArray[$fN]);
$itemFreqArray[$fN] = array_map(fn($v) => number_format( $v /$total, 2) , $itemFreqArray[$fN]);
//5 store updated itemFreqArray in itemFreq.json
file_put_contents($rPath,json_encode($itemFreqArray[$fN],JSON_UNESCAPED_UNICODE));

//6 return updated itemFreqArray
echo json_encode($itemFreqArray[$fN],JSON_UNESCAPED_UNICODE);
?>