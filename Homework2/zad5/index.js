var ongoing = false;
var pomodoroState = "00 : 00";
var shortBreakState = "00 : 00";
var longBreakState = "00 : 00";
var ongoingOption = "pomodoro";

var pomodoro = document.getElementById("pomodoro");
var shortBreak = document.getElementById("shortBreak");
var longBreak = document.getElementById("longBreak");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var timer = document.getElementById("timer");
var title = document.getElementById("title");
var music = document.getElementById("music");

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click",resetTimer);
pomodoro.addEventListener("click",setPomodoro);
longBreak.addEventListener("click",setLongBreak);
shortBreak.addEventListener("click",setShortBreak);

setInterval(counting,1000);

function setPomodoro()
{
    ongoingOption="pomodoro";

    if(pomodoroState==="00 : 00")
    {
        resetTimer();
    }
    else
    {
        timer.innerText=pomodoroState;
    }

    title.innerText = "("+timer.innerText.slice(0,2)+":"+timer.innerText.slice(5,7)+") KyuTimer >.<";
}

function setLongBreak()
{
    ongoingOption="longBreak";

    if(longBreakState==="00 : 00")
    {
        resetTimer();
    }
    else
    {
        timer.innerText=longBreakState;
    }

    title.innerText = "("+timer.innerText.slice(0,2)+":"+timer.innerText.slice(5,7)+") KyuTimer >.<";
}

function setShortBreak()
{
    ongoingOption="shortBreak";
    
    if(shortBreakState==="00 : 00")
    {
        resetTimer();
    }
    else
    {
        timer.innerText=shortBreakState;
    }

    title.innerText = "("+timer.innerText.slice(0,2)+":"+timer.innerText.slice(5,7)+") KyuTimer >.<";
    
}

function resetTimer()
{   music.pause();
    if(ongoing===true) 
    {
        ongoing=false;
    }
    if(ongoingOption==="pomodoro") 
    {
        timer.innerText = "25 : 00";
    }
    else if(ongoingOption==="shortBreak")
    {
        timer.innerText = "05 : 00";
    }
    else
    {
        timer.innerText = "10 : 00";
    }
}

function startTimer()
{
    ongoing=true;
}

function stopTimer()
{   music.pause();
    ongoing=false;

    if(ongoingOption==="pomodoro")
    {
        pomodoroState=timer.innerText;
    }
    else if(ongoingOption==="shortBreak")
    {
        shortBreakState=timer.innerText;
    }
    else
    {
        longBreakState=timer.innerText;
    }
}

function counting()
{
    if(ongoing===true)
    {
        sec = parseInt(timer.innerText.slice(5,7));
        min = parseInt(timer.innerText.slice(0,2));

        if(min ===0 && sec ===0)
        {   music.play();
            ongoing=false;
        }
        else if(sec === 0){
            min--;
            sec=59;
        }
        else
        {
            sec--;
        }

        if(min<1 && sec<10)
        {
            timer.innerText="00 : 0"+(String)(sec);
        }
        else if(min<1)
        {
            timer.innerText="00 : "+(String)(sec);
        }
        else if(min<10 && sec<10)
        {
            timer.innerText="0"+(String)(min)+" : 0"+(String)(sec);
        }
        else if(min<10)
        {
            timer.innerText="0"+(String)(min)+" : "+(String)(sec);
        }
        else if(sec<10)
        {
            timer.innerText=(String)(min)+" : 0"+(String)(sec);
        }
        else
        {
            timer.innerText=(String)(min)+" : "+(String)(sec);
        }

        title.innerText = "("+timer.innerText.slice(0,2)+":"+timer.innerText.slice(5,7)+") KyuTimer >.<";
    }
}
