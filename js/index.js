import {test} from './modules.js';
import {back} from './modules.js';
import {stage0}  from './modules.js';
import {stage1}  from './modules.js';
import {stage2}  from './modules.js';
import {stage3}  from './modules.js';
import {stage4}  from './modules.js';
import {getForwardData}   from './modules.js';
import {confirm}   from './modules.js';
window.addEventListener('DOMContentLoaded',function(){
    console.log('js');
// medcertificatePrototype;
///////////////////////////list of contents/////////////////////////////////////

///////////////////////test////////////////////////////////////
//test();
//////////////////////variables////////////////////////////////////////
let topObj = this.document.getElementById('top');
let midObj = this.document.getElementById('mid');
let botObj = this.document.getElementById('bot');
let cbObj = [];
let mc0Obj = this.document.getElementById('mc0');
let mc1Obj = this.document.getElementById('mc1');
let mc2Obj = this.document.getElementById('mc2');
let mc3Obj = this.document.getElementById('mc3');
let forwardObj=document.getElementById('forward');

let inpData = [];
let  dispObj = [];
//cbObj = this.document.getElementsByClassName('cb');
let backwardObj = this.document.getElementById('backward');
let caseDateObj = [];
let frameObj=[];
let inpObj=[];
let tdObj=[];
let fNameFlag=1;
let pNameFlag=0;
let hFNameFlag=0;
let hPNameFlag=0;
let kFNameFlag=0;
let kPNameFlag=0;
let inpFNameObj=[];
let inpPNameObj=[];
let inpHFNameObj=[];
let inpHPNameObj=[];
let inpKFNameObj=[];
let inpKPNameObj=[];
let nameListObj = [];
let tdArray=[];
let keepDisp = [];
let printObj = this.document.getElementById('print');
frameObj=document.getElementsByClassName('frame');
let caseDateAObj = [];
let caseDateBObj = [];
let tempData = [];


//////////////functions///////////////////////////////////

function calAge(bday,wday)
{
        // 生年月日をDateオブジェクトに変換
        const bObj = new Date(bday);
        const wObj=new Date(wday);
        // 現在の年、月、日を取得
        let age = wObj.getFullYear() - bObj.getFullYear();
        const monthDiff = wObj.getMonth() - bObj.getMonth();
        // 生まれた月よりも今月が前か、または生まれた月と今月が同じだが誕生日がまだ来ていない場合、年齢を1歳減らす
        if (monthDiff < 0 || (monthDiff === 0 && wObj.getDate() < bObj.getDate())) {
                    age--;
        }
        return age;
}

    // 西暦を和暦で表示する関数
function toWareki(dateStr) {
  const date = new Date(dateStr);

  // Intl.DateTimeFormat を使って和暦表示に変換
  return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
    era: 'long',     // 「令和」など
    year: 'numeric', // 「7年」など
    month: 'long',   // 「11月」
    day: 'numeric'   // 「1日」
  }).format(date);
}

