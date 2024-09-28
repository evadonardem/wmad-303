
const gradeElement = document.getElementById("gradeKdn");



const gradeEvaluator = (grade) => {

    const gradeCardKdn = document.getElementById("gradeCardKdn");


    let cardHeader;
    let cardTitle;
    let cardText;

    let cardBgColor = "text-bg-";

    if (grade >= 95 && grade <= 99) {
        cardHeader = "Passed"
        cardTitle = "Excellent Grade";
        cardText = "You did Great";
        cardBgColor += "primary";

    } else if (grade >= 90 && grade <= 94) {
        cardHeader = "Passed"
        cardTitle = "Good Grade";
        cardText = "You did Good";
        cardBgColor += "secondary";


    } else if (grade >= 85 && grade <= 89) {
        cardHeader = "Passed"
        cardTitle = "Fair Grade";
        cardText = "You did Okay";
        cardBgColor += "success";


    } else if (grade >= 80 && grade <= 84) {
        cardHeader = "Passed"
        cardTitle = "Average Grade";
        cardText = "Keep up";
        cardBgColor += "info";


    } else if (grade >= 75 && grade <= 84) {
        cardHeader = "Passed"
        cardTitle = "Poor Grade";
        cardText = "You did Poor";
        cardBgColor += "warning";


    } else if (grade < 75) {
        cardHeader = "Failed"
        cardTitle = "Failed Grade";
        cardText = "Drop kan";
        cardBgColor += "danger";


    } else {
        cardHeader = "Invalid"
        console.log("Invalid Grade")
    }

    gradeCardKdn.classList.remove("text-bg-primary", "text-bg-secondary", "text-bg-success", "text-bg-warning", "text-bg-info", "text-bg-danger")
    gradeCardKdn.classList.add(cardBgColor);
    gradeCardKdn.getElementsByClassName("card-header")[0].innerHTML = cardHeader;
    gradeCardKdn.getElementsByClassName("card-title")[0].innerHTML = cardTitle;
    gradeCardKdn.getElementsByClassName("card-text")[0].innerHTML = cardText;
};
gradeElement.onchange = (event) => {
    console.log(event);
    const grade = event.target.value;
    gradeEvaluator(grade);

    //console.log('kevin')
};