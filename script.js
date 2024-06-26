//global scope
let setDate = document.getElementById("date");
let setTime = document.getElementById("time");
let btnSubmit = document.getElementById("submit");
let currentTime, currentDate, timeVal, dateVal;
let audio = new Audio("alarm.mp3");
let timeLogic, dateLogic, secLogic;
let alarmContainer = document.querySelector(".alarmContainer");
//setDate.value = `${(new Date()).getFullYear()}-01-01`;
//setTime.value = "00:00";
btnSubmit.addEventListener("click", triggerClock);
document.addEventListener("change", () => {
    timeVal = (setTime.value);
    dateVal = setDate.value;
    if (timeVal && dateVal) {
        
        btnSubmit.removeAttribute("disabled")
    }
    else {
        btnSubmit.setAttribute("disabled", "disabled")
        
    }
})
//logic to ring the alarm
function triggerClock() {
    alarmContainer.innerHTML =`<img src="alarm.gif" alt="" class="alarmGif"><span>Alarm is set at ${timeVal} on ${dateVal}.</span>
    `
    let alarmGif = document.querySelector(".alarmGif");
    alarmGif.style.display = "none"






    btnSubmit.setAttribute("disabled", "disabled")
    
    setInterval(() => {
        currentDate = new Date();
        
        // In below two lines "==" does not see the date typpe of variable ; for eg ; 6 == "06" gives true but both the datatypes are different i.e; one is an  integer or number and another is a striing
        
        timeLogic = (currentDate.getHours()) == (timeVal.slice(0, 2)) && ((currentDate.getMinutes())) == (timeVal.slice(3, 5));
        
        dateLogic = (currentDate.getFullYear() == dateVal.slice(0, 4) && currentDate.getDate() == dateVal.slice(8, 10) && currentDate.getMonth() + 1 == (dateVal.slice(5, 7)));
        
        secLogic = ((new Date()).getSeconds()) == 0 ;

        //console.log(secLogic,timeLogic,dateLogic)
        //console.log(timeLogic,dateLogic,secLogic)
        
        
        if (secLogic  &&  dateLogic && timeLogic) {
            console.log("Alram  ringing.........")
            audio.play();
            btnSubmit.removeAttribute("disabled");
            alarmGif.style.display="block";
            //alarmContainer.innerHTML = '';
            setTimeout(() => {
                alarmGif.style.display="none";
                alarmContainer.innerHTML = '';
                
            }, 5400);
        }
        else {
            console.log("Error found...");

        }
    })
}