function getSelCase(selPath)
{
    fetch('getSelCase.php',
        {

            method: 'POST',
            //headers: {
            // 'Content-Type': 'application/json'
            //},
            body: selPath
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            for(let j=0;j<16;j++)
            {
                tdObj[j]=document.getElementById('td'+j);
                tdObj[j].value=data[j];
            }
        })
        .catch((reason) => {
            console.log(reason);
        })

}
function makeReference(frameNumber,$item)
{
    let sender = [frameNumber,$item];
    console.log(sender);
    this.fetch('makeReference.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sender)

    }).then(response => {
        if (!response.ok) {
            throw new Error("ネットワークのエラーが発生しました");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
     })
    .catch(error => {
        console.error(error);
    });


}
function nameMaker(frameNumber)
{
    if(fNameFlag==1)
    {
       inpFNameObj[frameNumber]=document.getElementById('inpFName'+frameNumber);
       inpPNameObj[frameNumber]=document.getElementById('inpPName'+frameNumber); 
       inpFNameObj[frameNumber].style.display = 'block';
       inpPNameObj[frameNumber].style.display = 'none'; 
       fNameFlag = 0;
       pNameFlag = 1;
    }else if(pNameFlag==1)
    {
       inpFNameObj[frameNumber]=document.getElementById('inpFName'+frameNumber);
       inpPNameObj[frameNumber]=document.getElementById('inpPName'+frameNumber); 
       inpFNameObj[frameNumber].style.display = 'none';
       inpPNameObj[frameNumber].style.display = 'block'; 
       fNameFlag = 1;
       pNameFlag = 0;
    }
}
function registerF(hF,kF)
{
    console.log(hF,kF);
    sender = [hF,kF];
    fetch('registerFName.php',{
       method:'POST',
       headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sender)

    }).then(response => {
        if (!response.ok) {
            throw new Error("ネットワークのエラーが発生しました");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
     })
    .catch(error => {
        console.error(error);
    
    })


    
}
function registerP(hP,kP)
{
    console.log(hP,kP);
   
    senderP = [hP,kP];
    fetch('registerPName.php',{
       method:'POST',
       headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(senderP)

    }).then(response => {
        if (!response.ok) {
            throw new Error("ネットワークのエラーが発生しました");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
     })
    .catch(error => {
        console.error(error);
    
    })


}


//---------------------------------make Name-----------------------------------
function makeFamilyName(fName)
{
    this.fetch('getFName.php',{
        method:'POST',
        //headers: {
       //     'Content-Type': 'application/json'
       // },
        body: fName

   })
   .then(response => {
        if (!response.ok) {
            throw new Error("ネットワークのエラーが発生しました");
        }
            return response.json();
    })
    .then(data => {
        console.log(data);
        let i=0;
        Object.entries(data).forEach(([key, value]) => {
            nameListObj[i] = document.getElementById('nameList1_'+i);
            nameListObj[i].textContent = key;
            console.log(key);
            console.log(value);
            i++;
        })
        
            

            
    })
     .catch(error => {
        console.error(error);
     })            
        
}   
            
function makePersonalName(pName)
{
    this.fetch('getPName.php',{
        method:'POST',
        //headers: {
       //     'Content-Type': 'application/json'
       // },
        body: pName

   })
   .then(response => {
        if (!response.ok) {
            throw new Error("ネットワークのエラーが発生しました");
        }
            return response.json();
    })
    .then(data => {
        console.log(data);
        let i=0;
        Object.entries(data).forEach(([key, value]) => {
            nameListObj[i] = document.getElementById('nameList1_'+i);
            nameListObj[i].textContent = key;
            console.log(key);
            console.log(value);
            i++;
        })
        
            

            
    })
     .catch(error => {
        console.error(error);
     })            
        
}   
        
function calculateAge(birthDate, recordDate)
{
    // 誕生日と記録日をDateオブジェクトに変換
    const birth = new Date(birthDate);
    const record = new Date(recordDate);

    // 年齢を計算
    let age = record.getFullYear() - birth.getFullYear();

    // 誕生日がまだ来ていない場合、年齢を1引く
    const birthMonth = birth.getMonth();
    const birthDay = birth.getDate();
    const recordMonth = record.getMonth();
    const recordDay = record.getDate();

    if (recordMonth < birthMonth || (recordMonth === birthMonth && recordDay < birthDay)) {
         age--;
    }

    return age;
}

function dataToDate(data)
{
    let filename = data.split('/').pop();
    let ts = filename.split('.')[0];
    console.log(ts);
    const tsObj = new Date(Number(ts)*1000);
    let y = tsObj.getFullYear();
    let m = tsObj.getMonth()+1;
    let d = tsObj.getDate();
    let formed = y+'/'+m+'/'+d;
    console.log (formed);
    return formed;
}


////////////////////initial setting/////////////////////////////////
getForwardData();
confirm();
//----------------------get reference------------------------------
   this.fetch('getReference.php')
   
        .then(response => {
            if (!response.ok) {
                throw new Error("ネットワークのエラーが発生しました");
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            
            let referenceListObj = [];
            Object.entries(data).forEach(([key, value]) => {
                //console.log(key);   // frame number
                //console.log(value); // item array in the frame

               
                referenceListObj[key]=[];
                Object.entries(value).forEach((v,k)=>{
                    //console.log(k); //each key in the item array
                    //console.log(v); //[item,frameNumber]
                     
                    referenceListObj[key][k] = this.document.getElementById('referenceList'+key+'_'+k);
                    //console.log(key);
                    //console.log(referenceListObj[key][k]);
                    if(referenceListObj[key][k]!==null)
                    {
                        referenceListObj[key][k].textContent = v[0];
                        referenceListObj[key][k].addEventListener('click',function(){
                            this.style.background="orange";
                            inpObj[key] = document.getElementById('inp'+key);
                            inpObj[key].value=this.textContent;
                        })
                    }
                        
                })
                    
            })
                
        })
            
   

   stage0();
   
  
    
//////////////////////////data from clientManager/////////////////////////


////////////////////open inpBox//////////////////////////////////////////////
    
   
    backwardObj.addEventListener('click',function(){
        stage1();
        back();
    })
    
////////////////////////////frame selection/////////////////////////////////////////
   let indexForItemsObj=[];
   let instructionBoxObj=document.getElementById('instructionBox');
   indexForItemsObj=document.getElementsByClassName('indexForItems')
  
  // let instructionBoxObj=document.getElementById('instructionBox');
  
   frameObj=document.getElementsByClassName('frame');
   for(let i=0;i<indexForItemsObj.length;i++)
   {
            indexForItemsObj[i].addEventListener('click',function(){
                indexForItemsObj[i].style.background="orange";
                instructionBoxObj.innerHTML=instructionArray[i];

                for(let j=0;j<frameObj.length;j++)
                {
                    if(i===j)
                    {   
                       
                        frameObj[j].style.display="block";
                    }else{
                         
                        frameObj[j].style.display="none";
                    }
                    
                }
                if(i==15)
                {
                    let bday=inpObj[3].value;
                    let wday=inpObj[12].value;
                    let age=calAge(bday,wday);
                    console.log('age='+age);
                    inpObj[4].value=age;
                }
                if(i==1)
                {

                }

           })
   }

//--------------------------------------------------------------------------------------------
 
////////////////////////////////address//////////////////////////////////////////////////////
/*
inpObj[5]=document.getElementById('inp5');
inpObj[5].addEventListener('input',postNumber);

 function postNumber()
 {
  				// zipcloud apiを使って、郵便番号の住所データを取得。
  			fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${event.target.value}`)
   				 // 取得したデータをjson形式で読み込み。
   				 .then(response => response.json())
   				 // 取得したデータを出力
    			 .then(data => {
    			 
      				console.log(data.results[0].address1);
      				console.log(data.results[0].address2);
      				console.log(data.results[0].address3);
    			 	inpObj[6]=document.getElementById('inp6');
      				inpObj[6].value=data.results[0].address1+data.results[0].address2+data.results[0].address3;
      				
    		   })
    		   .catch(error => console.log(error))
				
 }
*/

   
    
        



///////////////////////store/////////////////////////////////////////////////////
let storeObj=document.getElementById('store');

storeObj.addEventListener('click',function(){
   storeObj.style.background="orange";   
   fetch("storeData.php")
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
})


///////////////////////recover////////////////////////////////////////////////////////////////
//console.log('recover');
const recoverObj=document.getElementById('recover');
recoverObj.addEventListener('click',function(){
    recoverObj.style.background="orange";
    
    fetch("recover.php")
    .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
    })
    .then(data => {
    //console.log(data);
    
    for(let i=0;i<16;i++)
    {
        tdObj[i]=document.getElementById('td'+i);
        tdObj[i].value=data[i];
    }
    })
    .catch(error => {
    console.error(error);
    });
    
})


