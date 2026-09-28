export function init(){
    
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
        '診断名５を入力してください。',
        '診断名６を入力してください。',
        '診断名７を入力してください。',
        '付記を入力してください。',
        '記入日を入力してください。',
        '施設名を入力してください。',
        '科名を入力してください。',
        '主治医名を入力してください。'
    ];
    const instructionBoxObj = document.getElementById('instructionBox');
    instructionArray.forEach((ins,index)=>{
        let item = document.createElement('div');
        item.textContent = ins;
        item.id = 'ins'+index;
        item.className = 'ins';
        instructionBoxObj.appendChild( item );
        
    })
    
    
    //inpObj[13].value="旭川荘南愛媛病院・南愛媛療育センター";
    //inpObj[14].value="小児神経科";
    //inpObj[15].value="森本武彦";

}
export function itemSelect(calendarMaker,zipAddress){
    const indObj = document.querySelectorAll('.ind');
    const insObj = document.querySelectorAll('.ins');
    let frameObj = document.querySelectorAll('.frame');
    insObj.forEach(item=>{
        item.style.display = 'none';
    })
    frameObj.forEach(fr=>{
        fr.style.display = 'none';
    })
    //console.log(indObj);
    indObj.forEach((ind,index)=>{
        //console.log(ind);
        ind.addEventListener('click',function(){
            
            if(ind.style.background!="orange"){
                ind.style.background="orange";
                frameObj = document.querySelectorAll('.frame');
                insObj.forEach(item=>{
                    item.style.display = 'none';
                })
                frameObj.forEach(fr=>{
                    fr.style.display = 'none';
                })
                console.log(index);
                insObj[index].style.display = 'block';
                frameObj[index].style.display = 'block';
                switch(index){
                    case 3:
                    case 15:
                        calendarMaker(index);
                        break;
                    case 5:
                        console.log('zipAddress['+index+']')
                        zipAddress(index);
                        break;
                    
                    default:
                        break;
                }
                
            }else{
                ind.style.background="";
                insObj.forEach(item=>{
                    item.style.display = 'none';
                })
                frameObj.forEach(fr=>{
                    forEach.style.display = 'none';
                })
            }
            
        })
    })
}

export function getBackData(){
    fetch('getBackData.php')
    .then(res=>res.json())
    .then(data=>{
        //console.log(data)
        let inpObj = document.querySelectorAll('.inp');
        console.log('inpObj='+inpObj);
        inpObj.forEach((inp,index)=>{
            //console.log('index='+index);
            //console.log('inp='+inp);
            //console.log('inp.value='+inp.value);
            //console.log('data['+index+']='+data[index]);
            inp.value = data[index];
        })
    })
    .catch((reason) => {
            console.log(reason);
    })

   
}

export function refMaker(itemNumberArray){
    let inpObj = document.querySelectorAll('.inp');
    let inpDataArray = [];
    itemNumberArray.forEach((iN,index)=>{
        console.log('iN='+iN);
        console.log(inpObj);
        console.log(inpObj[iN]);
        inpDataArray[index] = inpObj[iN].value;
        console.log('inpDataArray['+index+']='+inpDataArray[index]);

    })

}

export function forward(){
    const forwardObj = document.getElementById('forward');
    forwardObj.addEventListener('click',function(){
        forwardObj.style.background = "orange";
        let inpArray =[];
        let inpObj = document.querySelectorAll('.inp');
        inpObj.forEach(i=>{
            inpArray.push(i.value);
        })
        console.log(inpArray);
        fetch('tempForwardDataMaker.php',{
            method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(inpArray)
            })
            .then(response =>response.json())
            .then(data => {
                console.log(data);
                location.href='index.php';
        
          
            })
            .catch((reason) => {
            console.log(reason);
            })
        //const itemNumberArray = [2,7,8,9,10,11,12,15,16,17];
        //refMaker(itemNumberArray);
    })
}

export function storeData(){
    fetch('storeData.php')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    .catch((reason) => {
        console.log(reason);
    })
}

export function zipAddress(index){
    const inpZipObj = document.getElementById('inp'+index);
    inpZipObj.addEventListener('keyup',e=>{
        console.log(e.key);
        if(e.key==="Enter"){
            const zipCode = inpZipObj.value;
            console.log('zipCode='+zipCode);
            const address = getAddress(zipCode,setAddress);
            console.log('address='+address);
            function setAddress(address){
                const inpAddressObj = document.getElementById('inp' + (index+1));
                inpAddressObj.value = address;
            }
            
        }
    })
}
async function getAddress(zipCode,setAddress) {
    // Remove hyphens from the postal code
    zipCode = zipCode.replace(/-/g, '');

    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== 200 || !data.results) {
            console.log("Address not found.");
            return null;
        }

        const result = data.results[0];

        const address =
            result.address1 +
            result.address2 +
            result.address3;

        console.log(address);
        setAddress(address);
        return address;

    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}


