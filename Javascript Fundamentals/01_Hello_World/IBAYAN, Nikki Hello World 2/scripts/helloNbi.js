const nameNbi = prompt("What is oyour name?");
        document.getElementById("nameNbi").innerHTML = nameNbi;

const kulay = prompt("What is your favorite color?");
document.getElementById("nameNbi").style.color = kulay;

setInterval (()=> {
    let n = (Math.random() * 0xffff * 1000000).toString(16);
    n = '#' + n.slice(0,6);
    document.body.style.backgroundColor = n;
}, 1000
);