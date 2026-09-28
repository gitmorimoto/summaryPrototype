<?php 

          // include('classComment.php');
           include('config.php');
           include('class.Content.php');
           $contentClassObj=new ContentClass();
         
            $n=50;
 
 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title></title>
 	<meta name="viewport" content="width=device-width,initial-scale=1">
 	<link href="./css/index.css" rel="stylesheet" type="text/css" media="screen  and (min-width: 481px)" /> 
  	<link href="./css/print.css" rel="stylesheet" type="text/css" media="print" />
  	<script type="module" src="./js/index.js"> </script>
   
 </head>
 <body style="height:100%;width:100%;font-family:;position:relative">
    <button id="printScreen" class="" style="position:absolute;left:210mm;top:100mm" >back</button>

 	<div id="top" class="top" style="width:100%;height:50px;border:;background:;color:white;border:;display:flex">
            	
            <div id="topc0" class="top" style="width:15%;height:99% ;display:flex;border:">
                <span>ID:</span>
                <div id="disp0" class="disp" style="width:70%;height:80%;display:">
                        <input type="text" name="sid" id="td0" class="td" value="" 
                        style="width:95%;height:99%;background:darkgreen ;color:white">
                </div>
                <button id="search" class="cb" type="" style="width:30%;height:99% " >検索</button>    
            </div>
            <div id="topc1" class="top" style="width:5%;height:100%;display:flex">
                    <button class="cb" type="" id="showAll" style="width:99%;height:99%;
                    " >全例表示 </button>
                   
            </div>
            <div id="topc2" class="top" style="width:80%;height:100%;display:flex;border:">

                <button id="backward"  class="cb" style = "width:10%" >入力フォーム</button>
                <button id="conf"    class="cb" style = "width:5%" >確定</button>
                <button id="recover"     class="cb" style = "width:5%" >修正</button>
                <button id="store"　 class="cb" style = "width:5%" >保存</button>
                <button id="print" class="cb" style = "width:5%"  >印刷</button>
                <button id="del" class="cb" style = "width:7%"  >clear  </button>
                <!--
                <button id="modeChange0" class="modeChange"  >モード変換0</button>
                <button id="modeChange1" class="modeChange"  >モード変換1</button>
                -->
                <button id="toTop" class="cb" style = "width:5%">top</button>
                <button id="cFontS" class="cb" style = "width:10%">本文フォント縮小</button>
                <button id="cFontL" class="cb" style = "width:10%">本文フォント拡大</button>
            </div>
            
 	</div>

 	<div id="mid" class="" style="width:150%;height:600mm;border:;background:;display: flex">
    	<div id="mc0" class="" style="width:10%;height:95%;background: black;color:white;font-size:12px;overflow-y: scroll">
            <?php
           
            for($i=0;$i<$list0Size;$i++){
              echo '<div id="caseDateA'.$i.'" class="caseDate" style="width:100%;height:25px;border-bottom:1px solid yellow;display:"></div>';
             
            }
            ?>     
       </div>
       <div id="mc1" class="" style="width:10%;height:95%;background: black;color:white;font-size:12px;overflow-y: scroll">
         <?php
           for($i=0;$i<$list1Size;$i++){
              echo '<div id="caseDateB'.$i.'" class="caseDate" style="width:100%;height:25px;border-bottom:1px solid yellow;display:"></div>';
             
           }


         ?>    
       </div>

 	   <div id="mc2" class="" style="width:fit-content;height:100%;border:" >
       	        	
 				<div id="page0" class="z" style="width:210mm;height:290mm;background:black;color:white;
                border:1px solid white;position: relative;user-select: none; ">
                     
 				       <div id="r1" class="row" style="height:30mm;width:290mm;">
                            <div id="tit" style="position:relative;left:85mm;top:10mm;font-size:22px">要　約</div>
 						
 					   </div>

 				   	   <div id="r2" class="row" style="height:15mm;width:162.5mm;margin-left: 22mm;display: flex;padding:;border:">
               
                            <div id="r2c1" class="bi" style="width:70px;padding:10px;font-size:14px">患者氏名  </div>
                            <div id="r2c2" class="bi" style="width:140px;height:100%;border-right:;padding:">
                                 <div id="disp1" class="disp" style="width:95%;margin-left:4px;margin-top:2mm">
                                     <input type="text" name="ptname"  id="td1" class="td" value="" style="width:70%;background: darkgreen;color:white;">
                                 </div>     
                            </div>
                            <div id="r2c3" class="bi" style="width:35px;height:99%;margin-left: 10px;padding:10px;font-size:14px"><span class="pbi">性別</span></div>
                            <div id="r2c4" class="bi" style="width:25px;height:100%;padding:">
                                 <div id="disp2" class="disp" style="width:95%;height:60%;margin-top:2.3mm">
                                     <input type="text" name="sex"  id="td2" class="td" list="sex" value="" style="width:70%;background: darkgreen;color:white;">
                                           

                                     </div>
                                 </div>
                            <div id="r2c5" class="bi" style="width:70px;margin-left:20px;padding:10px;font-size:14px"><span class="pbi" >生年月日</span> </div>
                            <div id="r2c6" class="bi" style="width:150px;padding:10px">
                                 <div id="disp3" class="disp" style="width:100%;">
                                      <input type="" name="bday"  id="td3" class="td" value="" style="width:70%;background: darkgreen;color:white;">
                                 </div>
                    
                            </div>
                            <div id="r2c7" class="" style="width:50px;height:100%;display:flex;padding:10px">
                                 <div id="disp4" class="disp" style="width:50%;height:20px;background:">
                                      <input type="text" name="age"  id="td4" class="td" value="" style="width:70%;background: darkgreen;color:white;">     
                                 </div>
                                 <div id="age2" class="bi" style="width:50%;height:20px;">歳</div>
                                 </div>
                                 <div id="inpDate0" style="">
                      
                                 </div>

                 
                            </div>

 					  <div id="r3" class="row" style="height:16mm;width:160mm;margin-left: 22mm;display: flex;border:;margin-top: 3px;padding:5px;border: ">
 						     <div id="r3c1" class="bi" style="width:10%;margin-left:1.6mm"><div id="r3c1c1">住所</div></div>
                             <div id="r3c2" style="width:90%">
                                 <div id="r3c2r1" style="100%">
                                      <div id="postn" style="display:flex">
                                          <div class="bi">〒</div>
                                          <div id="disp5" class="disp" style="width:70%;height:20px;">
                                               <input type="text" id="td5" class="td"  value="" style="width:70%;background: darkgreen;color:white;">
                                          </div>
                                      </div>
                                 </div>
                                 <div id="r3c2r2" style="width:100%">
                                       <div id="disp6" class="disp" style="width:100%;height:100%;">
                                             <input type="text" name="adress" size="60"  id="td6" class="td" value="" style="width:95%;height:95%;background:darkgreen;color:white" style="width:70%;background: darkgreen;color:white;">
                                   
                                       </div>
                                 </div>
                            </div>
                      </div>

 					  <div id="r4" class="row" style="height:10mm;width:157.3mm;margin-left: 22mm;display: flex;border:;margin-top:5px;padding:10px;border:">
 						     <div id="r4c1" class="bi" style="width:25mm;height:100%;margin-top:8px"><div id="r4c1c1" style="">診断名 </div> </div>
                             <div id="r4c2" class="" style="width:135mm;height:100%;display:flex;" tabindex="0">
                                  <div id="disp7" class="disp" style="width:fit-content;height:80%;margin:5px;">
                                      <input type="text"   id="td7" class="td" value="" style="width:70%;background: darkgreen;color:white;">
                                   
                                  </div>
                                  <div id="disp8" class="disp" style="width: fit-content;margin:5px;" > 
                                       <input type="text"   id="td8" class="td" value="" style="width:70%;background: darkgreen;color:white;font-size:18px">
                                  </div>
                                  <div id="disp9" class="disp" style="width: fit-content;margin:5px;">
                                        <input type="text"   id="td9" class="td" value="" style="width:70%;background: darkgreen;color:white;;font-size:18px">
                                  </div>
                                  <div id="disp10" class="disp" style="width: fit-content;margin:5px;">
                                        <input type="text"   id="td10" class="td" value="" style="width:70%;background: darkgreen;color:white;;font-size:18px">
                                  </div>
                                  <div id="disp11" class="disp" style="width: fit-content;margin:5px;">
                                        <input type="text"   id="td11" class="td" value="" style="width:70%;background: darkgreen;color:white;;font-size:18px">
                                  </div>
                                  <div id="disp12" class="disp" style="width: fit-content;margin:5px;">
                                        <input type="text"   id="td12" class="td" value="" style="width:70%;background: darkgreen;color:white;;font-size:18px">
                                  </div>
                                  <div id="disp13" class="disp" style="width: fit-content;margin:5px;">
                                        <input type="text"   id="td13" class="td" value="" style="width:70%;background: darkgreen;color:white;;font-size:18px">
                                  </div>
                                  
                     
                            </div>
                            
                     </div>

 					

 					 <div id="r5" class="row" style="height:160mm;width:160mm;margin-left: 22mm;margin-top: 3px;padding:5px;position: relative;" >
                           <div id="disp14" class="disp" style="width:98%;height:85%;background: black;padding:5px;white-space: pre-wrap;" tabindex="0" >
                                <textarea id="td14" class="td" name="" cols="40" rows="40"  style="width:100%;height:33%;background: darkgreen;color:white;
                                 line-height: 1.5em;box-sizing:border-box;outline: 2px solid red;">
                                </textarea>
                                 
                               
                           </div>
                           <div id="handle" style="position:absolute;bottom:0;left:0;
                                    width:100%;height:10px;background:gray; cursor: ns-resize;"></div>
                           
                     </div>
 					
 					 <div id="r6" class="row" style="height:140mm;height:10mm;margin-left: 22mm;border:;margin-top: 3px">
                            <div id="disp15" class="disp" style="position:relative;width:40%;height:20px;left:10mm ;top:;background:">
                                  <input type="" name="wday" id="td15" class="td" value="" style="width:70%;background: darkgreen;color:white;">
                            </div>
               
                     </div>

                     <div id="r7" class="row" style="height:140mm;width:160mm;height:7mm;margin-left: 22mm;border:;margin-top: 3px">
                          <div id="disp16" class="disp" style="position:relative;width:60%;height:20px;left:70mm ;top:-5mm;background:">
                                <input id="td16" type="text" name=""  class="td" value="13" style="width:70%;background: darkgreen;color:white;">
                      
                          </div>
                     </div>

                     <div id="r8" class="row" style="height:7mm;width:160mm;margin-left: 22mm;border:;margin-top: 3px">
                          <div id="disp17" class="disp" style="position:relative;width:40%;height:20px;left:70mm ;top:-5mm;background:">
                                 <input type="text" id="td17" name=""  class="td" value="14" style="width:70%;background: darkgreen;color:white;">
                          </div>
                     </div>
                     <div id="r9" class="row" style="height:7mm;width:160mm;margin-left: 22mm;border:;margin-top: 3px">
                          <div id="disp18" class="disp" style="position:relative;width:40%;height:20px;left:80mm ;top:-5mm;background:">
                               <input type="text" id="td18" name="sdoct"  class="td" value="15"  style="width:70%;background: darkgreen;color:white;">      
                          </div>
                     </div>
                     
                     
                     <div id="inpDate1" style="height:10mm">
                     </div>
                     
               </div>
               
               
               <div id="page1" class="page-break" style="width:210mm;height:290mm;background:black;color:white;border:1px solid white;">
                    <div id="disp11attached" class="comment" style="width:160mm;height:240mm;margin:20mm;white-space: pre-wrap;">
                    page1
                    </div>
               </div>
                
        </div>
        <div id="mc3" class="" style="width:10%;height:100%;" >
           
            <div id="incDoc" style="width:fit-content;height:30px;border:2px solid red">ページ文字数増</div>
            <div id="decDoc" style="width:fit-content;height:30px;border:2px solid blue">ページ文字数減</div>
            <div id="diagFontL"style="width:fit-content;height:30px;border:2px solid red">診断文字サイズ拡大</div>
            <div id="diagFontS"style="width:fit-content;height:30px;border:2px solid blue">診断文字サイズ縮小</div>
            <div id="docFontL"style="width:fit-content;height:30px;border:2px solid red">本文文字サイズ拡大</div>
            <div id="docFontS"style="width:fit-content;height:30px;border:2px solid blue">本文文字サイズ縮小</div>
               
        </div>
    </div>
    <didv id = "bot"></div>
    

 </body>
 </html>