let d = [0, 0, 0, 0, 0];
const ctx = document.getElementById('mc');
let c, e;

function increment(i) {
    d[i]++;
    console.log(d);
    e ? c.update() : generateChart();
}


function generateChart() {
    const data = {
        labels: [
            'Pickup',
            'Ambulance',
            'Tractor',
            'Airplane',
            'Cart',
        ],
        datasets: [{
            label: 'Choice of the People',
            data: d,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };

    c = new Chart(ctx, config);
    e = true;
}
