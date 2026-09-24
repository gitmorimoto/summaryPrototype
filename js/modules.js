export function test(){
    console.log('module test');
    const tdObj = document.querySelectorAll('.td');
    tdObj.forEach(element => {
        console.log(element);
        element.value = element.id;
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