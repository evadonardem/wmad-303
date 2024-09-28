const gradeElement = document.getElementById("gradeJta");
const gradeCard = document.getElementById("gradeCardJta");

const gradeEvaluator = (grade) => {
    let cardHeader;
    let cardTitle;
    let cardText;
    let cardBgColor = ""; 

    if (grade >= 95 && grade <= 100) {
        cardHeader = "Passed";
        cardTitle = "Excellent!";
        cardText = "Great job! Keep up the good work.";
        cardBgColor = "bg-primary";
    } else if (grade >= 90 && grade <= 94) {
        cardHeader = "Passed";
        cardTitle = "Very Good!";
        cardText = "Well done! You're doing great.";
        cardBgColor = '$(cardBgColor)-secondary'; 
    } else if (grade >= 85 && grade <= 89) {
        cardHeader = "Passed";
        cardTitle = "Good!";
        cardText = "Nice effort!";
        cardBgColor = "bg-success"; 
    } else if (grade >= 80 && grade <= 84) {
        cardHeader = "Passed";
        cardTitle = "Satisfactory";
        cardText = "You did well.";
        cardBgColor = "bg-success"; 
    } else if (grade >= 75 && grade <= 79) {
        cardHeader = "Passed";
        cardTitle = "Just Passed";
        cardText = "You can improve!";
        cardBgColor = "bg-warning"; 
    } else if (grade < 75) {
        cardHeader = "Failed";
        cardTitle = "Try Again";
        cardText = "Don't be discouraged. Keep studying!";
        cardBgColor = "bg-danger"; 
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



