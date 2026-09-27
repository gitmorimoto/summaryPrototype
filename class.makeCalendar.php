<?php
class MakeCalendar{
    protected $cN;
    protected $h;
    protected $w;
    function __construct($calendarNumber,$width,$height)
	{
		$this->cN = $calendarNumber;
        $this->h = $height;
        $this->w = $width;

	}

    public function calendarMaker(){
        echo '<textarea id="inp'.$this->cN.'" class ="inp"
         style="width:200px;height:50px;font-size:28px"></textarea>';
        echo '<div id="calendarContainer'.$this->cN.'" 
        style="width:'.$this->w.'px;height:'.$this->h.'px;
        border:1px solid white;color:white;display:flex" >';
            echo '<div id="eraConteiner'.$this->cN.'" class="eraConteiner" 
                style="width:10%;height:100%;border:1px solid white;
                margin:2px;">';
                echo '<div id="s'.$this->cN.'" class="s" 
                style="width:100%;height:10%;border:1px solid white;
                margin:2px;">昭和';
                echo '</div>';
                echo '<div id="h'.$this->cN.'" class="h" 
                style="width:100%;height:10%;border:1px solid white;
                margin:2px;">平成';
                echo '</div>';
                echo '<div id="r'.$this->cN.'" class="r" 
                style="width:100%;height:10%;border:1px solid white;
                margin:2px;">令和';
                echo '</div>';
            echo '</div>';
            echo '<div id="" class="yearConteiner"  
                style="width:20%;height:100%;border:1px solid white;
                margin:2px;">';
                echo '<div id="" class=""  
                    style="width:100%;height:10%;display:flex;
                    align-items:center;justify-content:center;border-bottom:1px solid white">年</div>';
                echo '<div id="" class=""  
                    style="width:100%;height:90%;border:;
                    margin:2px;overflow-y:scroll">';
                
                    for($i=0;$i<100;$i++){
                        echo '<div id="y'.$this->cN.'-'.$i.'" class="y'.$this->cN.'" style="display:flex;align-items:center;justify-content:center">';
                        echo '</div>';
                    }
                
                echo '</div>';
            echo '</div>';
            echo '<div id="" class="monthContainer"  
                style="width:20%;height:100%;border:1px solid white;
                margin:2px;">';
                echo '<div id="" class=""  
                    style="width:100%;height:10%;display:flex;
                    align-items:center;justify-content:center;border-bottom:1px solid white">月';
                echo '</div>';
                echo '<div id="" class=""  style="width:100%;height:90%;border:;margin:2px;">';
                    for($j=0;$j<12;$j++){
                        echo '<div id="m'.$this->cN.'-'.$j.'" class="m'.$this->cN.'" style="">'.($j+1);
                        echo '</div>';
                    }
                echo '</div>';
            echo '</div>';
            echo '<div id="" class="dayContainer" style="width:'.(0.5*($this->w)).'px;height:100%;border:;margin:2px">';
                echo '<div id="" class="" style="width:100%;height:10%;border:1px solid white;display:flex;
                align-items:center;justify-content:center">日';
                echo '</div>';
                echo '<table id="table'.$this->cN.'" class="" style="border:2px solid blue;margin:2px">';
                echo '</table>';
            echo '</div>';
            
        echo '</div>';
    }
}



?>
<!--
<html>
    <body style="background:black">
    <?php
       // $obj = new MakeCalendar(1,'600px','350px');
       // $obj->calendarMaker();
    ?>
    </body>
</html>
-->