<?php
$json = file_get_contents('php://input');
$tdArray = json_decode($json,true);
if(!empty($tdArray)){
    file_put_contents('./tempFile/tdArray.json',
    json_encode($tdArray,JSON_UNESCAPED_UNICODE));

}else{
    $tdArray = [];
}
echo json_encode($tdArray,JSON_UNESCAPED_UNICODE);


?>