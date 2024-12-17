const name = prompt("What is your name");
document.getElementById("nameSI").innerHTML = name;

const kulay = prompt("What is your color?")
document.getElementById("nameSI").style.color = kulay;

setInterval(() =>{
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    n = '#' + n.slice(0,6);
    document.body.style.backgroundColor = n;
}, 1000);
