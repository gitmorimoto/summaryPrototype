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
export function itemSelect(){
    const indObj = document.querySelectorAll('.ind');
    const insObj = document.querySelectorAll('.ins');
    let frameObj = document.querySelectorAll('.frame');
    insObj.forEach(item=>{
        item.style.display = 'none';
    })
    frameObj.forEach(fr=>{
        fr.style.display = 'none';
    })
    console.log(indObj);
    indObj.forEach((ind,index)=>{
        console.log(ind);
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
        console.log(data)
        let inpObj = document.querySelectorAll('.inp');
        console.log('inpObj='+inpObj);
        inpObj.forEach((inp,index)=>{
            console.log('index='+index);
            console.log('inp='+inp);
            console.log('inp.value='+inp.value);
            console.log('data['+index+']='+data[index]);
            inp.value = data[index];
        })
    })
    .catch((reason) => {
            console.log(reason);
    })
}

