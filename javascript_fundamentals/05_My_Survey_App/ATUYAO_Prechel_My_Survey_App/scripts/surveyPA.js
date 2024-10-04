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
                            'rgba(59, 89, 152, 0.5)', // Facebook
                            'rgba(255, 0, 0, 0.5)', // YouTube
                            'rgba(193, 53, 132, 0.5)', // Instagram
                            'rgba(29, 161, 242, 0.5)', // Twitter
                        ],
                        borderColor: [
                            'rgba(59, 89, 152, 1)', // Facebook
                            'rgba(255, 0, 0, 1)', // YouTube
                            'rgba(193, 53, 132, 1)', // Instagram
                            'rgba(29, 161, 242, 1)', // Twitter
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
}