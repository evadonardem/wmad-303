const gradeElement = document.getElementById('gradeRb');

const gradeEvaluator = (grade) => {
    const gradeCard = document.getElementById("gradeCardRb");

    let cardHeader;
    let cardTitle;
    let cardText;

    let cardBgColor = "text-bg-";

    if (grade >= 95 && grade <= 99) {
        cardHeader = "Passed";
        cardTitle = "Musta ngay cum laude";
        cardText = "You've done an excellent job!";
        cardBgColor += "primary";
    } 
    else if(grade >= 90 && grade <= 99) {
        cardHeader = "Passed";
        cardTitle = "Dean Lister!";
        cardText = "You scored very well!";
        cardBgColor += "success";
    } 
    else if(grade >= 85 && grade <= 89) {
        cardHeader = "Passed";
        cardTitle = "Mayat Grade mo";
        cardText = "You are on the right track!";
        cardBgColor += "success";
    }
    else if(grade >= 80 && grade <= 84) {
        cardHeader = "Passed";
        cardTitle = "Atleast Haan bagsak";
        cardText = "Keep up the good effort!";
        cardBgColor += "secondary";
    }
    else if(grade >= 75 && grade <= 79) {
        cardHeader = "Passed";
        cardTitle = "Agtaytayyun ka bossing";
        cardText = "A bit more effort can make a difference!";
        cardBgColor += "secondary";
    } 
    else if(grade < 75 && grade > 50) {
        cardHeader = "Failed";
        cardTitle = "Aysus";
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
    gradeCard.getElementsByClassName("card-title")[0].innerText = cardHeader;
    gradeCard.getElementsByClassName("card-text")[0].innerText = cardHeader;

}

gradeElement.onchange = (event) => {
    const grade = event.target.value;
    gradeEvaluator(grade);
}

