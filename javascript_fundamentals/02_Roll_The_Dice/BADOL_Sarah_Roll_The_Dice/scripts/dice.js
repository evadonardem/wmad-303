const rollbtn = document.getElementById("roll-btn");

const roll = () => {
    const dimension = 116; 
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1; 
    const die1Element = document.getElementById("Sarah");
    const die2Element = document.getElementById("Mae");

    console.log(die1); 


    if (die1Element) {
        die1Element.style.backgroundPositionX = -(dimension * (die1 - 1)) + "px"; 
        die1Element.style.backgroundPositionY = die1 > 3 ? -dimension + "px" : "0px";

        die2Element.style.backgroundPositionX = -(dimension * (die2 - 1)) + "px"; 
        die2Element.style.backgroundPositionY = die2 > 3 ? -dimension + "px" : "0px";
    } else {
        console.log("Element with ID 'Sian' not found.");
    }
};

rollbtn.onclick = () => {
    roll();
};
