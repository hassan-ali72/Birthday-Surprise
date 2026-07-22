const message = `

Happy Birthday, My Love ❤️

Today is one of the most beautiful days because it reminds me that someone incredibly special came into this world.

I wish I could be there beside you to celebrate this wonderful day with you.

Thank you for being the reason behind so many of my smiles.

Your happiness means everything to me.

May every dream you have come true.

May your life always be filled with love, success, peace and endless happiness.

No matter where life takes us, I will always pray for your smile.

You are one of the best things that ever happened in my life.

Thank you for always being yourself.

Happy Birthday once again.

I hope today brings you as much happiness as you bring into my life.

Hope you will always with me 

I Love You Forever ❤️

`;

let i = 0;

function typeWriter(){

if(i < message.length){

document.getElementById("typing").innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

typeWriter();
