let tally = [
    { socmed: 'facebook', count: 0 },
    { socmed: 'youtube', count: 0 },
    { socmed: 'instagram', count: 0 },
    { socmed: 'twitter', count: 0 }
];

const socmedOptions = document.querySelectorAll('.socmed-option');

socmedOptions.forEach((option) => {
    option.onclick = (event) => {
        const socmedSelected = event.currentTarget.getAttribute('data-socmed');
        tally.find((opt) => opt.socmed === socmedSelected).count++;
    };
});

const generateBtn = document.getElementById('generateResult');

let chart; // Declare a variable to hold the chart instance

generateBtn.onclick = () => {
    console.log(tally);
    chartGenerator(tally);
};

const chartGenerator = (data) => {
    // Destroy the previous chart if it exists
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(
        document.getElementById('surveyResult'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.socmed),
                datasets: [
                    {
                        label: 'Preferred Social Media Survey Result',
                        data: data.map(row => row.count),
                        backgroundColor: [
                            'rgba(0, 123, 255, 0.5)', // Blue for Facebook
                            'rgba(255, 0, 0, 0.5)',   // Red for YouTube
                            'rgba(255, 193, 7, 0.5)', // Yellow for Instagram
                            'rgba(40, 167, 69, 0.5)'  // Green for Twitter
                        ],
                        borderColor: [
                            'rgba(0, 123, 255, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 193, 7, 1)',
                            'rgba(40, 167, 69, 1)'
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
        }
    );
};