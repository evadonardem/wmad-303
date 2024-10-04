let tally = [
    {socmed: 'Youtube', count: 0},
    {socmed: 'Instagram', count: 0},
    {socmed: 'Facebook', count: 0},
    {socmed: 'Tiktok', count: 0}
];

const socmedOptions = document.querySelectorAll(".socmed-option");

socmedOptions.forEach((option) => {
    option.onclick = (event) => {
        const socmedSelected = event.target.getAttribute("data-socmed");
        const found = tally.find((opt) => opt.socmed.toLowerCase() === socmedSelected.toLowerCase());
        if (found) {
            found.count++;
            console.log(tally);
        }
    };
});

const showResults = document.getElementById("show-results");
showResults.onclick = () => {
    chartGenerator();
};

const chartGenerator = () => {
    const ctx = document.getElementById('surveyResult').getContext('2d');

    // Destroy existing chart if it exists to avoid memory leaks
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tally.map(row => row.socmed),
            datasets: [
                {
                    label: 'Social Media',
                    data: tally.map(row => row.count),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};