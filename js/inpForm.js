import {init}  from './inpForm_modules.js';
import {itemSelect}  from './inpForm_modules.js';
import {getBackData}  from './inpForm_modules.js';
import {calendarMaker}  from './calendar_modules.js';
import {forward} from './inpForm_modules.js';
import {refMaker} from './inpForm_modules.js';
import {storeData} from './inpForm_modules.js';
import {zipAddress} from './inpForm_modules.js';

window.addEventListener('DOMContentLoaded',function(){
    //console.log('inpForm_js');
    init();
    itemSelect(calendarMaker,zipAddress);
    getBackData();
    forward();
    storeData();
    






})