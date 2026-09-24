<?php
class ContentClass
{
	protected $frameNumber=0;
	function __construct()
	{
		;
	}

	public function itemAlone($frameNumber)
	{
		//echo 'inputBox'.$frameNumber;
		echo '<div id="inputBox'.$frameNumber.'" class="inputBox" style="width:100%;height:100%;border:5px solid red">';
				echo '<textarea id="inp'.$frameNumber.'" class="inp" value="v'.$frameNumber.'"  style="width:100%;height:100% ;background:darkgreen;color:white;font-size:31px" value=""></textarea>';
		echo '</div>';
	}
	public function nameAlone($frameNumber)
	{
		$n=50;
		echo '<div id="top" class="" style="width:100%;height:5%;"></div>
			<div id="mid" class="" style="width:100%;height:95%;display:flex">
			<div id="mc0" class="" style="width:20%;height:100%;background:black;border:2px solid white;overflow-y: scroll;">';
				
				for($i=0;$i<$n ;$i++)
				{
    				echo '<div id="nameList'.$frameNumber.'_'.$i.'" class="nameList'.$frameNumber.'" style="width:100%;height:30px;color:white">'.$frameNumber.'_'.$i.'</div>';
    				echo '<div id="pathList'.$frameNumber.'_'.$i.'" type="" class="pathList'.$frameNumber.'" style="width:100%;height:30px;color:white;display:none">pathList'.$i.'</div>';
				}
				
			echo '</div>		
			<div id="mc1" class="" style="width:80%;height:100%;">
				<div id="" class="" style="width:100%;height:30%;">
					<input  id="inp'.$frameNumber.'" class="inp" style="width:100%;height:98%;background: darkgreen;color:white;font-size:34px">
					
				</div>
				<div id="" class="" style="width:100%;height:20%;display: flex;">
					<input id="inpHFName'.$frameNumber.'" class="inpName" style="width:40%;height:98%;background:darkgreen;color:white;font-size:34px">
					<input id="inpHPName'.$frameNumber.'" class="inpName" style="width:40%;height:98%;background:darkgreen;color:white;font-size:34px">
					
				</div>
				<div id="" class="" style="width:100%;height:20%;display: flex;">
					<input id="inpKFName'.$frameNumber.'" class="inpName" style="width:40%;height:98%;background:darkgreen;color:white;font-size:34px">
					<input id="inpKPName'.$frameNumber.'" class="inpName" style="width:40%;height:98%;background:darkgreen;color:white;font-size:34px">
					
				</div>
				<div id="" class="" style="width:100%;height:30%;display: flex;">
					<input id="inpFName'.$frameNumber.'" class="inpName" style="width:40%;height:99%;background:darkgreen;color:white;font-size:34px">
					<input id="inpPName'.$frameNumber.'" class="inpName" style="width:40%;height:99%;background:darkgreen;color:white;font-size:34px">
					<button id="ent0'.$frameNumber.'" class="ent" style="width:10%;height:100%;background:gray;color:white">clear</button>
				</div>
			</div>
		</div>';
		
		
	}
	public function itemReferrence($frameNumber)
	{
		
		echo '<div id="inputBox'.$frameNumber.'" class="inputBox" style="width:100%;height:100%;display:flex;border:5px solid red">';
		
				echo '<textarea id="inp'.$frameNumber.'"   value="'.$frameNumber.'" style="width:50%;height:100% ;background:darkgreen;color:white;border-right:1px solid white;font-size:31px"></textarea>';
				
				echo '<div id="referenceBox'.$frameNumber.'" class="referenceBox" style="width:50%;height:100%;overflow-y:scroll">';
						for($i=0;$i<50;$i++)
						{
							echo '<div id="referenceList'.$frameNumber.'_'.$i.'" class="referenceList'.$frameNumber.'" style="width:100%;height:30px;border-bottum:1px solid white">';
									//echo 'referenceList'.$frameNumber.'_'.$i;
							echo '</div>';
						}
				echo '</div>';

		echo '</div>';
		
	}
	public function dateMaker($frameNumber)
	{
		
		echo '<div id="inputBox'.$frameNumber.'" class="inputBox" style="width:100%;height:100%;display:flex;border:5px solid blue">';
				
				echo '<input id="inp'.$frameNumber.'" class="inp" value="inp'.$frameNumber.'" style="width:30%;height:100% ;background:darkgreen;color:white;border:;font-size:40px">';
				echo '<div id="dateMakerBox'.$frameNumber.'" class="dateMakerBox" style="width:65%;height:100%;overflow-y:scroll;display:flex;border:">';
						
							
							echo '<div id="wareki'.$frameNumber.'" class="seireki" style="width:15%;height:100%;border:1px solid white">';
							        echo '<div id="seireki'.$frameNumber.'" style="width:100%;height:5%;border:1px solid white;margin:1px">西暦 </div>';
									echo '<div id="showa'.$frameNumber.'" style="width:100%;height:5%;border:1px solid white;margin:1px">昭和 </div>';
									echo '<div id="heisei'.$frameNumber.'" style="width:100%;height:5%;border:1px solid white;margin:1px">平成 </div>';
									echo '<div id="reiwa'.$frameNumber.'" style="width:100%;height:5%;border:1px solid white;margin:1px">令和 </div>';
									echo '<div id="wrapWareki'.$frameNumber.'" style="width:100%;height:85%;overflow-y:scroll">';
											for($i=0;$i<100;$i++)
											{
												echo '<div id="warekiYear'.$frameNumber.'_'.$i.'" class="warekiYear'.$frameNumber.'">';
										    		echo $i;
												echo '</div>';
											}
									echo '</div>';

									echo '<div id="wrapSeireki'.$frameNumber.'" style="width:100%;height:95%;overflow-y:scroll">';
											for($i=0;$i<100;$i++)
											{
												
												echo '<div id="seirekiYear'.$frameNumber.'_'.$i.'" class="seirekiYear'.$frameNumber.'">';
                                                    
										   		     echo (1950+$i);echo '<br>';
												echo '</div>';
											}
									echo '</div>';
							echo '</div>';
							echo '<div id="matrix'.$frameNumber.'_0" class="matrix0" style="width:25%;height:50%;border:">';
							    		matrix($frameNumber,0,4,3);
							echo '</div>';
							echo '<div id="matrix'.$frameNumber.'_1" class="matrix1" style="width:45%;height:60%;border:">';
							    		matrix($frameNumber,1,6,7);
							echo '</div>';

						
				echo '</div>';

		echo '</div>';
		
	}
	public function documentMaker($frameNumber)
	{
		echo '<div id="inputBox'.$frameNumber.'" class="inputBox"  style="width:100%;height:100%;border:5px solid blue" >';
		
			
			echo '<div id="inpWrap'.$frameNumber.'" class="inpWrap"  style="width:100%;height:100%;border:;color:white;overflow-y:scroll" >';
				echo '<textarea id="inp'.$frameNumber.'" class="inp" style="width:100%;height:fit-content;background:darkgreen;color:white;font-size:21px;line-height:1.8" rows="40" cols="40">inpWrap';
					echo 'inp'.$frameNumber;
				echo '</textarea>';
			echo '</div>';
			
		echo '</div>';//inpBox
	}
}


