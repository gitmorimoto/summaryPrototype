<?php
$path = file_get_contents('php://input');
$content = json_decode(file_get_contents($path),true);
echo json_encode($content,JSON_UNESCAPED_UNICODE);


?>