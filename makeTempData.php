<?php
$tdArray = json_decode(file_get_contents('php://input'));
file_put_contents('tempFile/temp.json',json_encode($tdArray,JSON_UNESCAPED_UNICODE));

$file = './tempFile/forwardData.json';

if (file_exists($file)) {
    unlink($file);
}
echo json_encode(['success']);

?>