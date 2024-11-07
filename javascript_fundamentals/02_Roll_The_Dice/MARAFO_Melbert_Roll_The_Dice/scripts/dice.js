const checkValue = (x) => {
    switch (x) {
        case -580:
            return 6;
        case -464:
            return 5;
        case -348:
            return 4;
        case -232:
            return 3;
        case -116:
            return 2;
        case 0:
            return 1;
    }
};


const rollMe = () => {
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);

    const xOffsetdie1 = -(116 * (die1 - 1));
    const yOffsetdie1 = (die1 > 3) ? -116 : 0;

    const xOffsetdie2 = -(116 * (die2 - 1));
    const yOffsetdie2 = (die2 > 3) ? -116 : 0;

    console.log("Die 1 is " + checkValue(xOffsetdie1));
    console.log("Die 2 is " + checkValue(xOffsetdie2));

    const die2Style = document.getElementById("dice2").style;
    const die1Style = document.getElementById("dice1").style;
    
    const die1text = document.getElementById("value1");
    const die2text = document.getElementById("value2");

    die1text.textContent = checkValue(xOffsetdie1);
    die2text.textContent = checkValue(xOffsetdie2);

    const sumText = document.getElementById("sum");
    sumText.textContent = checkValue(xOffsetdie1) + checkValue(xOffsetdie2);


    die1Style.backgroundPositionX = xOffsetdie1 + "px";
    die1Style.backgroundPositionY = yOffsetdie1 + "px";

    die2Style.backgroundPositionX = xOffsetdie2 + "px";
    die2Style.backgroundPositionY = yOffsetdie2 + "px";

};

const rollMeBtn = document.getElementById("rollItBaby");

rollMeBtn.onclick = () => {
    rollMe();
}


