$(document).ready(function () {
    var myChart = echarts.init(document.getElementById('main'));
    // specify chart configuration item and data

    var cost_amounts = document.getElementsByName("cost_amount");
    var cost_dates = document.getElementsByName("cost_date");

    var the_arr = {};

    for (var i =0 ;i ++ ; i < cost_amounts.length){
            the_arr[cost_dates[i].innerText] = 0;
    }
    for (var i =0 ;i ++ ; i < cost_amounts.length){
        the_arr[cost_dates[i].innerText] += parseFloat(cost_amounts[i].innerText);
    }

    var the_dates_arr = Object.keys(the_arr);
    var cost_amounts_arr = Object.keys(the_arr);

    // function to sum previous value to current value
    var cost_amounts_arr_total = [...cost_amounts_arr].map((curr, i, array) => {
        return array[i] += array[i - 1] ? array[i - 1] : 0
    });

    cost_amounts_arr = cost_amounts_arr.map(function(each_element){
        return Number(each_element.toFixed(2));
    });

    cost_amounts_arr_total = cost_amounts_arr_total.map(function(each_element){
        return Number(each_element.toFixed(2));
    });

    var option = {
        title: {
            text: 'Cost Chart'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['expenses', 'expenses_total']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: the_dates_arr
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'expenses',
                type: 'line',
                data: cost_amounts_arr
                },
            {
                name: 'expenses_total',
                type: 'line',
                data: cost_amounts_arr_total
                },
            ]
    };

    document.getElementById("total").innerText = cost_amounts_arr_total[cost_amounts_arr_total.length-1];
    // use configuration item and data specified to show chart
    myChart.setOption(option);
});
