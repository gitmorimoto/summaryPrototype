<?php
$json = file_get_contents('php://input');
$inpData = json_decode($json,true);
file_put_contents('tempFile/forwardData.json',json_encode($inpData,JSON_UNESCAPED_UNICODE));
echo json_encode($inpData,JSON_UNESCAPED_UNICODE);

?>