const rollBtn = document.getElementById("rollBtn");

const roll = () => {
    const dimension = 116;
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die1Element = document.getElementById("kevin");
    console.log(die1);


    die1Element.style.backgroundPositionX = `-${dimension * (die1 - 1)}px`;
    die1Element.style.backgroundPositionY = `-${die1 >= 3 ? dimension * 1 : 0}px`;


};

rollBtn.onclick = () => {
    roll();
};sssss