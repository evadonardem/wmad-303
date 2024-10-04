// let tally = [0, 0, 0, 0];

// function increment(i){
//     tally[i]++;
//     console.log(tally);
// }

let tally = [0, 0, 0, 0];

document.querySelectorAll('.socmed-option').forEach((option, index) => {
    option.onclick = () => { tally[index]++; console.log(tally); };
});

document.getElementById('generateButton').onclick = () => {
    const data = {
        labels: ['Facebook', 'Instagram', 'TikTok', 'YouTube'],
        datasets: [{
            label: 'Social Media Usage',
            data: tally,
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
            hoverOffset: 4
        }]
    };

    const pb = document.getElementById('myChart').getContext('2d');
    new Chart(pb, { type: 'pie', data });
    document.getElementById('myChart').style.display = 'block';
};
