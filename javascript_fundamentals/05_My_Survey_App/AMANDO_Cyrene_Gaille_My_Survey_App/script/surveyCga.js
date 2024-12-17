let tally = [
    { socmed: 'facebook', count: 0, color: 'rgba(59, 89, 152, 0.2)', borderColor: 'rgba(59, 89, 152, 1)' },
    { socmed: 'youtube', count: 0, color: 'rgba(255, 0, 0, 0.2)', borderColor: 'rgba(255, 0, 0, 1)' },
    { socmed: 'instagram', count: 0, color: 'rgba(225, 48, 108, 0.2)', borderColor: 'rgba(225, 48, 108, 1)' },
    { socmed: 'twitter', count: 0, color: 'rgba(29, 161, 242, 0.2)', borderColor: 'rgba(29, 161, 242, 1)' }
];

const socmedOptions = document.querySelectorAll('.socmed-option');
let chart; 


socmedOptions.forEach((option) => {
    option.onclick = (event) => {
        const socmedSelected = event.target.getAttribute('data-socmed');
        
     
        const socmed = tally.find((opt) => opt.socmed === socmedSelected);
        if (socmed) {
            socmed.count++;
        }
        
        console.log(tally);
        updateChart(); 
    };
});


const updateChart = () => {
    const data = tally.map(item => ({
        socmed: item.socmed,
        count: item.count,
        color: item.color,
        borderColor: item.borderColor
    }));
    
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
                        label: 'Acquisitions by Social Media',
                        data: data.map(row => row.count),
                        backgroundColor: data.map(row => row.color),
                        borderColor: data.map(row => row.borderColor),
                        borderWidth: 1,
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    );
};


const generateBtn = document.getElementById('generateResult');
generateBtn.onclick = updateChart; 