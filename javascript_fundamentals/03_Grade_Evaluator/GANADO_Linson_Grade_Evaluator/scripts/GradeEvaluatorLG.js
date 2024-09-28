const gradeElement = document.getElementById("yourGradeLG");
const gradeCard = document.getElementById("gradeLG");
const cardHeader = document.getElementById("cardHeader");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");

const gradeEvaluator = (grade) => {
    if (grade >= 95 && grade <= 100) {
        cardHeader.textContent = "Excellent";
        cardTitle.textContent = "Passed";
        cardText.textContent = "You are Bless!";
        gradeCard.className = "card border-success mb-5";
    } else if (grade >= 90) {
        cardHeader.textContent = "Great Job";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Pasado ba!";
        gradeCard.className = "card border-success mb-5";
    } else if (grade >= 75) {
        cardHeader.textContent = "Passed";
        cardTitle.textContent = "Good effort";
        cardText.textContent = "Pwede na!";
        gradeCard.className = "card border-warning mb-5";
    } else if (grade < 75 && grade >= 0) {
        cardHeader.textContent = "Failed";
        cardTitle.textContent = "Needs Improvement";
        cardText.textContent = "Don't give up! your Teammate can still recall you!";
        gradeCard.className = "card border-danger mb-5";
    } else {
        cardHeader.textContent = "Invalid Grade";
        cardTitle.textContent = "";
        cardText.textContent = "Please enter a valid grade between 0 and 100.";
        gradeCard.className = "card border-secondary mb-5";
    }
};

gradeElement.onchange = (event) => {
    const grade = parseFloat(event.target.value);
    gradeEvaluator(grade);
};