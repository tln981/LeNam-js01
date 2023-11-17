setInterval(setClock,1000);
const hour=document.getElementsByClassName("hour");
const minute=document.getElementsByClassName("minute");
const second=document.getElementsByClassName("second");
const digitalHour=document.getElementById("digitalHour");
const digialMinute=document.getElementById("digitalMinute");
const calender=document.getElementById('calender');
const valueDay=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
const valueMonth=['JAN','FEB','MAR','APR','MAY','JUN','JULY','AUG','SEP','OCT','NOV','DEC']
function setClock(){
    const currentDate=new Date();  
    const secRatio=currentDate.getSeconds()/60;
    const minRatio=(secRatio+currentDate.getMinutes())/60;
    const hrRatio=(minRatio+currentDate.getHours())/12;
    setRotation(second,secRatio);
    setRotation(minute,minRatio);
    setRotation(hour,hrRatio);

    setValue(digitalHour,currentDate.getHours());
    const currentMin=currentDate.getMinutes()<10?"0"+currentDate.getMinutes():currentDate.getMinutes();
    setValue(digialMinute,currentMin);
    
    const day=valueDay[currentDate.getDay()];
    const month=valueMonth[currentDate.getMonth()];
    const date=currentDate.getDate();
   
    const valueCalender=String(day+', '+month+' '+date)
    setValue(calender,valueCalender);
}

function setRotation(element,rorationRatio){
    element[0].style.transform='rotate('+rorationRatio*360+"deg)";
}

function setValue(element,value){
    element.innerHTML=value;
}
