const gradeElement = document.getElementById("gradePsa");

const gradeEvaluator = (grade) =>{
    const gradeCard = document.getElementById("gradeCardPsa");
    let cardHeader;
    let cardTitle;
    let cardText;
    let cardColor = "text-bg-";
    if (grade >= 95 && grade <= 98) {
        cardHeader = "Passed";
        cardTitle = "Excellent Grade";
        cardText = "You did Great!";
        cardColor = `${cardColor}primary`;
    } else if (grade >= 90 && grade <= 94) {
        cardHeader = "Passed";
        cardTitle = "Good Grade";
        cardText = "You did good!";
        cardColor = `${cardColor}secondary`;
    } else if (grade >= 93 && grade <= 89) {
        cardHeader = "Passed";
        cardTitle = "Good Grade";
        cardText = "You did okay!";
        cardColor = `${cardColor}sucess`;
    } else if (grade >= 85 && grade <= 89) {
        cardHeader = "Passed";
        cardTitle = "Good Grade";
        cardText = "You did good!";
        cardColor = `${cardColor}secondary`;
    } else if (grade >= 80 && grade <= 84) {
        cardHeader = "Passed";
        cardTitle = "Average Grade";
        cardText = "You did okay!";
        cardColor = `${cardColor}info`;
    } else if (grade >= 75 && grade <= 79) {
        cardHeader = "Passed";
        cardTitle = "Poor Grade";
        cardText = "You did poor!";
        cardColor = `${cardColor}warning`;
    } else if (grade < 75) {
        cardHeader = "Failed";
        cardTitle = "Failed Grade";
        cardText = "You did good!";
        cardColor = `${cardColor}danger`;
    } else {
        cardHeader = "Invalid";
        cardTitle = "Invalid Grade";
        cardText = "Invalid";
        cardColor = `${cardColor}danger`;
        console.log("Invalid Grade!");
    }

    gradeCard.classList.remove(
        "text-bg-primary",
         "text-bg-secondary",
          "text-bg-success",
           "text-bg-info",
            "text-bg-warning",
             "text-bg-danger"
    );
};

    gradeCard.classList.add(cardColor);
    gradeCard.getElementsByClassName("card-header")[0].innerText = cardHeader;
    gradeCard.getElementsByClassName("card-title")[0].innerText = cardTitle;
    gradeCard.getElementsByClassName("card-text")[0].innerText = cardText;

    gradeElement.onchange = (event) =>{
        const grade = event.target.value;
        gradeEvaluator(grade);
    };
