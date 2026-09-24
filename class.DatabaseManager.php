<?php
class DatabaseManager
{
    protected $databasePath;
    protected $itToPath;
    public function __construct($databasePath)
    {
        $this->databasePath=$databasePath;
    }

    public function managerMaker()//make manager/idToPath.jon from data files
    {
        $pathArray = [];
        $idToPath = [];
        $keyArray = [];
        $databasePath = $this->databasePath;
        $pathArray = glob($databasePath.'/*');
        //print_r($pathArray);
        foreach($pathArray as $path)
        {
            if(is_file($path))
            {
                $cont = json_decode(file_get_contents($path),true);
                if(count($cont)>1)
                {
                    $id = $cont[0][0];
                }else{
                    $id = $cont[0];
                }
                    //echo $id;echo '<br>';
                    //print_r($keyArray);echo '<br>';
                    //print_r($idToPath);echo '<br>';
                if(!empty($idToPath))
                {
                        //print_r(array_keys($idToPath));
                    if(in_array($id,$keyArray))
                    {
                            //echo 'same id exists';echo '<br>';
                        $pathArray = $idToPath[$id];
                            //print_r($pathArray);
                            //echo $path;
                            array_push($pathArray ,$path);
                            $idToPath[$id] = $pathArray;
                     }else{
                           // echo 'new id';echo '<br>';
                            $idToPath[$id]=[$path];
                    }
                }else{
                        //echo 'empty idToPath';echo '<br>';
                        $idToPath[$id]=[$path];
                }
                
            }
             $keyArray[] = $id;
             array_values($keyArray);
        }
        //print_r($idToPath);echo '<br><br>';
        //echo $databasePath.'/manager/idToPath.json';echo '<br>';
        file_put_contents($databasePath.'/manager/idToPath.json',json_encode($idToPath,JSON_UNESCAPED_UNICODE));
        $this->idToPath = $idToPath;
        return $idToPath;
    }

    public function addIdPath($id,$path)//$id and the path are added to idToPath
    {
        //echo $this->databasePath.'/manager/idToPath.json';
        if(file_exists($this->databasePath.'/manager/idToPath.json'))
        {
            
            $idToPath = json_decode(file_get_contents($this->databasePath.'/manager/idToPath.json'),
            true);
            $keyArray = array_keys($idToPath);
            if(in_array($id,$keyArray))
            {
                $pathArray = $idToPath[$id];
                array_push($pathArray,$path);
                $idToPath[$id] = $pathArray;
            }else{
                $idToPath[$id] = [$path];
            }
            
            //print_r($idToPath);
        }else{
            
            $idToPath[$id] = [$path];
            
        }
        
        file_put_contents($this->databasePath.'/manager/idToPath.json',json_encode($idToPath));
        
    }

}

/////////////////////////example////////////////////////////////////////
/*
include('config.php');
//echo $databasePath;echo '<br>';
$obj=new DatabaseManager($databasePath);
//$idToPath = $obj->managerMaker();
$id = 333;
$path = 'C:/Apache24/htdocs/myAppli/docMaker/database/mCertificate/1758573459.json';
$obj->addIdPath($id,$path);
*/
?>