function matrix($frameNumber,$matrixNumber,$r,$c)
{
	 $height0=floor(100/$r);
	 $height=floor(100/($r+1));
	 $width=floor(100/$c);
	 
	 //echo '$width='.$width;
	echo '<div id="matrix'.$frameNumber.'_'.$matrixNumber.'" class="" style="width:95%;height:95%;border:1px solid white;margin:3px">';
	if($matrixNumber==1)
	{


       echo '<div class="titleLine'.$frameNumber.'" style="width:100%;height:'.$height.'%;display:flex;border-bottom:1px solid white">';
       
       		echo '<div class="title'.$frameNumber.'_'.$matrixNumber.'_0" style="width:'.$width.'%;height:99%;border:;font-size:14px">日</div>';
       		echo '<div class="title'.$frameNumber.'_'.$matrixNumber.'_1" style="width:'.$width.'%;height:99%;border:;font-size:14px">月</div>';
       		echo '<div class="title'.$frameNumber.'_'.$matrixNumber.'_2" style="width:'.$width.'%;height:99%;border:;font-size:14px">火</div>';
       		echo '<div class="title'.$frameNumber.'_'.$matrixNumber.'_3" style="width:'.$width.'%;height:99%;border:;font-size:14px">水</div>';
       		echo '<div class="title'.$frameNumber.'_'.$matrixNumber.'_4" style="width:'.$width.'%;height:99%;border:;font-size:14px">木</div>';
       		echo '<div class="title'.$frameNumber.'_'.$matrixNumber.'_5" style="width:'.$width.'%;height:99%;border:;font-size:14px">金</div>';
       		echo '<div class="title'.$frameNumber.'_'.$matrixNumber.'_6" style="width:'.$width.'%;height:99%;border:;font-size:14px">土</div>';
       		
       	echo '</div>';
       
		for($i=0;$i<$r;$i++)
		{		       
					echo '<div id="horizontal'.$matrixNumber.'_'.$i.'" style="width:100%;height:'.$height.'%;border:;display:flex">';
					
							for($j=0;$j<$c;$j++)
							{
								
								//echo '$w='.$w;echo '<br>';
								echo '<div id="cell'.$frameNumber.'_'.$matrixNumber.'_'.($c*$i+$j).'" class="cell'.$frameNumber.'_'.$matrixNumber.'" style="width:'.$width.'%;height:99%;border-right:;font-size:28px">';
									
									//echo ('cell'.$frameNumber.'_'.$matrixNumber.'_'.($c*$i+$j));
									
								echo '</div>';
								
							}
							
					echo '</div>';

		}
	}else
	{
		for($i=0;$i<$r;$i++)
		{		       
					echo '<div id="horizontal'.$matrixNumber.'_'.$i.'" style="width:100%;height:'.$height0.'%;border:;display:flex">';
					
							for($j=0;$j<$c;$j++)
							{
								
								//echo '$w='.$w;echo '<br>';
								echo '<div id="cell'.$frameNumber.'_'.$matrixNumber.'_'.($c*$i+$j).'" class="cell'.$frameNumber.'_'.$matrixNumber.'" style="width:'.$width.'%;height:99%;border-right:;font-size:28px">';
									
									//echo ('cell'.$frameNumber.'_'.$matrixNumber.'_'.($c*$i+$j));
									echo $c*$i+$j+1;
								echo '</div>';
							}
							
					echo '</div>';

		}
	}
	echo '</div>';
   

}


?>
