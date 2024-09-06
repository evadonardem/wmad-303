const name = prompt("What is your name?");
console.log(nameJba);
document.getElementById("nameJba").innerHTML = name;

const clr = prompt("What is your favorite color?");
document.getElementById(nameJba).style.color = clr;

setInterval(() =>{
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    n = '#' + n.slice(0,6);
    document.body.style.backgroundColor = n;
}, 100);