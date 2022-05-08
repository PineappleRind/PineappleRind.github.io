let charts = {
    genderChart: {
        type: 'pie',
        data: {
            labels: ['Female', 'Male', 'Other'],
            datasets: [{
                label: 'Gender',
                data: ['38.68', '31.13', '30.19'],
                backgroundColor: [
                    'rgb(255,0,120)',
                    'rgb(0,0,255)',
                    'rgb(120,0,255)'
                ],

            }]
        },
        options: {
            responsive: false,
            datasets: {
                pie: {
                    cutout: '50%'
                }
            }, plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.formattedValue + '%'
                        }
                    }
                }
            }
        }
    }, subsChart: {
        type: 'bar',
        data: {
            labels: ['2020', '2021', '2022'],
            datasets: [{
                label: 'Submissions',
                data: [63, 70, 114],
                backgroundColor: [
                    'rgb(0,120,255)'
                ]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }, followerChart: {
        type: 'line',
        data: {
            labels: ['2020','2021', '2022'],

            datasets: [{
                label: "Average followers",
                data: [306.5, 653, 612],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                fill: 'rgb(75, 192, 192)'
            }]
        }
    }
}