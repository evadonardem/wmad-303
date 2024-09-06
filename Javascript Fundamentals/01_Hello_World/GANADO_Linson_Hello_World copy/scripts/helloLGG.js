
        const ngadan = prompt ("What is your name?");
        document.getElementById("nameLGG").innerHTML = ngadan;

        const ngulay = prompt ("What is your favorite color?");
        document.getElementById("nameLGG").style.color = ngulay;

setInterval(() => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        n = '#' + n.slice(0,6);
        document.body.style.backgroundColor = n;
}, 1000) ;
  