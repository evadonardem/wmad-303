const gradeElement = document.getElementById("gradeIS");

const gradeEvaluator = (grade) => {
    let cardHeader;
    let cardTitle;
    let cardText;
    let cardBgColor = "text-bg-";

    if (grade >= 95 && grade <= 99) {
        cardHeader = "PASSED";
        cardTitle = "EXCELLENT GRADE";
        cardText = "EXCELLENT GRADE, You are EXCELLENT!";
        cardBgColor = `${cardBgColor}success`;    
    } else if (grade >= 90 && grade <= 94) {
        cardHeader = "PASSED";
        cardTitle = "AWESOME GRADE";
        cardText = "AWESOME GRADE, You are AWESOME!";
        cardBgColor = `${cardBgColor}success`; 
    } else if (grade >= 85 && grade <= 89) {
        cardHeader = "PASSED";
        cardTitle = "AVERAGE GRADE";
        cardText = "AVERAGE GRADE, You are AVERAGE!";
        cardBgColor = `${cardBgColor}primary`; 
    } else if (grade >= 80 && grade <= 84) {
        cardHeader = "PASSED";
        cardTitle = "GOOD GRADE";
        cardText = "GOOD GRADE, You are GOOD!";
        cardBgColor = `${cardBgColor}info`; 
    } else if (grade >= 75 && grade <= 79) {
        cardHeader = "PASSED";
        cardTitle = "POOR GRADE";
        cardText = "POOR GRADE, You are POOR!";
        cardBgColor = `${cardBgColor}warning`; 
    } else if (grade < 75) {
        cardHeader = "FAILED";
        cardTitle = "BAD GRADE";
        cardText = "BAD GRADE, You are BAD!";
        cardBgColor = `${cardBgColor}danger`; 
    } else {
        cardHeader = "INVALID";
        cardTitle = "INVALID GRADE";
        cardText = "INVALID GRADE";
        cardBgColor = `${cardBgColor}dark`; 
        console.log("INVALID GRADE");
    }
    const gradeCardIS = document.getElementById("gradeCardIS");

    gradeCardIS.classList.remove(
        "text-bg-primary",
        "text-bg-secondary",
        "text-bg-success",
        "text-bg-info",
        "text-bg-warning",
        "text-bg-danger",
        "text-bg-dark"
    );

    console.log(cardBgColor);
    gradeCardIS.classList.add(cardBgColor);
    gradeCardIS.getElementsByClassName("card-header")[0].innerText = cardHeader;
    gradeCardIS.getElementsByClassName("card-title")[0].innerText = cardTitle;
    gradeCardIS.getElementsByClassName("card-text")[0].innerText = cardText;
}

gradeElement.onchange = (event) => {
    const grade = event.target.value;
    gradeEvaluator(grade);
}
