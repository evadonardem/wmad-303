const rollBtn = document.getElementById("rollBtn");

const roll = () => {
    const dimension = 116;

    // Roll for both dice
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    const dieElement1 = document.getElementById("die1");
    const dieElement2 = document.getElementById("die2");

    console.log(`Die 1: ${die1}, Die 2: ${die2}`);

    // Set background positions for both dice
    dieElement1.style.backgroundPositionX = `-${dimension * (die1 - 1)}px`;
    dieElement1.style.backgroundPositionY = `-${die1 > 3 ? dimension : 0}px`;

    dieElement2.style.backgroundPositionX = `-${dimension * (die2 - 1)}px`;
    dieElement2.style.backgroundPositionY = `-${die2 > 3 ? dimension : 0}px`;
};

rollBtn.onclick = () => {
    roll();
};
