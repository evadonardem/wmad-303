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
  
 let barChart, pieChart; 
  
 generateBtn.onclick = () => { 
     console.log(tally); 
     chartGenerator(tally); 
 }; 
  
 const chartGenerator = (data) => { 
     // Destroy previous charts if they exist 
     if (barChart) { 
         barChart.destroy(); 
     } 
     if (pieChart) { 
         pieChart.destroy(); 
     } 
  
     // Bar Chart 
     barChart = new Chart( 
         document.getElementById('surveyBarResult'), 
         { 
             type: 'bar', 
             data: { 
                 labels: data.map(row => row.socmed), 
                 datasets: [ 
                     { 
                         label: 'Preferred Social Media Survey Result', 
                         data: data.map(row => row.count), 
                         backgroundColor: [ 
                             'rgba(0, 123, 255, 0.5)', 
                             'rgba(255, 0, 0, 0.5)', 
                             'rgba(255, 193, 7, 0.5)', 
                             'rgba(40, 167, 69, 0.5)' 
                         ], 
                         borderColor: [ 
                             'rgba(0, 123, 255, 1)', 
                             'rgba(255, 0, 0, 1)', 
                             'rgba(255, 193, 7, 1)', 
                             'rgba(40, 167, 69, 1)' 
                         ], 
                         borderWidth: 5 
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
  
     // Pie Chart 
     pieChart = new Chart( 
         document.getElementById('surveyPieResult'), 
         { 
             type: 'pie', 
             data: { 
                 labels: data.map(row => row.socmed), 
                 datasets: [ 
                     { 
                         label: 'Preferred Social Media Survey Result', 
                         data: data.map(row => row.count), 
                         backgroundColor: [ 
                             'rgba(0, 123, 255, 0.5)', 
                             'rgba(255, 0, 0, 0.5)', 
                             'rgba(255, 193, 7, 0.5)', 
                             'rgba(40, 167, 69, 0.5)' 
                         ] 
                     } 
                 ] 
             } 
         } 
     ); 
 };

