const nym = prompt("What is your name?");
document.getElementById("nameJsa").innerHTML = nym;

const kulay = prompt ("What is your favorite color?");
document.getElementById("nameJsa").style.color = kulay;

setInterval(() => {
let n = (Math.random() *0xfffff * 1000000).toString(16);
n = '#' + n.slice(0, 6);
document.body.style.backgroundColor = n;
}, 1000);