export function calendarMaker(cN){
    console.log('calendar_modules.js')
    let jEra ="";
    
    
    const sObj = document.getElementById('s'+cN);
    const hObj = document.getElementById('h'+cN);
    const rObj = document.getElementById('r'+cN);
  //----------------make year list---------------------------------  
    console.log('sObj.id='+sObj.id);
    sObj.addEventListener('click',function(){
        console.log('sObj is clicked');
        let wYear = 0;
        sObj.style.backgroundColor = "orange"
        jEra = 's';
        wYear = makeYearList('s');
        selectYear(jEra);
        //toMonth(wYear);
    })
    hObj.addEventListener('click',function(){
        console.log('hObj is clicked');
        let wYear = 0;
        hObj.style.backgroundColor = "orange";
        jEra = 'h';
        wYear = makeYearList('h');
        selectYear(jEra);
        //toMonth(wYear);
    })
    rObj.addEventListener('click',function(){
        console.log('rObj is clicked');
        let wYear = 0;
        rObj.style.backgroundColor = "orange"
        jEra = 'r';
        makeYearList('r');
        //toMonth(wYear);
        selectYear(jEra);
    })
    //------------select year-------------------------------------
   
    //wYear = japaneseEraToWestern(jEra, $year)
    function makeYearList(jEra)
    {
        const yObj = document.querySelectorAll('.y'+cN);
        yObj.forEach(y=>{
            y.textContent = "";
        })
        let wYear = 0;
        switch(jEra){
            case 's':
                console.log('switch s');
                for(let y=0;y<65;y++){
                    yObj[y].textContent = y;
                }
                break;
            case 'h':
                for(let y=0;y<30;y++){
                    yObj[y].textContent = y;   
                }
                break;
            case 'r':
                for(let y=0;y<100;y++){
                    yObj[y].textContent = y;
                    
                }
                break;
        }
    }
    function japaneseToWesternYear($era, $year)
    {
        switch ($era) {
            case 's':
                return Number($year) + Number(1925);

            case 'h':
                return Number($year) + Number(1988)

            case 'r':
                return Number($year) + Number(2018);

            default:
                return null; // Unknown era
        }
    }


    function selectYear(jEra){
        console.log('selectYear');
        let yObj = document.querySelectorAll('.y'+cN);
        yObj.forEach(y=>{
           y.addEventListener('click',function(){
                console.log(y.textContent);
                y.style.backgroundColor="orange";
                let jYear = y.textContent;
                let wYear = japaneseToWesternYear(jEra,jYear);
                console.log('wYear=' + wYear);
                selectMonth(wYear);
           })
        })
    }

    function selectMonth(wYear){
        let mObj = document.querySelectorAll('.m'+cN);
        mObj.forEach(m=>{
            m.addEventListener('click',function(){
                m.style.backgroundColor = "orange";
                console.log('m.textContent='+ m.textContent);
                let month = m.textContent;
                makeCalendar(wYear,month);
            })
            
        })
    }

    function makeCalendar(wYear,month){
        console.log('year='+wYear+',month='+month);
        let monthDetail = [];
        let firstDayofWeek = [];
        let lastDay = [];
        monthDetail=getMonthDetails(wYear,month);
        console.log('monthDetail='+ monthDetail);
        firstDayofWeek = monthDetail.firstDayOfWeek;
        lastDay=monthDetail.lastDay;
        
        lastDay=lastDay.getDate();
        console.log('firstDayofWeek='+firstDayofWeek);
        console.log('lastDay='+lastDay);

        makeMonthCalendar(firstDayofWeek,lastDay);
    }

    function getMonthDetails(year, month) {
        // 月の最初の日
            if (month < 1 || month > 12) {
                throw new Error("month must be between 1 and 12");
            }
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

    function makeMonthCalendar(firstDayOfWeek,lastDay){
        console.log(firstDayOfWeek,lastDay);
        let trObj = document.createElement('tr');
        trObj.style.height="25px";
        let w = ['日','月','火','水','木','金','土'];
        for(let i=0;i<7;i++){
            
            let thObj = document.createElement('th');
            let tdObj = document.createElement('td');
            let wElement = document.createElement('td');
            thObj.style.height = "25px";
            console.log('i='+i);
            thObj.id = 'day' + cN + '_'+i;
            thObj.textContent = w[i];
            console.log(thObj);
            trObj.appendChild(thObj);

            
        }
        console.log(trObj);
        let tableObj = document.getElementById('table'+cN);
        tableObj.appendChild(trObj);
        console.log('tableObj='+tableObj);
        tableObj.style.color="white";
    }



}