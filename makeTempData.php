<?php
$tdArray = json_decode(file_get_contents('php://input'));
file_put_contents('tempFile/temp.json',json_encode($tdArray,JSON_UNESCAPED_UNICODE));
echo json_encode(['success']);

?>