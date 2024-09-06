const nameRAP = prompt("What is your name?");
        document.getElementById("nameRAP").innerHTML = nameRAP;

const kulay = prompt("What is your favorite color?");
document.getElementById("nameRAP").style.color = kulay;

setInterval (()=> {
    let n = (Math.random() * 0xffff * 1000000).toString(16);
    n = '#' + n.slice(0,6);
    document.body.style.backgroundColor = n;
}, 1000
);