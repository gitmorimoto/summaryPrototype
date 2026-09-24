<?php 

          // include('classComment.php');
           include('config.php');
           include('class.Content.php');
           $contentClassObj=new ContentClass();
         
            $n=50;
            $numOfItems = count($itemIndex);
        print_r($numOfItems);
 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title></title>
 	<meta name="viewport" content="width=device-width,initial-scale=1">
 	<link href="./css/inpForm.css" rel="stylesheet" type="text/css" media="screen  and (min-width: 481px)" /> 
  	
  	<script type="module" src="./js/inpForm.js"> </script>
   
 </head>
 <body style="height:100%;width:100%;font-family:;position:relative">

    <div id="bot" class="z" style="width:100%;height:fit-content;border:10px solid blue;background:black;color:white">
      <div id="indexBox" class="" style="width:100%;height:85px;border:;background:black;color:white;display:">
        <?php
            echo '<div id="firstRow" style="width:100%;height:40px;display:flex">';
            for($i=0;$i<10;$i++){
                echo '<div id="ind'.$i.'" class="ind">'.$itemIndex[$i].'</div>';
            }
            echo '</div>';
            echo '<div id="secondRow" style="width:100%;height:40px;display:flex">';
            for($j=10;$j<18;$j++){
                echo '<div id="ind'.$j.'" class="ind">'.$itemIndex[$j].'</div>';
            }
            echo '</div>';
           
        ?>
        <div id="forward" class="forward" style="width:100px;height:40px;
            border:1px solid white;font-size:16px;color:white;background:black
            ;position:absolute;left:70%;top:40px;border-radius:10px;">　帳票作成
        </div>
      </div>
      

      <div id="instructionBox" class="midr0" style="width:100%;height:100px;border:1px solid white;background:;color:white;font-size:18px">instruction
      
      </div>
      <div id="inpBox" class="z1r1" style="width:98%;height:400px;border:;overflow-y:scroll;">
    
          <?php 
              
               for($i=0;$i<21;$i++)
                {
                    
                    echo '<div id="frame'.$i.'" class="frame" style="width:98%;height:98%;border:2px solid yellow;background:black;color:white">';
                 
                        
                        
                        switch ($i) {
                            
                            case 0:
                            case 1:
                            case 4:
                            case 5:
                            case 6:
                            case 14:
                            case 15:
                            case 16:
                                $contentClassObj->itemAlone($i);
                                break;
                               
                            case 1:
                            
                                $contentClassObj->nameAlone($i);
                                break;
                                
                            case 2:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 18:
                            case 19:
                            case 20:
                            
                                $contentClassObj->itemReferrence($i);
                                break;
                            case 3:
                            case 17:
                            
                                $contentClassObj->dateMaker($i); 
                                break;
                                
                            
                            case 11:
                                
                                $contentClassObj->documentMaker($i);
                                break;

                            case 12:
                                $contentClassObj->dateMaker($i);
                                break;
                                
                            default:
                                break;
                               
 
                         }  
                                    
                   echo '</div>';    
                }
                     
                   
  
               
             
                ?>
        </div> 
           
     </div>
</body>
</html>