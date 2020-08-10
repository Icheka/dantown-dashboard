/*...
* Doughnut chart on dashboard page
...*/

    var ctxD = document.getElementById("doughnutChart").getContext('2d');
    var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
        //add labels that will show up on the doughnut chart
    labels: ["", "", "", "", ""],
    datasets: [{
    data: [300, 50, 100, 40, 120],
        //these are bg colors for the different sections on the chart
    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        //and these are bg colors on hover
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
    },
    options: {
    responsive: true
    }
    });
