<?php
$tempData = json_decode(file_get_contents('php://input'));
file_put_contents('tempFile/temp.json',json_encode($tempData,JSON_UNESCAPED_UNICODE));
echo json_encode(['temp stored']);

?>