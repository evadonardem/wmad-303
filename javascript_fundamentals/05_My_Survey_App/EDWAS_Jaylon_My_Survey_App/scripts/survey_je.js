let tally = [0, 0, 0, 0];
const buttons = document.querySelectorAll('[data-socmed]');

buttons.forEach((button, index) => {
    button.onclick = (event) => {
        console.log(event.target.dataset.socmed);
        tally[index]++;
        console.log(tally);
    };
});

document.getElementById('generateResult').onclick = () => {
    console.log("Results:");
    console.log("Facebook clicks: " + tally[0]);
    console.log("Google clicks: " + tally[1]);
    console.log("Instagram clicks: " + tally[2]);
    console.log("YouTube clicks: " + tally[3]);

   
    const ctx = document.getElementById('acquisitions').getContext('2d');


    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Facebook', 'Google', 'Instagram', 'YouTube'],
            datasets: [{
                label: 'Clicks',
                data: tally,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });
};
