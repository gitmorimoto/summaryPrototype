<?php
$backData = json_decode(file_get_contents('./tempFile/tdArray.json'),true);
//print_r($backData);
echo json_encode($backData,JSON_UNESCAPED_UNICODE);

?>