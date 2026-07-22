for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(4+Math.random()*5)+"s";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.querySelector(".hearts").appendChild(heart);

}

function yesPage(){

window.location="birthday.html";

}

function noPage(){

window.location="no.html";

}
function backPage(){

window.location="surprise.html";

}
function nextPage(){

window.location="letter.html";

}

// Confetti

confetti({

particleCount:250,

spread:180,

origin:{y:0.6}

});

setInterval(()=>{

confetti({

particleCount:8,

spread:90,

origin:{
x:Math.random(),
y:Math.random()-0.2
}

});

},2500);
function hugPage(){

window.location="hug.html";

}
function minePage(){

window.location="mine.html";

}