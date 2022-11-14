const btnPlay=document.querySelector('.play');
const btnPause=document.querySelector('.pause');
const btnReset=document.querySelector('.reset');
const btnStop=document.querySelector('.stop');
const chrono=document.querySelector('.chrono');
const wrapper=document.querySelector('.wrapper')
const scores=document.querySelector('.scores')

btnPause.disabled=true;
btnReset.disabled=true;
btnStop.disabled=true;

let ms=0, s=0, mn=0, h=0;
let chronometre;

const myFunction=function(){
   
    ms=parseInt(ms);
    s=parseInt(s);
    mn=parseInt(mn);
    h=parseInt(h);
    
    ms++;
         
    if (ms<10) {
        ms='0'+ ms
    }
    if (s<10) {
        s='0'+ s
    }
    if (mn<10) {
        mn='0'+ mn
    }
    if (h<10) {
        h='0'+ h
    }
    if (ms==100) {
        ms=0;
        s++
    }
    if (s==60) {
        s=0;
        mn++
    }
    if (mn==60) {
        mn=0;
        h++
    }
    chrono.innerHTML=`${h}: ${mn}: ${s}: ${ms}`;
}    

btnPlay.addEventListener('click', ()=> {
    btnPlay.disabled=true;
    btnPause.disabled=false;
    btnReset.disabled=false;
    btnStop.disabled=false;
    chronometre= setInterval((myFunction), 10);

})

btnPause.addEventListener('click', ()=> {
    clearInterval(chronometre);
    btnPause.disabled=true;
    btnPlay.disabled=false;
    btnStop.disabled=true;
})

btnReset.addEventListener('click', ()=>{
    btnReset.disabled=true;
    btnPause.disabled=true;
    btnPlay.disabled=false;
    btnStop.disabled=true;
    scores.innerHTML="";
    clearInterval(chronometre)
    ms=0; s=0; mn=0; h=0
    chrono.textContent=`00: 00: 00 : 00`;
})

n=0;
btnStop.addEventListener('click', ()=>{
    n++;
    let score=document.createElement('p');
    scores.appendChild(score);
    score.textContent=`Score ${n}: ${h}: ${mn}: ${s}: ${ms}`
})

