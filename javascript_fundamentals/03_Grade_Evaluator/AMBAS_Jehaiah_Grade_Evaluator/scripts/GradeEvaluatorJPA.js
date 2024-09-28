const gradeElement = document.getElementById("gradeJpa");
const gradeCard = document.getElementById("gradeCardJpa");

const gradeEvaluator = (grade) => {
    let cardHeader;
    let cardTitle;
    let cardText;
    let cardBgColor = "text-bg-";

    if (grade >= 95 && grade <= 99) {
        cardHeader = "Passed";
        cardTitle = "Excellent Work!";
        cardText = "Keep up the great effort!";
        cardBgColor += "primary";
    } else if (grade >= 90 && grade <= 94) {
        cardHeader = "Passed";
        cardTitle = "Great Job!";
        cardText = "You're doing really well!";
        cardBgColor += "secondary";
    } else if (grade >= 85 && grade <= 89) {
        cardHeader = "Passed";
        cardTitle = "Good Job!";
        cardText = "Nice progress!";
        cardBgColor += "success";
    } else if (grade >= 80 && grade <= 84) {
        cardHeader = "Passed";
        cardTitle = "Well Done!";
        cardText = "You're almost there!";
        cardBgColor += "info";
    } else if (grade >= 75 && grade <= 79) {
        cardHeader = "Passed";
        cardTitle = "Keep Trying!";
        cardText = "You can improve further!";
        cardBgColor += "warning";
    } else if (grade < 75) {
        cardHeader = "Failed";
        cardTitle = "Don't Give Up!";
        cardText = "Consider reviewing your material.";
        cardBgColor += "danger";
    } else {
        cardHeader = "Invalid";
        cardTitle = "Invalid Grade";
        cardText = "Please enter a valid number.";
        cardBgColor += "dark"
        console.log("Invalid Grade");
    }

    gradeCard.classList.remove(
        "text-bg-primary",
        "text-bg-secondary",
        "text-bg-success",
        "text-bg-info",
        "text-bg-warning",
        "text-bg-danger",
        "text-bg-dark"
    );
    gradeCard.classList.add(cardBgColor);
    gradeCard.getElementsByClassName("card-header")[0].innerHTML = cardHeader;
    gradeCard.getElementsByClassName("card-title")[0].innerHTML = cardTitle;
    gradeCard.getElementsByClassName("card-text")[0].innerHTML = cardText;
};


gradeElement.onchange = (event) => {
   console.log(event);
   const grade = event.target.value;
   gradeEvaluator(grade);
};
