        const nameCGSA = prompt("What is your name?");
            document.getElementsById("nameCgsa").innerHTML = nameCgsa;

        const color = prompt("What is your favorite color?");
            document.getElementsById("nameCgsa").style.backgroundColor = color;

        setInterval (()=> {
            let n = (Math.random() * xffff * 1000000).toString(16);
            n = '#' + n.slice(0,6);
            document.body.style.backgroundColor = n;
        }, 1000);