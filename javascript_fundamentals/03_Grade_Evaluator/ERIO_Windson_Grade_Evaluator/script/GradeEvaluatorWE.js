const gradeElement = document.getElementById("gradeWE");
const gradeCard = document.getElementById("gradeCardWE");

const gradeEvaluator = (grade) => {
    let cardHeader;
    let cardTitle;
    let cardText;
    let cardBgColor = "text-bg-"; 

    if (grade >= 95 && grade <= 100) {
        cardHeader = "Passed";
        cardTitle = "Excellent!";
        cardText = "Great job! Keep up the good work.";
        cardBgColor += "primary"; 
    } else if (grade >= 90 && grade <= 94) {
        cardHeader = "Passed";
        cardTitle = "Very Good!";
        cardText = "Well done! You're doing great.";
        cardBgColor += "primary"; 
    } else if (grade >= 85 && grade <= 89) {
        cardHeader = "Passed";
        cardTitle = "Good!";
        cardText = "Nice effort!";
        cardBgColor += "success"; 
    } else if (grade >= 80 && grade <= 84) {
        cardHeader = "Passed";
        cardTitle = "Satisfactory";
        cardText = "You did well.";
        cardBgColor += "success"; 
    } else if (grade >= 75 && grade <= 79) {
        cardHeader = "Passed";
        cardTitle = "Just Passed";
        cardText = "You can improve!";
        cardBgColor += "warning"; 
    } else if (grade < 75) {
        cardHeader = "Failed";
        cardTitle = "Try Again";
        cardText = "Don't be discouraged. Keep studying!";
        cardBgColor += "danger"; 
    } else {
        cardHeader = "Invalid";
        cardTitle = "Invalid Grade";
        cardText = "Please enter a valid grade (0-100).";
        console.log("Invalid Grade!");
    }

    gradeCard.className = "card " + cardBgColor; 
    gradeCard.getElementsByClassName("card-header")[0].innerText = cardHeader;
    gradeCard.getElementsByClassName("card-title")[0].innerText = cardTitle;
    gradeCard.getElementsByClassName("card-text")[0].innerText = cardText;
};

gradeElement.onchange = (event) => {
    const grade = parseInt(event.target.value);
    if (!isNaN(grade)) { 
        gradeEvaluator(grade);
    } else {
        console.log("Invalid Grade!");
    }
};

