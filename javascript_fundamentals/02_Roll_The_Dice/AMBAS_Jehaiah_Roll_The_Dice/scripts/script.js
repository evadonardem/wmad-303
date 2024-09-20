const rollbtn = document.getElementById("roll-btn");

const roll = () => {
    const dimension = 116; 
    const diceElements = [
        document.getElementById("die1"),
        document.getElementById("die2")
    ];

    
    diceElements.forEach((dieElement, index) => {
        const dieValue = Math.floor(Math.random() * 6) + 1; 
        console.log(`Die ${index + 1}:`, dieValue); 

        if (dieElement) {
            dieElement.style.backgroundPositionX = -(dimension * (dieValue - 1)) + "px"; 
            dieElement.style.backgroundPositionY = dieValue > 3 ? -dimension + "px" : "0px";
        } else {
            console.log(`Die ${index + 1} element not found.`);
        }
    });
};

rollbtn.onclick = () => {
    roll();
};
