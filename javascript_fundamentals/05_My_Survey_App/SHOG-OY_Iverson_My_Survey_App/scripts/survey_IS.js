let tally = [
    { operate: "Windows", count: 0 },
    { operate: "Apple", count: 0 },
    { operate: "Ubuntu", count: 0 },
    { operate: "Redhat", count: 0 }
];

const operateButtons = document.querySelectorAll('.operate');
operateButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        const operateType = event.currentTarget.getAttribute('data-operate');
        console.log(`You selected: ${operateType}`);
        tally[index].count++;
        console.log(tally);
    });
});

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', () => {
    let results = 'Tally Results:\n';
    tally.forEach(item => {
        results += `${item.operate}: ${item.count}\n`;
    });
    updateChart();
});

const ctx = document.getElementById('acquisitions').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: tally.map(item => item.operate),
        datasets: [{
            label: 'Tally Result',
            data: tally.map(item => item.count),
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
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

function updateChart() {
    myChart.data.datasets[0].data = tally.map(item => item.count);
    myChart.update();
}