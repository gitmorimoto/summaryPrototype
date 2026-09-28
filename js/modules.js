export function test(){
    console.log('module test');
    const tdObj = document.querySelectorAll('.td');
    let testData = [
            '111',
            '山田太郎',
            '男',
            '2000-04-11',
            '',
            '798-1332',
            '愛媛県北宇和郡鬼北町大字出目２０００－１',
            '軽度知的障害',
            'ADHD',
            '自閉スペクトラム症',
            '発達性協調運動障害',
            '',
            '',
            '',
            'これはテストです。',
            '2026-09-28',
            '旭川荘南愛媛病院',
            '小児神経科',
            '森本武彦'
        ]
        
    tdObj.forEach((element,index) => {
        console.log(element);
        //element.value = element.id;
        element.value = testData[index];
    });
}
export function back()
{
    let tdObj = document.querySelectorAll('.td');
    let tdArray =[];
    tdObj.forEach(i=>{
        console.log(i.value);
        tdArray.push(i.value);
    })
    console.log('tdArray='+tdArray);
    fetch('backward.php',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(tdArray)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        location.href = './inpForm.php';
    })
    .catch((reason) =>{
        console.log(reason);
    })     
       
}
export function stage1()
{
    //console.log('stage1');
    let topObj = document.getElementById('top');
    let midObj = document.getElementById('mid');
    let mc0Obj = document.getElementById('mc0');
    let mc1Obj = document.getElementById('mc1');
    let mc2Obj = document.getElementById('mc2');
    let mc3Obj = document.getElementById('mc3');
    let botObj = document.getElementById('bot');
    let cbObj = document.querySelectorAll('.cb');
    cbObj[0].style.display = 'block';
    cbObj[1].style.display = 'block';
    cbObj[2].style.display = 'block';
    cbObj[3].style.display = 'none';
    cbObj[4].style.display = 'none';
    cbObj[5].style.display = 'block';
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
export function stage0()
{
    //console.log('stage0');
    let midObj = document.getElementById('mid');
    let mc0Obj = document.getElementById('mc0');
    let mc1Obj = document.getElementById('mc1');
    let mc3Obj = document.getElementById('mc3');
    let cbObj = document.querySelectorAll('.cb');
    cbObj[0].style.display = 'block';//search
    cbObj[1].style.display = 'block';//all data
    cbObj[2].style.display = 'block';//input box
    cbObj[3].style.display = 'block';//confirm
    cbObj[4].style.display = 'block';//recover
    cbObj[5].style.display = 'block';//store
    cbObj[6].style.display = 'block';//print
    cbObj[7].style.display = 'block';//clear
    cbObj[8].style.display = 'block';//to top

    midObj.style.display = 'block';
    mc0Obj.style.display = 'none';
    mc1Obj.style.display = 'none';
    mc3Obj.style.display = 'none';
    //botObj.style.display = 'none';

}

export function stage2()
{
    console.log('stage2');
    let midObj = document.getElementById('mid');
    let mc0Obj = document.getElementById('mc0');
    let mc1Obj = document.getElementById('mc1');
    let mc2Obj = document.getElementById('mc2');
    let mc3Obj = document.getElementById('mc3');
    let botObj = document.getElementById('bot');
    let cbObj = document.querySelectorAll('.cb');
    cbObj[0].style.display = 'block';
    cbObj[1].style.display = 'block';
    cbObj[2].style.display = 'block';
    cbObj[3].style.display = 'block';
    cbObj[4].style.display = 'block';
    cbObj[5].style.display = 'block';
    cbObj[6].style.display = 'block';
    cbObj[7].style.display = 'block';
    cbObj[0].style.background = 'gray';
    cbObj[1].style.background = 'gray';
    cbObj[2].style.background = 'gray';
    cbObj[3].style.background = 'gray';
    cbObj[4].style.background = 'gray';
    cbObj[5].style.background = 'gray';
    cbObj[6].style.background = 'gray';
    cbObj[7].style.background = 'gray';
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
export function stage3()
{
    //console.log('stage0');
    let midObj = document.getElementById('mid');
    let mc0Obj = document.getElementById('mc0');
    let mc1Obj = document.getElementById('mc1');
    //let mc2Obj = document.getElementById('mc2');
    let mc3Obj = document.getElementById('mc3');
    let botObj = document.getElementById('bot');
    let cbObj = document.querySelectorAll('.cb');
    topObj.style.display = 'none';
    cbObj[0].style.display = 'none';
    cbObj[1].style.display = 'none';
    cbObj[2].style.display = 'none';
    cbObj[3].style.display = 'none';
    cbObj[4].style.display = 'none';
    cbObj[5].style.display = 'block';
    cbObj[6].style.display = 'none';
    cbObj[7].style.display = 'none';

    midObj.style.display = 'block';
    mc0Obj.style.display = 'none';
    mc1Obj.style.display = 'none';
    mc3Obj.style.display = 'none';
    botObj.style.display = 'none';

}
export function stage4()
{
    //console.log('stage0');
    let midObj = document.getElementById('mid');
    let mc0Obj = document.getElementById('mc0');
    let mc1Obj = document.getElementById('mc1');
    //let mc2Obj = document.getElementById('mc2');
    let mc3Obj = document.getElementById('mc3');
    let botObj = document.getElementById('bot');
    let cbObj = document.querySelectorAll('.cb');
    cbObj[0].style.display = 'block';
    cbObj[1].style.display = 'block';
    cbObj[2].style.display = 'block';
    cbObj[3].style.display = 'block';
    cbObj[4].style.display = 'block';
    cbObj[5].style.display = 'block';
    cbObj[6].style.display = 'block';
    cbObj[7].style.display = 'block';
    cbObj[8].style.display = 'block';

    midObj.style.display = 'block';
    midObj.style.display = 'flex';
    mc0Obj.style.display = 'none';
    mc1Obj.style.display = 'block';
    mc3Obj.style.display = 'none';
    botObj.style.display = 'none';

}
export function getForwardData(){
    console.log('getForwardData()');
    fetch('getForwardData.php')
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        if(data.length!==0){
            let tdObj = document.querySelectorAll('.td');
            tdObj.forEach((t,index)=>{
                t.value = data[index];
            })
        }
    })
    .catch(error => {
    console.error(error);
  });

}

