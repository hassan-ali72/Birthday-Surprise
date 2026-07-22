const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

const x = Math.random() * 300 - 150;

const y = Math.random() * 300 - 150;

noBtn.style.transform =
`translate(${x}px,${y}px)`;

});

document.getElementById("yesBtn").onclick = function(){

confetti({

particleCount:400,

spread:180,

origin:{y:.6}

});

Swal.fire({

title:"❤️",

text:"I LOVE YOU SOOOOOOOOO MUCH ❤️",

icon:"success",

confirmButtonText:"Awww ❤️"

}).then(()=>{

window.location="final.html";

});

}