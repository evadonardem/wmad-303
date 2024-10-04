const gradeElement = document.getElementById("gradeSB");

const gradeEvaluator = (grade) => {
    const gradeCard = document.getElementById("gradeCardSB");
    const cardHeader = gradeCard.querySelector(".card-header");
    const cardTitle = gradeCard.querySelector(".card-subtitle");
    const cardText = gradeCard.querySelector(".card-text");

    gradeCard.classList.remove("text-bg-success", "text-bg-info", "text-bg-warning", "text-bg-danger", "text-bg-light");

    if (!grade) {
        cardHeader.innerText = "Awaiting Input";
        cardTitle.innerText = "Please enter a grade";
        cardText.innerText = "Your grade evaluation will appear here once you input a number.";
        gradeCard.classList.add("text-bg-light");
        return;
    }

    const numericGrade = parseFloat(grade);

    if (numericGrade >= 0 && numericGrade < 50) {
        cardHeader.innerText = "Invalid Grade!";
        cardTitle.innerText = "Grades between 0-49 are not valid.";
        cardText.innerText = "Please enter a grade above 49.";
        gradeCard.classList.add("text-bg-light");
        return;
    }

    if (numericGrade >= 95 && numericGrade <= 99) {
        cardHeader.innerText = "Passed";
        cardTitle.innerText = "Excellent";
        cardText.innerText = "Fantastic performance!";
        gradeCard.classList.add("text-bg-success");
    } else if (numericGrade >= 90 && numericGrade <= 94) {
        cardHeader.innerText = "Passed";
        cardTitle.innerText = "Very Good";
        cardText.innerText = "Keep up the great work!";
        gradeCard.classList.add("text-bg-info");
    } else if (numericGrade >= 85 && numericGrade <= 89) {
        cardHeader.innerText = "Passed";
        cardTitle.innerText = "Good";
        cardText.innerText = "Keep pushing!";
        gradeCard.classList.add("text-bg-primary");
    } else if (numericGrade >= 75 && numericGrade <= 84) {
        cardHeader.innerText = "Passed";
        cardTitle.innerText = "Satisfactory";
        cardText.innerText = "Go! Go! Go!";
        gradeCard.classList.add("text-bg-warning");
    } else if (numericGrade < 75) {
        cardHeader.innerText = "Failed";
        cardTitle.innerText = "Needs Improvement";
        cardText.innerText = "Complete your INCs";
        gradeCard.classList.add("text-bg-danger");
    }
};

gradeElement.oninput = (event) => {
    const grade = event.target.value;
    gradeEvaluator(grade);
};