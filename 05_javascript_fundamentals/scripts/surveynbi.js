let tally = [
    { socmed: 'facebook', count: 0 },
    { socmed: 'youtube', count: 0 },
    { socmed: 'instagram', count: 0 },
    { socmed: 'twitter', count: 0 },
    { socmed: 'tiktok', count: 0 },
    { socmed: 'telegram', count: 0 }
];

const socmedOptions = document.querySelectorAll('.socmed-option');

socmedOptions.forEach((option) => { 
    option.onclick = (event) => {
        const socmedSelected = event.target.getAttribute('data-socmed'); // Get the selected socmed
        console.log(socmedSelected);
        const found = tally.find(opt => opt.socmed === socmedSelected);
        if (found) {
            found.count++; // Increment the count if found
        }
    };
});

const generateBtn = document.getElementById('generateResult');
generateBtn.onclick = () => {
    console.log(tally);
    chartGenerator(tally); // Pass the tally to the chart generator
};

const chartGenerator = (data) => {
    const ctx = document.getElementById('surveyResult').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(row => row.socmed),
            datasets: [{
                label: 'Preferred Social Media Survey Result',
                data: data.map(row => row.count),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
};