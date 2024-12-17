const gradeElement = document.getElementById('gradeDhm');

const gradeEvaluator = (grade) => {
    const gradeCard = document.getElementById("gradeCardDhm");

    let cardHeader;
    let cardTitle;
    let cardText;

    let cardBgColor = "text-bg-";

    if (grade >= 95 && grade <= 99) {
        cardHeader = "Passed";
        cardTitle = "Outstanding Performance!";
        cardText = "You've done an excellent job!";
        cardBgColor += "primary";
    } 
    else if(grade >= 90 && grade <= 99) {
        cardHeader = "Passed";
        cardTitle = "Great Job!";
        cardText = "You scored very well!";
        cardBgColor += "primary";
    } 
    else if(grade >= 85 && grade <= 89) {
        cardHeader = "Passed";
        cardTitle = "Good Work!";
        cardText = "You are on the right track!";
        cardBgColor += "success";
    }
    else if(grade >= 80 && grade <= 84) {
        cardHeader = "Passed";
        cardTitle = "Well Done!";
        cardText = "Keep up the good effort!";
        cardBgColor += "secondary";
    }
    else if(grade >= 75 && grade <= 79) {
        cardHeader = "Passed";
        cardTitle = "Almost There!";
        cardText = "A bit more effort can make a difference!";
        cardBgColor += "secondary";
    } 
    else if(grade < 75 && grade > 50) {
        cardHeader = "Failed";
        cardTitle = "Needs Improvement";
        cardText = "Don't get discouraged, keep trying!";
        cardBgColor += "danger";
    } 
    else{
        cardHeader = "Invalid!";
        cardTitle = "Invalid Grade!";
        cardText = "Please enter a valid grade between 50 and 100.";
        cardBgColor += "warning";
        console.log("Invalid Grade!");
    }

    gradeCard.classList.remove(
        "text-bg-primary",
        "text-bg-secondary",
        "text-bg-danger",
        "text-bg-warning"
    );

    gradeCard.classList.add(
        cardBgColor
    );
    gradeCard.getElementsByClassName("card-header")[0].innerText = cardHeader;
    gradeCard.getElementsByClassName("card-title")[0].innerText = cardTitle;
    gradeCard.getElementsByClassName("card-text")[0].innerText = cardText;

}

gradeElement.onchange = (event) => {
    const grade = event.target.value;
    gradeEvaluator(grade);
}

