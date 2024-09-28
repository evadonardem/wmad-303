function displayCard(grade) {
    let cardClass = '';
    let message = '';
    let imageUrl = '';

    if (grade >= 95 && grade <= 98) {
        cardClass = 'bg-success text-white';
        message = 'Great job! You’ve passed.';
        imageUrl = 'images/passed.jpg'; 
    } else if (grade >= 85 && grade <= 89) {
        cardClass = 'bg-info text-white';
        message = 'Good job, you’re doing fine.';
        imageUrl = 'images/Goodjob.jpg';
    } else if (grade >= 75 && grade <= 84) {
        cardClass = 'bg-warning text-dark';
        message = 'Good job bro!!';
        imageUrl = 'images/good.jpg'; 
    } else if (grade === 74) {
        cardClass = 'bg-danger text-white';
        message = ' Failed!!!!';
        imageUrl = 'images/failed.jpg'; 
    } else {
        return; 
    }

    const cardDiv = `
        <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" alt="Grade Image">
            <div class="card-body ${cardClass}">
                <p class="card-text">${message}</p>
            </div>
        </div>
    `;

    document.getElementById('cardContainer').innerHTML = cardDiv;
}

function checkGrade() {
    const grade = parseInt(document.getElementById('formGroupExampleInput2').value);
    if (!isNaN(grade)) {
        displayCard(grade);
    } else {
        alert("Please enter a valid grade.");
    }
}
