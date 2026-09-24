window.addEventListener('DOMContentLoaded',function(){
// medcertificatePrototype;
///////////////////////////list of contents/////////////////////////////////////
/*
variables
functions
getreference
initial setting
test run
open inpBox
frame selection
address
confirm
calendar
store
recover
show all and case selection
select case from database  by id 
clear dispObj
return to top
forward
diagnosis font
comment font
resize page
name maker
*/
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
cbObj = this.document.getElementsByClassName('cb');
let inpBoxObj = this.document.getElementById('inpBox');
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
//////////////functions///////////////////////////////////
function stage0()
{
    //console.log('stage0');
    
    cbObj[0].style.display = 'block';
    cbObj[1].style.display = 'block';
    cbObj[2].style.display = 'block';
    cbObj[3].style.display = 'block';
    cbObj[4].style.display = 'block';
    cbObj[5].style.display = 'none';
    cbObj[6].style.display = 'block';
    cbObj[7].style.display = 'block';
    cbObj[8].style.display = 'block';

    midObj.style.display = 'block';
    mc0Obj.style.display = 'none';
    mc1Obj.style.display = 'none';
    mc3Obj.style.display = 'none';
    botObj.style.display = 'none';

}
function stage1()
{
    //console.log('stage1');
    
    cbObj[0].style.display = 'block';
    cbObj[1].style.display = 'block';
    cbObj[2].style.display = 'block';
    cbObj[3].style.display = 'none';
    cbObj[4].style.display = 'none';
    cbObj[5].style.display = 'none';
    cbObj[6].style.display = 'none';
    cbObj[7].style.display = 'block';
    
    topObj.style.display = 'none';
    midObj.style.display = 'none';
    mc0Obj.style.display = 'none';
    mc1Obj.style.display = 'none';
    mc2Obj.style.display = 'none';
    mc3Obj.style.display = 'none';
    botObj.style.display = 'block';

}
function stage2()
{
    console.log('stage2');
    
    cbObj[0].style.display = 'block';
    cbObj[1].style.display = 'block';
    cbObj[2].style.display = 'block';
    cbObj[3].style.display = 'block';
    cbObj[4].style.display = 'block';
    cbObj[5].style.display = 'block';
    cbObj[6].style.display = 'block';
    cbObj[7].style.display = 'block';
    topObj.style.display = 'block';
    topObj.style.display = 'flex';
    midObj.style.display = 'block';
    midObj.style.display = 'flex';
    mc0Obj.style.display = 'block';
    mc1Obj.style.display = 'none';
    mc2Obj.style.display = 'block';
    mc3Obj.style.display = 'none';
    botObj.style.display = 'none';

}
function stage3()
{
    //console.log('stage0');
    topObj.style.display = 'none';
    cbObj[0].style.display = 'none';
    cbObj[1].style.display = 'none';
    cbObj[2].style.display = 'none';
    cbObj[3].style.display = 'none';
    cbObj[4].style.display = 'none';
    cbObj[5].style.display = 'none';
    cbObj[6].style.display = 'none';
    cbObj[7].style.display = 'none';

    midObj.style.display = 'block';
    mc0Obj.style.display = 'none';
    mc1Obj.style.display = 'none';
    mc3Obj.style.display = 'none';
    botObj.style.display = 'none';

}
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
   
////////////////////initial setting/////////////////////////////////
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
   
  
    const instructionArray=[
        'IDを入力してください。',
        '下段の入力ボックスに姓を入力してください。左端のカラムに候補の名がでたら、それをクリックすると上段の入力ボックスに姓が表示されます。候補がない場合には姓をすべて入力した後リターンを2回クリックしてください。名も同様にしてください。',
        '性別を入力してください。',
        '出生何月日を入力してください。',
        '最後に年齢が自動的に入ります。',
        '郵便番号を入力してください。',
        '住所を入力してください。',
        '診断名１を入力してください。',
        '診断名２を入力してください。',
        '診断名３を入力してください。',
        '診断名４を入力してください。',
        '付記を入力してください。',
        '記入日を入力してください。',
        '施設名を入力してください。',
        '科名を入力してください。',
        '主治医名を入力してください。'
    ];
    for(let i=0;i<16;i++ )
    {
        inpObj[i]=document.getElementById('inp'+i);
    }
    inpObj[13].value="旭川荘南愛媛病院・南愛媛療育センター";
    inpObj[14].value="小児神経科";
    inpObj[15].value="森本武彦";

  //////////////////////test run///////////////////////////////////////////////////////////
  /*
    for(let i=0;i<16;i++ )
    {
        inpObj[i]=document.getElementById('inp'+i);
        inpObj[i].value="test"+i;
    }
        */
  



////////////////////open inpBox//////////////////////////////////////////////
    
   
    inpBoxObj.addEventListener('click',function(){
        stage1();
        back();
    })
    function back()
    {
         
        for(let i=0;i<tdObj.length;i++)
        {
            inpObj[i]=document.getElementById('inp'+i);
            inpObj[i].value=tdObj[i].value;
        }
        
    }
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

///////////////////////confirm///////////////////////////////////////////////////////////////
const confObj=document.getElementById('conf');

confObj.addEventListener('click',function(){ 
    confObj.style.background="orange";
    
   
 //--------------------------------------------------------------------------------------
    for(let i=0;i<16;i++)
    {
        tdObj[i]=document.getElementById('td'+i);
        dispObj[i]=document.getElementById('disp'+i);
        tdArray[i]=tdObj[i].value;  
    }
    let age=calAge(tdArray[3],tdArray[12]);
    let day3 = toWareki(tdArray[3]);
    let day12 = toWareki(tdArray[12]);
    tdArray[3]=day3;
    tdArray[12]=day12;
    tdArray[4]=age;
    console.log('age='+age);
    for(let j=0;j<16;j++ )
    {
        keepDisp[j] = dispObj[j].innerHTML;
        dispObj[j].innerHTML=tdArray[j];
    }

   
    
        
})
////////////////////////// calendar///////////////////////////////////////////////////////////////////////
  ////////////////////calendar maker//////////////////////////////////////////////////////////////
  dateFrameArray = [3,12];
  let wrapWarekiObj = [];
  let wrapSeirekiObj = [];
  
  let warekiYearObj = [];
  let  year = [];
  let month = [];
  let nengo = [];
  let showaObj = [];
  let heiseiObj = [];
  let reiwaObj = [];
  let seirekiObj = [];
  let seirekiYearObj = [];
  let cellMObj = [];
  let cellDObj = [];
  let day = [];
  
  let mObj = [];
  let cObj = [];
  let cell1Obj = document.getElementsByClassName('cell1_1');
  let cell8Obj = document.getElementsByClassName('cell8_1');
  for(let i=0;i<dateFrameArray.length;i++)
  {
    let fN=dateFrameArray[i];
    //console.log('fN='+fN);
    wrapWarekiObj[fN]=document.getElementById('wrapWareki'+fN);
    //console.log(wrapWarekiObj[fN]);
    wrapSeirekiObj[fN]=document.getElementById('wrapSeireki'+fN);
    wrapWarekiObj[fN].style.display="none";
	wrapSeirekiObj[fN].style.display="block";
	year[fN]=0;
	nengo[fN]="";
    seirekiObj[fN]=document.getElementById('seireki'+fN);
	seirekiObj[fN].addEventListener('click',function(){
    	seirekiObj[fN].style.background="orange";
    	wrapWarekiObj[fN].style.display="none";
    	wrapSeirekiObj[fN].style.display="block";
    	showaObj[fN].style.background="";
    	heiseiObj[fN].style.background="";
    	reiwaObj[fN].style.background="";
    	nengo[fN]='w';
	})
    showaObj[fN]=document.getElementById('showa'+fN);
	showaObj[fN].addEventListener('click',function(){
    	showaObj[fN].style.background="orange";
    	wrapWarekiObj[fN].style.display="block";
    	wrapSeirekiObj[fN].style.display="none";
    	seirekiObj[fN].style.background="";
    	heiseiObj[fN].style.background="";
    	reiwaObj[fN].style.background="";
    	nengo[fN]='s';
	})
    heiseiObj[fN]=document.getElementById('heisei'+fN);
	heiseiObj[fN].addEventListener('click',function(){
    	heiseiObj[fN].style.background="orange";
    	seirekiObj[fN].style.background="";
    	wrapWarekiObj[fN].style.display="block";
    	wrapSeirekiObj[fN].style.display="none";
    	showaObj[fN].style.background="";
    	reiwaObj[fN].style.background="";
    	nengo[fN]='h';
	})
    reiwaObj[fN]=document.getElementById('reiwa'+fN);
	reiwaObj[fN].addEventListener('click',function(){
    	reiwaObj[fN].style.background="orange";
    	heiseiObj[fN].style.background="";
    	seirekiObj[fN].style.background="";
    	wrapWarekiObj[fN].style.display="block";
    	wrapSeirekiObj[fN].style.display="none";
    	showaObj[fN].style.background="";
    	nengo[fN]='r';
	})



    seirekiYearObj[fN]=document.getElementsByClassName('seirekiYear'+fN);

	for(let i=0;i<seirekiYearObj[fN].length;i++)
	{

    	seirekiYearObj[fN][i].addEventListener('click',function(){
        	clearSYear(fN);
        	seirekiYearObj[fN][i].style.background="orange";
        	year[fN]=seirekiYearObj[fN][i].innerText;
           // console.log('syear['+fN+']='+year[fN]);
    	})
	}
    warekiYearObj[fN]=document.getElementsByClassName('warekiYear'+fN);
	for(let i=0;i<warekiYearObj[fN].length;i++)
	{
    	warekiYearObj[fN][i].addEventListener('click',function(){
       	 	clearWYear(fN);
       	 	warekiYearObj[fN][i].style.background="orange";
       	 	let wYear=warekiYearObj[fN][i].innerText;
        	console.log('wYear='+wYear);
   
        	switch(nengo[fN])
        	{
            	case 's':
                	year[fN]=Number(wYear)+1925;
               
                	break;
            	case 'h':
                	year[fN]=Number(wYear)+1988;
                	break;
            	case 'r':
                	year[fN]=Number(wYear)+2018;
                	break;
            	case 'w':
                	year[fN]=year;
                	break;

       	 	}
        // console.log('year['+fN+']='+year[fN]);
     	})
    
	}

	function clearWYear(fN)
	{
    	for(let i=0;i<warekiYearObj[fN].length;i++)
    	{
        	warekiYearObj[fN][i].style.background="";
    	}
	}
	function clearSYear(fN)
	{
    	for(let i=0;i<seirekiYearObj[fN].length;i++)
    	{
        	seirekiYearObj[fN][i].style.background="";
    	}
	}


//------------------month selection---------------------------------------------------------------------------
	
	
	for (let i = 0; i < 12; i++) {
    cellMObj[fN] = [];
    cellMObj[fN][i] = document.getElementById('cell' + fN + '_0_' + i);

    cellMObj[fN][i].addEventListener('click', function () {
        //console.log('cell' + fN + '_0_' + i);
        //console.log('i=' + i);
        //console.log(cellMObj[fN][i]);

        // you can also use `this` instead of cellMObj[fN][i]
        this.style.background = "orange";

        month[fN] = this.innerText;
        //console.log('month1=' + month[fN]);

        makeCalendar(year[fN], month[fN]);
    });
	}


//-----------------days of month----------------------------------------------------------------------------
	function makeCalendar(year,month)
	{
        //console.log('year='+year+',month='+month);
        let monthDetail = [];
        let firstDayofWeek = [];
        let  lastDay = [];
        monthDetail=getMonthDetails(year,month);
        firstDayofWeek=monthDetail.firstDayOfWeek;
        lastDay=monthDetail.lastDay;
     
        lastDay=lastDay.getDate();
        //console.log('firstDay1ofWeek='+firstDay1ofWeek);
        //console.log('lastDay1='+lastDay1);

        completeCalendar(firstDayofWeek,lastDay);
	}

//JavaScript を使用して、特定の年と月の最初の日と最後の日、その曜日を取得するには、Date オブジェクトを利用します。以下のコードでその実装方法を示します：

function getMonthDetails(year, month) {
    // 月の最初の日
    const firstDay = new Date(year, month - 1, 1); // 月は 0-indexed（1月が 0、2月が 1、…）
    const firstDayOfWeek = firstDay.getDay(); // 曜日を取得
    
    const lastDay = new Date(year, month, 0); // 翌月の0日目 = 指定月の最終日
    const lastDayOfWeek = lastDay.getDay(); // 曜日を取得
    return {
        firstDay: firstDay,
        firstDayOfWeek,
        lastDay: lastDay,
        lastDayOfWeek,
    };
}
function completeCalendar(firstDayofWeek,lastDay)
{
        //let cell1Obj=[];
        let d=1;
        //console.log('firstDay1ofWeek='+firstDay1ofWeek);
        //console.log('lastDay='+lastDay1);
       // cell1Obj=document.getElementsByClassName('cell1_1');
        //console.log(Object.keys(cell1Obj));
        for(let i=firstDayofWeek;i<lastDay+firstDayofWeek;i++)
        {
            //cell1Obj[i].style.background="orange";
			cellDObj[fN] = [];
            cellDObj[fN][i]=document.getElementById('cell' + fN + '_1_' +i );
            cellDObj[fN][i].textContent=d;
            d++;
                 
        }
}
cellDObj[fN] = this.document.getElementsByClassName('cell'+fN+'_1');
for(let i=0;i<cellDObj[fN].length;i++)
{
	if(!cellDObj[fN][i].textContent)
	{
		cellDObj[fN][i].style.background="";
	}
}
//let numOfdDays = 
//console.log(cellDObj[fN].length);
for(let i=0;i<cellDObj[fN].length;i++)
{
	cellDObj[fN][i] = document.getElementById('cell' + fN + '_1_' + i);
		
    cellDObj[fN][i].addEventListener('click',function(){
        this.style.background="orange";
        day[fN]=this.innerText;
        month[fN]=('0'+month[fN]).slice(-2);
        day[fN]=('0'+day[fN]).slice(-2);
        //console.log('day1='+ day[fN]);
		inpObj[fN]=document.getElementById('inp'+fN);
        inpObj[fN].value=year[fN]+'-'+month[fN]+'-'+day[fN];

    })
}
}

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
    console.log(data);
    
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
            stage2();
            for(let i=0;i<data.length;i++) 
            {
                caseDateObj[i] = document.getElementById('caseDate'+i);
                caseDateObj[i].textContent = data[i][0];
                caseDateObj[i].addEventListener('click', function() {
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
                    //console.log(data[0]);//flag 0->ono previous data 1->privious data exists
                    console.log(data[1]);//
                     for(let i=0;i<data[1].length;i++)
                    {
                        tdObj[i]=document.getElementById('td'+i);
                        console.log('i='+i);
                        console.log(data[1][i]);
                        console.log(tdObj[i]);
                    
                    
                        switch(i)
                        {
                            case 0:
                                console.log(data[1][1]);
                                tdObj[0].value=data[1][1];
                           
                                break;
                            case 1:
                                tdObj[1].value=data[1][3]+data[1][5];
                                break;
                            case 2:
                                tdObj[2].value=data[1][6];
                             
                                break;
                            case 3:
                                tdObj[3].value=data[1][7];
                                break;
                            case 4:
                                tdObj[4].value="";
                                break;
                            case 5:
                                tdObj[5].value=data[1][8];
                                break;
                            case 6:
                                tdObj[6].value=data[1][9];
                                break;
                            default:
                                break;
                        }
                        //tdObj[i].value=data[1][i];
                    }
             
                }else if(data[1][i]!="no data")
                {
                    console.log('no data');
                    location.href='../clientManager/index.php';  
                }  

            }else if(flag==0)
            {
                console.log('previous data exists');
                stage2();
                function showData(data)
                {
          
                    console.log('show data');
                    console.log(data[1]);
                    for(let i=0;i<data[1].length;i++)
                    {
                        caseDateObj[i] = document.getElementById('caseDate'+i);
                        caseDateObj[i].textContent = data[1][i];
                        caseDateObj[i].addEventListener('click', function() {
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

for(let i=0;i<16;i++)
{
    if(i==0)
    {
        frameObj[0].style.display="block";
    }else{
        frameObj[i].style.display="none";
    }
}

/////////////////////////////clear dispObj////////////////////////////////////////////////

let delObj=document.getElementById('del');
delObj.addEventListener('click',function(){
    for(let i=0;i<16;i++ )
    {
        dispObj[i]=document.getElementById('disp'+i);
        dispObj[i].innerHTML = keepDisp[i];
        recoverObj.style.background = "";
        confObj.style.background = "";
        //tdObj[i]=document.getElementById('td'+i);
        //tdObj[i].value=tdArray;
    
    }
    
})





////////////////////////return to top/////////////////////////////////////////////////
const toTopObj=document.getElementById('toTop');
toTopObj.addEventListener('click',function(){
    window.location.href = '../top/index.php';
})








 ///////////////////////forward///////////////////////////////////////////////////////////////
   
    
    forwardObj.addEventListener('click',function(){
        stage2();
        console.log('forward');
      //  storeReference(); //item is registered to item memory
        forward();
    })

    

    function forward()
    {
        
        //console.log('tdObj='+tdObj.length);
        for(let i=0;i<16;i++)
        {
            tdObj[i]=document.getElementById('td'+i);
            inpObj[i]=document.getElementById('inp'+i);
            tdObj[i].value=inpObj[i].value;
            inpData[i]=inpObj[i].value;
            switch(i)
            {
                case 2:
                case 7:
                case 8: 
                case 9:  
                case 10:  
                case 13:  
                case 14: 
                case 15:
                    makeReference(i,inpObj[i].value);
                    break;
                default:
                    break;
            }
            
        }
        console.log('inpData='+inpData);
        fetch('tempInpData.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inpData)
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
            }
            )
            .catch((reason) => {
                console.log(reason);
            });
    }

    /////////////////////////////////////////diagnosis font///////////////////////////////////////////////////////////
    let r4Obj = document.getElementById('r4');
    let r5Obj = document.getElementById('r5');
    let comFont = 12;
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

    function changeSizeOfComment()
    { 
        const r4c2Obj=document.getElementById('r4c2');
        console.log('r4c2Obj='+r4c2Obj);
        r4c2Obj.addEventListener("keydown", function(event) {
            console.log("押されたキー:", event.key);
            console.log("キーコード:", event.code);
            console.log("diagFlag=" + diagFlag);
            if (event.key === "l" && diagFlag === 1) {
                diagFont++;
                console.log("diagFont=" + diagFont);
                
            }else if (event.key === "s" && diagFlag === 1) {
                diagFont--;
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

        });
    }
    /////////////////////////////////////////comment font///////////////////////////////////////////////////////////
   
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
        //stage2();
        location.reload();
    }
    })
//////////////////////////////name maker/////////////////////////////////////////////////////////
    //nameMaker(1);
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


})

