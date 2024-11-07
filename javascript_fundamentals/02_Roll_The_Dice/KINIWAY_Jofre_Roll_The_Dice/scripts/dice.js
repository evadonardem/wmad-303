const rollbtn = document.getElementById("rollbtn");
const die1Element = document.getElementById("die1");


const dimension = 116; 

const roll = () => {
   
    const die1 = Math.floor(Math.random() * 6) + 1; 
    console.log("Die 1:", die1);
    
    const offsetX1 = dimension * (die1 - 1);
    const offsetY1 = die1 > 3 ? dimension : 0; 

    die1Element.style.backgroundPositionX = "-" + offsetX1 + "px";
    die1Element.style.backgroundPositionY = "-" + offsetY1 + "px";

 
    const die2 = Math.floor(Math.random() * 6) + 1; 
    console.log("Die 2:", die2);
    
   
    const die2Element = document.getElementById("die2");

    const offsetX2 = dimension * (die2 - 1);
    const offsetY2 = die2 > 3 ? dimension : 0; 

    die2Element.style.backgroundPositionX = "-" + offsetX2 + "px";
    die2Element.style.backgroundPositionY = "-" + offsetY2 + "px";
};


rollbtn.onclick = () => {
    roll();
};
