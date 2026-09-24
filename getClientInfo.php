<?php
$selPath = file_get_contents('php://input');
//$selPath = 'C:/Apache24/htdocs/myAppli/clientData/1635142590.dat';
$cont = json_decode(file_get_contents($selPath),true);
echo json_encode($cont,JSON_UNESCAPED_UNICODE);


?>