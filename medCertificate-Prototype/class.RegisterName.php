<?php
Class RegisterName
{
    private $familyNameRegisterFile;
    private $personalNameRegisterFile;
    public function __construct($registerPath)
    {
        $this->familyNameRegisterFile = $registerPath.'/hFNameToKFName.json';
        $this->personalNameRegisterFile = $registerPath.'/hPNameToKPName.json';
    } 
    public function registerF($hFName,$kFName)//hiragana family name and kanji family name
    {
        $kFNameArray = [];//array of kanji family name
        if(file_exists($this->familyNameRegisterFile))
        {
            $hFNameToKFName = json_decode(file_get_contents($this->familyNameRegisterFile),true);
        }else{
            $hFNameToKFName = [];
        }
        //echo '$hFNameToKFName=';//converter from hiragana family name to kannji family name
        //print_r($hFNameToKFName);echo '<br>';
        $kFNameArray = [];
        if(!empty($hFNameToKFName))
        {
            //echo 'not empty';echo '<br>';
            if(array_key_exists($hFName,$hFNameToKFName))
            {
                    
                $kFNameArray = $hFNameToKFName[$hFName];
                arsort($kFNameArray);
                //echo '$kFNameArray=';
                //print_r($kFNameArray);echo '<br>';
                if(array_key_exists($kFName,$kFNameArray))
                {
                    //echo 'same item exists';echo '<br>';
                    $f = $kFNameArray[$kFName];
                    $f++;
                    $kFNameArray[$kFName] = $f;
                    arsort($kFNameArray);
                    //print_r($kFNameArray);echo '<br>';
                }else{
                    $kFNameArray[$kFName] = 1;
                }
                arsort($kFNameArray);  
                $hFNameToKFName[$hFName] = $kFNameArray;
            
           
            }else{
                $hFNameToKFName[$hFName] = array($kFName=>1);
            }
       
            
            //print_r($hFNameToKFName);echo '<br>';
           
        
        }else{
            $hFNameToKFName[$hFName] = array($kFName=>1) ;
        }
        //print_r($hFNameToKFName);echo '<br>';
        file_put_contents($this->familyNameRegisterFile,
            json_encode($hFNameToKFName,JSON_UNESCAPED_UNICODE));
        return $hFNameToKFName;
    }
    public function registerP($hPName,$kPName)//hiragana family name and kanji family name
    {
        $kPNameArray = [];//array of kanji family name
        if(file_exists($this->personalNameRegisterFile))
        {
            $hPNameToKPName = json_decode(file_get_contents($this->personalNameRegisterFile),true);
        }else{
            $hPNameToKPName = [];
        }
        echo '$hPNameToKPName=';//converter from hiragana family name to kannji family name
        print_r($hPNameToKPName);echo '<br>';
        $kPNameArray = [];
        if(!empty($hPNameToKPName))
        {
            //echo 'not empty';echo '<br>';
            if(array_key_exists($hPName,$hPNameToKPName))
            {
                    
                $kPNameArray = $hPNameToKPName[$hPName];
                arsort($kPNameArray);
                //echo '$kFNameArray=';
                //print_r($kFNameArray);echo '<br>';
                if(array_key_exists($kPName,$kPNameArray))
                {
                    //echo 'same item exists';echo '<br>';
                    $f = $kPNameArray[$kPName];
                    $f++;
                    $kPNameArray[$kPName] = $f;
                    arsort($kPNameArray);
                    //print_r($kFNameArray);echo '<br>';
                }else{
                    $kPNameArray[$kPName] = 1;
                }
                arsort($kPNameArray);  
                $hPNameToKPName[$hPName] = $kPNameArray;
            
           
            }else{
                $hPNameToKPName[$hPName] = array($kPName=>1);
            }
       
           
            //print_r($hFNameToKFName);echo '<br>';
           
        
        }else{
            echo 'no $hPNameToKPName';
            $hPNameToKPName[$hPName] = array($kPName=>1) ;
        }
         file_put_contents($this->personalNameRegisterFile,
         json_encode($hPNameToKPName,JSON_UNESCAPED_UNICODE));
        //print_r($hFNameToKFName);echo '<br>';
        return $hPNameToKPName;
    }
}
///////////////////////example/////////////////////////////////////////////////
/*
include('config.php');
$Obj = new RegisterName($registerPath);
$hPName = 'たけひこ';
$kPName = '武彦';
$hPNameToKPName=$Obj->registerP($hPName,$kPName);
echo 'result=';
print_r($hPNameToKPName);echo '<br>';
*/
?>