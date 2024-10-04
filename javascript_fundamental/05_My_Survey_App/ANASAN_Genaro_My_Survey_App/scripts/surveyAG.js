let tally = [
    { socmed: 'facebook', count: 0 },
    { socmed: 'youtube', count: 0 },
    { socmed: 'instagram', count: 0 },
    { socmed: 'twitter', count: 0 },
];

const socmedOptions = document.querySelectorAll('.socmed-option');

socmedOptions.forEach(option => {
    option.onclick = (event) => {
        const socmedSelected = event.target.getAttribute('data-socmed');
        const selectedSocmed = tally.find(socmed => socmed.socmed === socmedSelected);
        if (selectedSocmed) {
            selectedSocmed.count++;
        }
        console.log(tally);
    };
});

document.getElementById('generateSurvey').addEventListener('click', () => {
    const ctx = document.getElementById('surveyChart').getContext('2d');
    const labels = tally.map(socmed => socmed.socmed.charAt(0).toUpperCase() + socmed.socmed.slice(1));
    const dataCounts = tally.map(socmed => socmed.count);

    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Social Media Preferences',
                data: dataCounts,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(0, 0, 0, 0.5)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    console.log(tally);
});
