document.addEventListener("DOMContentLoaded", function() {
    const gradeElement = document.getElementById('grade');

    const gradeEvaluator = (grade) => {
        const gradeCard = document.getElementById("gradeCardDhm");
        let cardHeader;
        let cardTitle;
        let cardText;
        let cardBgColor = "text-bg-"; 

        if (grade >= 95 && grade <= 100) {
            cardHeader = "Passed";
            cardTitle = "Outstanding Performance!";
            cardText = "You've done an excellent job!";
            cardBgColor += "primary"; 
        } 
        else if (grade >= 90 && grade <= 94) {
            cardHeader = "Passed";
            cardTitle = "Great Job!";
            cardText = "You scored very well!";
            cardBgColor += "primary"; 
        } 
        else if (grade >= 85 && grade <= 89) {
            cardHeader = "Passed";
            cardTitle = "Good Work!";
            cardText = "You are on the right track!";
            cardBgColor += "success"; 
        }
        else if (grade >= 80 && grade <= 84) {
            cardHeader = "Passed";
            cardTitle = "Well Done!";
            cardText = "Keep up the good effort!";
            cardBgColor += "warning";
        }
        else if (grade >= 75 && grade <= 79) {
            cardHeader = "Passed";
            cardTitle = "Almost There!";
            cardText = "A bit more effort can make a difference!";
            cardBgColor += "secondary";
        } 
        else if (grade < 75 && grade >= 50) {
            cardHeader = "Failed";
            cardTitle = "Needs Improvement";
            cardText = "SheesH Skill Issue!";
            cardBgColor += "danger";
        } 
        else {
            cardHeader = "Invalid!";
            cardTitle = "Invalid Grade!";
            cardText = "Please enter a valid grade between 50 and 100.";
            cardBgColor += "dark"; 
        }

        gradeCard.classList.remove(
            "text-bg-primary",
            "text-bg-secondary",
            "text-bg-danger",
            "text-bg-warning",
            "text-bg-success",
            "text-bg-light",
            "text-bg-dark"
        );

        gradeCard.classList.add(cardBgColor);
        gradeCard.getElementsByClassName("card-header")[0].innerText = cardHeader;
        gradeCard.getElementsByClassName("card-title")[0].innerText = cardTitle;
        gradeCard.getElementsByClassName("card-text")[0].innerText = cardText;
    };

    gradeElement.addEventListener("input", (event) => {
        const grade = parseInt(event.target.value);
        if (!isNaN(grade) && grade >= 50 && grade <= 100) {
            gradeEvaluator(grade); 
        } else {
            gradeEvaluator(-1); 
        }
    });
});
