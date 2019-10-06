if ($('#clicks-circle').length) {
    $('#clicks-circle').circleProgress({
        value: 0.1,    /* It should be from 0.0 to 1.0 */
        startAngle: (Math.PI/2),
        size: 129,
        thickness: 5,
        fill: {
            color: '#12ee8e'
        },
        emptyFill: '#f1f1f1',
    });
}

if ($('#ecpm-circle').length) {
    $('#ecpm-circle').circleProgress({
        value: 0.6,    /* It should be from 0.0 to 1.0 */
        startAngle: (Math.PI/2),
        size: 129,
        thickness: 5,
        fill: {
            color: '#ff5781'
        },
        emptyFill: '#f1f1f1',
    });
}

if ($('#conversion-circle').length) {
    $('#conversion-circle').circleProgress({
        value: 0.3,    /* It should be from 0.0 to 1.0 */
        startAngle: (Math.PI/2),
        size: 129,
        thickness: 5,
        fill: {
            color: '#ffc700'
        },
        emptyFill: '#f1f1f1',
    });
}

if ($('#rate-circle').length) {
    $('#rate-circle').circleProgress({
        value: 0.8,    /* It should be from 0.0 to 1.0 */
        startAngle: (Math.PI/2),
        size: 129,
        thickness: 5,
        fill: {
            color: '#2dc0e8'
        },
        emptyFill: '#f1f1f1',
    });
}

if ($('#earnings-circle').length) {
    $('#earnings-circle').circleProgress({
        value: 1,    /* It should be from 0.0 to 1.0 */
        startAngle: (Math.PI/2),
        size: 129,
        thickness: 5,
        fill: {
            color: '#92c46b'
        },
        emptyFill: '#f1f1f1',
    });
}


var mainStatisticsChart = document.getElementById("myChart");
if (mainStatisticsChart){
    var ctx = mainStatisticsChart.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["29.07", "30.07", "31.07", "1.08", "2.08", "3.08", "4.08", "5.08", "6.08", "7.08", "8.08", "9.08", "10.08", "11.08"],
            datasets: [{
                label: '1',
                data: [0, 2, 1, 0.8, 2, 3, 2, 1, 3, 0, 2, 1, 3, 2],
                backgroundColor: [
                    'rgba(45, 192, 232, 0.8)',
                ],
                pointRadius: 0,
            },
            {
                label: '2',
                data: [1, 2, 0, 2.1, 1, 2, 1, 1.5, 2, 0.6, 1, 2, 1, 2.5],
                backgroundColor: [
                    'rgba(255, 199, 0, 0.8)',
                ],
                pointRadius: 0,
            },
            {
                label: '3',
                data: [2, 1, 1.2, 2.1, 1.3, 2, 1, 1.5, 0, 4, 2, 1.9, 1, 2],
                backgroundColor: [
                    'rgba(255, 87, 129, 0.8)',
                ],
                pointRadius: 0,
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        callback: function(value, index, values) {
                            return '€' + value;
                        }
                    }
                }],
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            },
            elements: {
                point: {
                    pointStyle: false
                }
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    });
}

var firstLineStatisticsChart = document.getElementById("myChart2");
if (firstLineStatisticsChart) {
    var ctx2 = firstLineStatisticsChart.getContext('2d');
    var myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["29.07", "30.07", "31.07", "1.08", "2.08", "3.08"],
            datasets: [{
                label: 'Chart 2',
                data: [3, 0, 2, 1, 3, 2],
                backgroundColor: [
                    'rgba(0, 188, 128, 1)',
                ],
                borderColor: [
                    'rgba(18, 238, 142, 1)',
                ],
                pointRadius: 8,
                pointHoverRadius: 8,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        suggestedMin: 0,
                        suggestedMax: 10,
                        callback: function (value, index, values) {
                            return '€' + value;
                        },
                        stepSize: 2
                    }
                }],
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            },
            elements: {
                point: {
                    pointStyle: false
                },
                line: {
                    tension: 0, // disables bezier curves
                }
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return false;
                    },
                    label: function (tooltipItem) {
                        return "€" + Number(tooltipItem.yLabel);
                    },
                    labelColor: function (tooltipItem, ctx2) {
                        return {
                            borderColor: 'rgb(0, 255, 0)',
                            backgroundColor: 'rgb(0, 255, 0)'
                        }
                    },
                    labelTextColor: function (tooltipItem, ctx2) {
                        return '#ffffff';
                    }
                },
                yPadding: 10,
                xPadding: 20,
                backgroundColor: 'rgba(0, 188, 128, 1)',
            }
        }
    });
}

var secondLineStatisticsChart = document.getElementById("myChart3");
if (secondLineStatisticsChart) {
    var ctx3 = secondLineStatisticsChart.getContext('2d');
    var myChart3 = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ["29.07", "30.07", "31.07", "1.08", "2.08", "3.08"],
            datasets: [{
                label: 'Chart 3',
                data: [2, 3, 2, 1, 3, 0],
                backgroundColor: [
                    'rgba(87, 205, 237, 1)',
                ],
                borderColor: [
                    'rgba(45, 192, 232, 1)',
                ],
                pointRadius: 8,
                pointHoverRadius: 8,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        suggestedMin: 0,
                        suggestedMax: 10,
                        callback: function (value, index, values) {
                            return '€' + value;
                        },
                        stepSize: 2
                    }
                }],
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            },
            elements: {
                point: {
                    pointStyle: false
                },
                line: {
                    tension: 0,
                }
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    title: function (tooltipItem, data) {
                        return false;
                    },
                    label: function (tooltipItem) {
                        return "€" + Number(tooltipItem.yLabel);
                    },
                    labelColor: function (tooltipItem, ctx3) {
                        return {
                            borderColor: 'rgb(0, 0, 255)',
                            backgroundColor: 'rgb(0, 0, 255)'
                        }
                    },
                    labelTextColor: function (tooltipItem, ctx3) {
                        return '#ffffff';
                    }
                },
                yPadding: 10,
                xPadding: 20,
                backgroundColor: 'rgba(87, 205, 237, 1)',
            }
        }
    });
}

if ($(".nano").length) {
    $(".nano").nanoScroller();
}


if ($('#imgInp').length && $('#form-image img').length) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $('#form-image img').attr('src', e.target.result);
    };

    function readURL(input) {
        if (input.files && input.files[0]) {
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
        readURL(this);
    });
}