//////////////////////////show all and case selection//////////////////////////////////////////////////////////////////////
const dispAllObj=document.getElementById('showAll');
let caseListObj=[];

dispAllObj.addEventListener('click',function(){

    dispAllObj.style.background="orange";
    
    fetch("getAllCases.php")
        .then(response => {

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
        })
        .then(data => {
            stage4();
            for(let i=0;i<data.length;i++) 
            {
                caseDateBObj[i] = document.getElementById('caseDateB'+i);
                caseDateBObj[i].textContent = data[i][0];
                caseDateBObj[i].addEventListener('click', function() {
                    this.style.background = "orange";
                    let selPath = data[i][1];
                    console.log('selPath=' +  selPath);
                    console.log(selPath);
                    getSelCase(selPath);
                })
            }  
            

        })
        .catch(error => {
        console.error(error);
    });

})



///////////////////////////select case from database  by id ///////////////////////////////////////////////////////

let searchObj=document.getElementById('search');
//caseListObj=[];
//caseDateObj=[]; 
searchObj.addEventListener('click',function(){
    tdObj[0]=document.getElementById('td0');
    let selId=tdObj[0].value;
    console.log('selId='+selId);
    fetch('getSelCaseById.php',
      {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
            body: selId
      })
      .then(response =>response.json())
      .then(data => {
            console.log(data);
            let flag=data[0];
            if(flag==1)
            {
                if(data[1]!="no data")
                {
                    stage4();
                    //console.log(data[0]);//flag 0->ono previous data 1->privious data exists
                    console.log(data[1]);//
                    for(let i=0;i<data[1].length;i++)
                    {
                        console.log(data[1][i]);
                       
                        let formed = dataToDate(data[1][i]);
                        caseDateBObj[i] = document.getElementById('caseDateB'+i);
                        caseDateBObj[i].textContent = formed;
                        caseDateBObj[i].addEventListener('click',function(){
                            caseDateBObj[i].style.background = "orange";
                            let selPath = data[1][i];
                            console.log(selPath);
                            fetch('getClientInfo.php',{
                                method:'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: selPath
                            })
                             .then(response => {

                                if (!response.ok) {
                                    throw new Error(`${response.status} ${response.statusText}`);
                                }

                                return response.json();
                            })
                            .then(data => {
                                console.log(data);
                                let clientInfo = [];
                                console.log(data.length);
                                switch(data.length)
                                {
                                    case 10:
                                    case 11:
                                    case 12:
                                        clientInfo[0] = data[1];
                                        clientInfo[1] = data[3]+data[5];
                                        clientInfo[2] = data[6];
                                        clientInfo[3] = data[7];
                                        clientInfo[4] = "";
                                        clientInfo[5] = data[8];
                                        clientInfo[6] = data[9];
                                        break;
                                    case 8:
                                        clientInfo[0] = data[1];
                                        clientInfo[1] = data[3];
                                        clientInfo[2] = data[4];
                                        clientInfo[3] = data[5];
                                        clientInfo[4] = "";
                                        clientInfo[5] = data[6];
                                        clientInfo[6] = data[7];
                                        break;
                                    default:
                                        break;
                                }

                                for(let i=0;i<7;i++)
                                {
                                    
                                    tdObj[i] = document.getElementById('td'+i);
                                    tdObj[i].value = clientInfo[i];
                                }
                            })
                            .catch(error => {
                                console.error(error);
                            });
                        })
                    }
                        
             
                }else if(data[1][i]!="no data")
                {
                    console.log('no data');
                    location.href='../clientManager/index.php';  
                }  

            }else if(flag==0)
            {
                console.log('previous data exists');
                stage4();
                function showData(data)
                {
                    
                    console.log('show data');
                    console.log(data[1]);
                    for(let i=0;i<data[1].length;i++)
                    {
                        caseDateBObj[i] = document.getElementById('caseDateB'+i);
                        
                        let formed = dataToDate(data[1][i]);
                        caseDateBObj[i].textContent = formed;
                        caseDateBObj[i].addEventListener('click', function() {
                            this.style.background = "orange";
                            let selPath = data[1][i];
                            console.log('selPath=' +  selPath);
                            console.log(selPath);
                            getSelCase(selPath);
                        })
                   
                    }
                }
                showData(data);
            
            }else if(flag==2)
            {
                console.log('no data');
                location.href=data[1];
            }
        
       })
       .catch((reason) => {
          console.log(reason);
      })
})



