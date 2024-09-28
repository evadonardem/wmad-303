 const gradeElement = document.getElementById("gradeCard");
        const cardHeader = document.getElementById("cardHeader");
        const cardTitle = document.getElementById("cardTitle");
        const cardText = document.getElementById("cardText");

        const gradeEvaluator = (grade) => {
            let cardHeaderText, cardClass;

            if (grade >= 95) {
                cardHeaderText = "Passed";
                cardClass = "bg-primary"; 
            } else if (grade >= 75) {
                cardHeaderText = "Passed";
                cardClass = "bg-primary"; 
            } else if (grade < 75) {
                cardHeaderText = "Failed";
                cardClass = "bg-warning"; 
            } else {
                cardHeaderText = "Invalid!";
                cardClass = "bg-success";
                console.log("Invalid Grade!");
            }

            
            gradeElement.className = `card text-white mb-3 ${cardClass}`;
            cardHeader.innerText = cardHeaderText;
            cardTitle.innerText = "Grade Status";
            cardText.innerText = (cardHeaderText === "Invalid!") ? "Please enter a valid grade." : 
                (cardHeaderText === "Failed") ? "Unfortunately, you failed." : "Congratulations, you passed!";
        };

        const gradeInput = document.getElementById("gradeInput");
        gradeInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const grade = parseInt(gradeInput.value);
                gradeEvaluator(grade);
            }
        });