const gradeElement = document.getElementById("yourGradeMPM");
const gradeCard = document.getElementById("gradeMPM");
const cardHeader = document.getElementById("cardHeader");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");

gradeElement.onchange = (event) => {
    gradeCard.style.display = "block";
    const grade = parseFloat(event.target.value);
    gradeEvaluator(grade);
};

const gradeEvaluator = (grade) => {
    if (grade == 100) {
        cardHeader.textContent = "Wowest";
        cardTitle.textContent = "Passed but Warning";
        cardText.textContent = "This grade is resserved for GOD!";
        gradeCard.className = "card text-bg-success mb-5";
    } else if (grade == 99) {
        cardHeader.textContent = "Excellent";
        cardTitle.textContent = "Passed but Warning";
        cardText.textContent = "This grade is resserved for the Instructor!";
        gradeCard.className = "card text-bg-success mb-5";
    } else if (grade >= 95 && grade <= 98) {
        cardHeader.textContent = "Excellent";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Nice one idol!";
        gradeCard.className = "card text-bg-success mb-5";
    } else if (grade >= 90) {
        cardHeader.textContent = "Great Job";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Konting sipsip pa, aangat na yan!";
        gradeCard.className = "card text-bg-success mb-5";
    } else if (grade >= 75) {
        cardHeader.textContent = "Passed";
        cardTitle.textContent = "Good effort";
        cardText.textContent = "Keep improving!";
        gradeCard.className = "card text-bg-warning mb-5";
    } else if (grade < 75 && grade >= 0) {
        cardHeader.textContent = "Failed";
        cardTitle.textContent = "Needs Improvement";
        cardText.textContent = "Don't give up! Try again.";
        gradeCard.className = "card text-bg-dark mb-5";
    } else {
        cardHeader.textContent = "Invalid Grade";
        cardTitle.textContent = "";
        cardText.textContent = "Please enter a valid grade between 0 and 100.";
        gradeCard.className = "card text-bg-danger mb-5";
    }
};
