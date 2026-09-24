<?php
$tdArray = json_decode(file_get_contents('tempFile/temp.json'),true);
echo json_encode($tdArray,JSON_UNESCAPED_UNICODE);


?>