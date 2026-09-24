<?php
include('config.php');
//echo $clientManagerPath;echo '<br>';
//echo $clientManagerPath.'/output.json';
if(file_exists($clientManagerPath.'/output.json'))
{
    $out = json_decode(file_get_contents($clientManagerPath.'/output.json'),true);
   // print_r('out='+$out);
    if(!empty($out))
    {
        $res = $out;
    }else{
        $res = ['no data'];
    }
}else{
    $res = ['no data'];
}

echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>