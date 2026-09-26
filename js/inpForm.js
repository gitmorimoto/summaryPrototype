import {init}  from './inpForm_modules.js';
import {itemSelect}  from './inpForm_modules.js';
import {getBackData}  from './inpForm_modules.js';
import {calendarMaker}  from './calendar_modules.js';
window.addEventListener('DOMContentLoaded',function(){
    console.log('inpForm_js');
    init();
    calendarMaker(3);
    calendarMaker(14);
    getBackData();
    itemSelect();






})