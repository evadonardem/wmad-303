const rollBtn = document.getElementById("rollBtn");

const roll = () => {
    const dimension = 116;
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die1Element = document.getElementById("die1");
    const die2 = Math.floor(Math.random() * 6) + 1;
    const die2Element = document.getElementById("die2");

    const offsetX1 = dimension * (die1 - 1);
    const offsetY1 = die1 > 3 ? dimension * 1 : 0;
    
    const offsetX2 = dimension * (die2 - 1);
    const offsetY2 = die2 > 3 ? dimension * 1 : 0;

    die1Element.style.backgroundPositionX = "-" + offsetX1 + "px";
    die1Element.style.backgroundPositionY = "-" + offsetY1 + "px";

    die2Element.style.backgroundPositionX = "-" + offsetX2 + "px";
    die2Element.style.backgroundPositionY = "-" + offsetY2 + "px";
};

rollBtn.onclick = () => {
    roll();
};