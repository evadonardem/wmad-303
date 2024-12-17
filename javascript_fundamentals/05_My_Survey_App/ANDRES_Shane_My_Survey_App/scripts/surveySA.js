let tally = [
    { socmed: "Facebook", count: 0 },
    { socmed: "Instagram", count: 0 },
    { socmed: "Tiktok", count: 0 },
    { socmed: "YouTube", count: 0 },
];

const socmedOptions = document.querySelectorAll(".socmed-option");

socmedOptions.forEach((option) => {
    option.onclick = (event) => {
      const socmedSelected = event.target.getAttribute("data-socmed");
      const selectedOption = tally.find((opt) => opt.socmed.toLowerCase() === socmedSelected.toLowerCase());
      
      if (selectedOption) {
        selectedOption.count++;
      }
      
      console.log(tally);
    };
});

const showResults = document.getElementById("show-results");
showResults.onclick = () => {
  chartGenerator(tally);
};

const chartGenerator = (data) => {
      new Chart(
        document.getElementById('surveyResult1'),
        {
          type: 'pie',
          data: {
            labels: data.map(row => row.socmed),
            datasets: [
              {
                label: 'Social Media Apps',
                data: data.map(row => row.count),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 205, 86, 0.9)',
                    'rgba(201, 203, 207, 0.9)',
                    'rgba(255, 99, 132, 0.9)',
                  ],
                  borderColor: [
                    'rgba(54, 162, 235)',
                    'rgba(255, 205, 86)',
                    'rgba(201, 203, 207)',
                    'rgba(255, 99, 132)',
                  ],
                  borderWidth: 1
              }
            ]
          }
        }
      );

      new Chart(
        document.getElementById('surveyResult2'),
        {
          type: 'bar',
          data: {
            labels: data.map(row => row.socmed),
            datasets: [
              {
                label: 'Social Media Apps',
                data: data.map(row => row.count),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 205, 86, 0.9)',
                    'rgba(201, 203, 207, 0.9)',
                    'rgba(255, 99, 132, 0.9)',
                  ],
                  borderColor: [
                    'rgba(54, 162, 235)',
                    'rgba(255, 205, 86)',
                    'rgba(201, 203, 207)',
                    'rgba(255, 99, 132)',
                  ],
                  borderWidth: 1
              }
            ]
          }
        }
      );
};

