const gradeElement = document.getElementById("yourGradeCT");
const gradeCard = document.getElementById("gradeCT");
const cardHeader = document.getElementById("cardHeader");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");

const gradeEvaluator = (grade) => {
    // Clear previous classes
    gradeCard.className = "card mb-5";

    if (grade >= 95 && grade <= 100) {
        cardHeader.textContent = "Excellent";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Masyado kang magaling";
        gradeCard.classList.add("border-success");
    } else if (grade >= 90 && grade <= 94) {
        cardHeader.textContent = "Great Job";
        cardTitle.textContent = "Passed";
        cardText.textContent = "Mataas na Grado";
        gradeCard.classList.add("border-success");
    } else if (grade >= 85  && grade <= 89) {
        cardHeader.textContent = "Passed";
        cardTitle.textContent = "Good effort";
        cardText.textContent = "Ok nayan";
        gradeCard.classList.add("border-warning");
    } else if (grade >= 80  && grade <= 84) {
        cardHeader.textContent = "Passed";
        cardTitle.textContent = "Good effort";
        cardText.textContent = "Pasado Parin";
        gradeCard.classList.add("border-warning");
    } else if (grade < 75 && grade >= 0) {
        cardHeader.textContent = "Failed";
        cardTitle.textContent = "Needs Improvement";
        cardText.textContent = "Nakow Nanganganib Grado MO";
        gradeCard.classList.add("border-danger");
        gradeCard.classList.add("bg-danger"); // Add red background
        gradeCard.classList.add("text-white"); // Change text color to white
    } else {
        cardHeader.textContent = "Invalid Grade";
        cardTitle.textContent = "";
        cardText.textContent = "Please enter a valid grade between 0 and 100.";
        gradeCard.classList.add("border-secondary");
    }
};

gradeElement.onchange = (event) => {
    const grade = parseFloat(event.target.value);
    gradeEvaluator(grade);
};
