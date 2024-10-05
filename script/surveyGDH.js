let dataCounts = [0, 0, 0, 0, 0]; // Array for storing the vote counts
const canvas = document.getElementById('surveyChart'); 
let chartInstance, isChartGenerated;

// Function to increment the count when a button is clicked
function increment(index) {
    dataCounts[index]++;
    console.log(dataCounts);
    isChartGenerated ? chartInstance.update() : generateChart(); 
}

// Function to generate the radar chart
function generateChart() {
    const chartData = {
        labels: [
            'Pickup Truck',
            'Ambulance',
            'Tractor',
            'Airplane',
            'Shopping Cart',
        ],
        datasets: [{
            label: 'Vehicle Preferences',
            data: dataCounts,
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
            borderColor: 'rgba(75, 192, 192, 1)', 
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
        }]
    };

    const chartConfig = {
        type: 'radar',
        data: chartData,
        options: {
            elements: {
                line: {
                    borderWidth: 2 
                }
            }
        },
    };

    chartInstance = new Chart(canvas, chartConfig); 
    isChartGenerated = true; 
}
