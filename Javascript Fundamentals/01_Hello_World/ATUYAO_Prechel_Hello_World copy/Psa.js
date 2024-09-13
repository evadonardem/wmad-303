const nym = prompt ("What is your name?");
document.getElementById("namePsa").innerHTML = nym;

const kulay = prompt ("What is your favourite color?");
document.getElementById("namePsa").style.color = kulay;

setInterval(() => {
    let n = (Math.random() *0xfffff * 1000000).toString(16);
    n = '#' + n.slice(0,6);
    document.body.style.backgroundColor = n;
}, 1000);