const name = prompt("What is your name?");
document.getElementById("namePB").innerHTML = name;

const ngulor = prompt("What is your Color?");
document.getElementById("namePB").style.color = ngulor;

setInterval(() => {
    let n = (Math.random() * oxffff *1000000).toString(16);
    n = '#' + n.slice(0,6);
    document.body.style.backgroundColor = n;
},1000);