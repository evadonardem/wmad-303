document.addEventListener("DOMContentLoaded", function() {
    const rollBtn = document.getElementById("rollBtn");
    const roll = () => {
        const dimension = 116;
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        const die1Element = document.getElementById("die1");
        const die2Element = document.getElementById("die2"); // Get a separate element for die2

        die1Element.style.backgroundPositionX = `${-(dimension * (die1 - 1))}px`;
        die1Element.style.backgroundPositionY = `${-(die1 > 3 ? dimension * 1 : 0)}px`;

        die2Element.style.backgroundPositionX = `${-(dimension * (die2 - 1))}px`; // Use die2 value
        die2Element.style.backgroundPositionY = `${-(die2 > 3 ? dimension * 1 : 0)}px`; // Use die2 value
    };

    rollBtn.onclick = () => {
        roll();
    };
});