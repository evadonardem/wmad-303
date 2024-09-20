const rollMeBtn = document.getElementById("rollBtn");

const rollMe = () => {
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);
    
    const xOffsetdie1 = -(116 * (die1 - 1));
    const yOffsetdie1 = (die1 > 3) ? -118 : 0;
    
    const xOffsetdie2 = -(116 * (die2 - 1));
    const yOffsetdie2 = (die2 > 3) ? -118 : 0;
    
    const die1Style = document.getElementById("die1").style;
    const die2Style = document.getElementById("die2").style;
    
    die1Style.backgroundPositionX = xOffsetdie1 + "px";
    die1Style.backgroundPositionY = yOffsetdie1 + "px";
    
    die2Style.backgroundPositionX = xOffsetdie2 + "px";
    die2Style.backgroundPositionY = yOffsetdie2 + "px";
};

rollMeBtn.onclick = () => {
    rollMe();
}


