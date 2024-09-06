
        const nym= prompt ("What is your name?");
        document.getElementById("nameSmb").innerHTML = nym;

        const colour = prompt ("What is your favorite color?");
        document.getElementById("nameSmb").style.color = colour;

        setInterval( () => {
        let n = (Math.random() * 0xffffff * 1000000).toString(16);
        n = '#' + n.slice(0,6);
        document.body.style.backgroundColor = n ;
}, 1000);
  