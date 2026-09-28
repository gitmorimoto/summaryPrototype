<?php
if(file_exists('tempFile/forwardData.json')){
    $json = file_get_contents('tempFile/forwardData.json');
    $forwardData = json_decode($json,true);
}else{
    $forwardData = [];
}

echo json_encode($forwardData,JSON_UNESCAPED_UNICODE);
?>