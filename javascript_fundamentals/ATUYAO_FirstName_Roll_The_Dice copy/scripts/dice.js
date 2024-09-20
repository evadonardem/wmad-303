const rollBtn = document.getElementById("rollBtn");

const roll = () => {
    const dimension = 116;
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const die1Element = document.getElementById("die1");
    const die2Element = document.getElementById("die2");
    console.log(die1);
    console.log(die2);
    console.log(dimension * (die1 - 1));
    console.log(dimension * (die2 - 1));


    die1Element.style.backgroundPositionX = `-${dimension * (die1 - 1)}px`;
    die2Element.style.backgroundPositionY = `-${die1 > 3 ? dimension : 0}px`;
    die1Element.style.backgroundPositionX = `-${dimension * (die2 - 1)}px`;
    die2lement.style.backgroundPositionY = `-${die2 > 3 ? dimension : 0}px`;
};

rollBtn.onclick = () => {
    roll();
};