///////////////////////Modification///////////////////////////////////////////

/////////////////////////////clear dispObj////////////////////////////////////////////////

let delObj=document.getElementById('del');
delObj.addEventListener('click',function(){
    window.location.reload();
   
    
})





////////////////////////return to top/////////////////////////////////////////////////
const toTopObj=document.getElementById('toTop');
toTopObj.addEventListener('click',function(){
    window.location.href = '../top/index.php';
})








 
    /////////////////////////////////////////diagnosis font///////////////////////////////////////////////////////////
    let r4Obj = document.getElementById('r4');
    let r5Obj = document.getElementById('r5');
    let comFont = 14;
    let diagFont=12;
    let diagFlag = 0;
    let comFlag = 0;
    r4Obj.addEventListener('mouseover', function() {
        diagFlag = 1;   
        console.log('diagFlag='+diagFlag) ;
        changeSizeOfComment() ;
       
    })
    r4Obj.addEventListener('mouseleave', function() {
        diagFlag = 0;    
       
    })
  
    r5Obj.addEventListener('mouseover', function() { 
        comFlag = 1;
        
    })
    r5Obj.addEventListener('mouseleave', function() {     
        comFlag = 0;      
    })
    const disp11attachedObj=document.getElementById('disp11attached');
    disp11attachedObj.addEventListener('mouseover', function() { 
        aComFlag = 1;
        
    })
    disp11attachedObj.addEventListener('mouseleave', function() {     
        aComFlag = 0;      
    })

    function changeSizeOfComment()
    { 
        const r4c2Obj=document.getElementById('r4c2');
        console.log('r4c2Obj='+r4c2Obj);
        r4c2Obj.addEventListener("keydown", function(event) {
            console.log("押されたキー:", event.key);
            console.log("キーコード:", event.code);
            console.log("diagFlag=" + diagFlag);
            if (event.key === "l" && diagFlag === 1) {
                console.log("diagFont=" + diagFont);
                diagFont=diagFont+1;
                console.log("diagFont=" + diagFont);
                
            }else if (event.key === "s" && diagFlag === 1) {
                diagFont=diagFont-1;
                console.log("diagFont=" + diagFont);
               
            }
            dispObj[7]=document.getElementById('disp7');
            dispObj[8]=document.getElementById('disp8');
            dispObj[9]=document.getElementById('disp9');
            dispObj[10]=document.getElementById('disp10');
            dispObj[7].style.fontSize=diagFont+"px";
            dispObj[8].style.fontSize=diagFont+"px";
            dispObj[9].style.fontSize=diagFont+"px";
            dispObj[10].style.fontSize=diagFont+"px";
            console.log('diagFont='+diagFont);
        });
    }
    /////////////////////////////////////////comment font///////////////////////////////////////////////////////////
    const cFontSObj= this.document.getElementById('cFontS');
    const cFontLObj= this.document.getElementById('cFontL');
    console.log("comFont=" + comFont);
    let disp11Obj = document.getElementById('disp11');
    disp11Obj.style.fontSize=comFont+"px";
    cFontSObj.addEventListener('click',function(){
        comFont--;
        console.log("comFont=" + comFont);
        dispObj[11]=document.getElementById('disp11');
        dispObj[11].style.fontSize=comFont+"px";
        disp11attached.style.fontSize=comFont+"px";
        console.log('Text='+Text);
        paginateText(
            Text,
            [
                document.getElementById("disp11"),
                document.getElementById("disp11attached")
            ]
        );
    })

    cFontLObj.addEventListener('click',function(){
        comFont++;
        console.log("diagFont=" + comFont);
        dispObj[11]=document.getElementById('disp11');
        dispObj[11].style.fontSize=comFont+"px";
        disp11attached.style.fontSize=comFont+"px";
        console.log('Text='+Text);
        paginateText(
            Text,
            [
                document.getElementById("disp11"),
                document.getElementById("disp11attached")
            ]
        );
    })

    /*
    console.log("comFlag=" + comFlag);
    dispObj[11]=document.getElementById('disp11');
    dispObj[11].addEventListener("keydown", function(event) {
            console.log("押されたキー:", event.key);
            console.log("キーコード:", event.code);
            console.log("comFlag=" + comFlag);
            if (event.key === "l" ) {
                comFont++;
                console.log("diagFont=" + comFont);
                
            }else if (event.key === "s" ) {
                comFont--;
                console.log("diagFont=" + comFont);
               
            }
            dispObj[11]=document.getElementById('disp11');
            dispObj[11].style.fontSize=comFont+"px";

        });

    
    disp11attached.addEventListener("keydown", function(event) {
            console.log("押されたキー:", event.key);
            console.log("キーコード:", event.code);
            console.log("comFlag=" + comFlag);
            if (event.key === "l" ) {
                aComFont++;
                console.log("aCommentFont=" + aComFont);
                
            }else if (event.key === "s" ) {
                aComFont--;
                console.log("aComFont=" + aComFont);
               
            }
          
           disp11attached.style.fontSize=aComFont+"px";

        });
        */
    ////////////////////////////////////////////////////////////resize page//////////////////////////////////////////////////
    const box = document.getElementById("r5");
    const handle = document.getElementById("handle");

    let isResizing = false;
    let startY;
    let startHeight;

    // ドラッグ開始
    handle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startY = e.clientY;
    startHeight = box.offsetHeight;
    document.body.style.cursor = "ns-resize";
    e.preventDefault();
    });

    // ドラッグ中
    document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    const newHeight = startHeight + (e.clientY - startY);
    box.style.height = newHeight + "px";
    });

    // ドラッグ終了
    document.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.cursor = "default";
    });

    this.document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        stage0();
        location.reload();
    }
    })
