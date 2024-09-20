const rollbtn = document.getElementById("roll-btn");

const roll = () => {
    const dimension = 116; 
    const die1 = Math.floor(Math.random() * 6) + 1; 
    const die1Element = document.getElementById("IahJhe");

    console.log(die1); 


    if (die1Element) {
        die1Element.style.backgroundPositionX = -(dimension * (die1 - 1)) + "px"; 
        die1Element.style.backgroundPositionY = die1 > 3 ? -dimension + "px" : "0px";
    } else {
        console.log("Element with ID 'IahJhe' not found.");
    }
};

rollbtn.onclick = () => {
    roll();
};
