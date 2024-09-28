const gradeElement = document.getElementById("yourGradejsk");
const gradeCard = document.getElementById("gradejsk");
const cardHeader = document.getElementById("cardHeader");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");

const gradeEvaluator = (grade) => {
    gradeCard.style.display = "block"; 

    if (grade >= 95 && grade <= 100) {
        cardHeader.textContent = "Excellent";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Beautiful";
        gradeCard.className = "card text-bg-success mb-3";
    } else if (grade >= 90) {
        cardHeader.textContent = "Great Job";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Nice";
        gradeCard.className = "card text-bg-primary mb-3";
    } else if (grade >= 75) {
        cardHeader.textContent = "Passed";
        cardTitle.textContent = "Good effort";
        cardText.textContent = "Keep improving!";
        gradeCard.className = "card text-bg-warning mb-3";
    } else if (grade < 75 && grade >= 0) {
        cardHeader.textContent = "Failed";
        cardTitle.textContent = "Needs Improvement";
        cardText.textContent = "Don't give up! Try again.";
        gradeCard.className = "card text-bg-danger mb-3";
    } else {
        cardHeader.textContent = "Invalid Grade";
        cardTitle.textContent = "";
        cardText.textContent = "Please enter a valid grade between 0 and 100.";
        gradeCard.className = "card text-bg-dark mb-3";
    }
};

gradeElement.onchange = (event) => {
    const grade = parseFloat(event.target.value);
    gradeEvaluator(grade);
};
