let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started =false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor= btns[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(ind){
    if(userSeq[ind]===gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelup,1000);
    }
}else{
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}
function btnPress(){
    let btn=this;
    userflash(btn);
    userColor= btn.getAttribute("id");

    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns= document.querySelectorAll(".btn");
   for(btn of allbtns){
    btn.addEventListener("click",btnPress);
   }
 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
   }
