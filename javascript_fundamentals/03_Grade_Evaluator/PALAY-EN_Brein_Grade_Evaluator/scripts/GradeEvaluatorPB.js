const gradeElement = document.getElementById("yourGradePb");
const gradeCard = document.getElementById("gradePb");
const cardHeader = document.getElementById("cardHeader");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");

const gradeEvaluator = (grade) => {
    if (grade >= 95 && grade <= 100) {
        cardHeader.textContent = "Excellent";
        cardTitle.textContent = "Passed";
        cardText.textContent = "KAlalaingan kan unay apo!";
        gradeCard.className = "card border-success mb-5";
    } else if (grade >= 90) {
        cardHeader.textContent = "Great Job";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Nalaing naka pasa kan!";
        gradeCard.className = "card border-success mb-5";
    } else if (grade >= 75) {
        cardHeader.textContent = "Passed";
        cardTitle.textContent = "Good effort";
        cardText.textContent = "Keep improving!";
        gradeCard.className = "card border-warning text-bg-warning mb-5";
    } else if (grade < 75 && grade >= 0) {
        cardHeader.textContent = "Failed";
        cardTitle.textContent = "Needs Improvement";
        cardText.textContent = "Don't give up! Try again.";
        gradeCard.className = "card text-bg-dark mb-5";
    } else {
        cardHeader.textContent = "Invalid Grade";
        cardTitle.textContent = "";
        cardText.textContent = "Please enter a valid grade between 0 and 100.";
        gradeCard.className = "card border-secondary text-bg-danger mb-5";
    }
};

gradeElement.onchange = (event) => {
    const grade = parseFloat(event.target.value);
    gradeEvaluator(grade);
};