export function confirm(calAge){
   
    const confObj=document.getElementById('conf');
    let Text = "";
    confObj.addEventListener('click',function(){ 
        confObj.style.background="orange";
        
    
        //--------------------------------------------------------------------------------------
        const dispObj=document.querySelectorAll('.disp');
        const tdObj=document.querySelectorAll('.td');
        const tdArray = [];
        dispObj.forEach((d,index)=>{
            d.textContent= tdObj[index].value;
            tdArray.push(tdObj[index].value);
            if(index==14){
                Text = tdObj[index].value;
            }
            
        })
        
        console.log(tdArray);
        keepTemp(tdArray);
        //calAge(tdArray[3],tdArray[15]);
        let age=calAge(tdArray[3],tdArray[15]);
        let day3 = toWareki(tdArray[3]);
        let day15 = toWareki(tdArray[15]);
        tdArray[3]=day3;
        tdArray[15]=day15;
        tdArray[4]=age;
        console.log('age='+age);
        const keepDisp = [];
        for(let j=0;j<19;j++ )
        {
            keepDisp[j] = dispObj[j].innerHTML;
            console.log('keepDisp['+j+']='+keepDisp[j]);
            if(j==14)
            {
                console.log('keepDisp[14]='+keepDisp[14]);
                console.log('dispObj[14].innerHTML='+dispObj[14].innerHTML);
                console.log('dispObj[14].outerHTML='+dispObj[14].outerHTML);
                const input = dispObj[14].textContent;
                console.log('input ='+ input);
                const fixed = input.value.replace(/\\n/g, '\n');
                dispObj[14].textContent=fixed;
            }else{
                dispObj[j].textContent=tdArray[j];
            }
            
        }
        paginateText(
        Text,
        [
            document.getElementById("disp14"),
            document.getElementById("disp14attached")
        ]
        );
    })
    function keepTemp(tdArray)
    {
        //console.log(tdArray);
        fetch('makeTempData.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(tdArray)
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
}

export function calAge(bday,wday)
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