//////////////////////////////name maker/////////////////////////////////////////////////////////
    //nameMaker(1);
    /*
    inpFNameObj[1]=document.getElementById('inpFName1');
    inpFNameObj[1].addEventListener('mouseover',function(){
        fNameFlag=1;
        console.log('fNameFlag='+fNameFlag);
    })
    inpPNameObj[1]=document.getElementById('inpPName1');
    inpPNameObj[1].addEventListener('mouseover',function(){
        pNameFlag=1;
        console.log('pNameFlag='+pNameFlag);
    })
    inpFNameObj[1].addEventListener('keydown',(e)=>{
        console.log(e.code);
        if(e.code==='Space')
        {
            inpHFNameObj[1]=document.getElementById('inpHFName1');
            let fName=inpFNameObj[1].value;
            console.log('fName='+fName);
            if(inpHFNameObj[1].value=="")
            {
                inpHFNameObj[1].value=fName;
            }
            makeFamilyName(fName);
        }
    })
    inpPNameObj[1].addEventListener('keydown',(e)=>{
        console.log(e.code);
        if(e.code==='Space')
        {
            inpHPNameObj[1]=document.getElementById('inpHPName1');
            let pName=inpPNameObj[1].value;
            console.log('pName='+pName);
            if(inpHPNameObj[1].value=="")
            {
                inpHPNameObj[1].value=pName;
            }
            makePersonalName(pName);
            
        }
    })
   
    inpFNameObj[1]=document.getElementById('inpFName1');
    inpKFNameObj[1] = document.getElementById('inpKFName1');
    console.log()
    inpFNameObj[1].addEventListener("mouseleave", function() {
        console.log("マウスが離れました");
        inpKFNameObj[1].value = inpFNameObj[1].value;
    });

    inpPNameObj[1]=document.getElementById('inpPName1');
    inpObj[1] = document.getElementById('inp1');
    inpKPNameObj[1] = document.getElementById('inpKPName1');
    console.log()
    inpPNameObj[1].addEventListener("mouseleave", function() {
        console.log("マウスが離れました");
        inpKPNameObj[1].value = inpPNameObj[1].value;
        inpObj[1].value = inpKFNameObj[1].value +'　'+inpKPNameObj[1].value;
        registerF(inpHFNameObj[1].value,inpKFNameObj[1].value);
        registerP(inpHPNameObj[1].value,inpKPNameObj[1].value);

    });

    printObj.addEventListener('click',function(){
        stage3();
    })
    const printScreenObj = this.document.getElementById('printScreen');
    printScreenObj.addEventListener('click',function(){
        stage2();
       
    })

    */
////////////////////////////pagenation/////////////////////////////////
function paginateText(text, pages) {
    console.log('pagination');
    let sI = 0;
    console.log('remaining=' + text);
    console.log('remaining.length=' + text.length);

    pages.forEach(page => {
        console.log('page=' + page);
        page.textContent = "";

        let i = sI;
        while (i < text.length) {
            const previousText = page.textContent;
            console.log(previousText);
            page.textContent = previousText + text[i];

            if (page.scrollHeight > page.clientHeight) {
                page.textContent = previousText+'（次のページがあります）';
                break;
            }

            i++;
        }

        sI = i;
    });
}





})

