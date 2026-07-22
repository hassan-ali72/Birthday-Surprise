function checkPassword(){

let password=document.getElementById("password").value;
  
if(password=="14september2025"){

Swal.fire({

icon:"success",

title:"Correct Password ❤️",

text:"Opening your surprise..."

}).then(()=>{

window.location="surprise.html";

});

}

else{

Swal.fire({

icon:"error",

title:"Wrong Password",

text:"Please Try Again"

});

}

}
