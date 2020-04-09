$(document).ready(function () {
    var myChart = echarts.init(document.getElementById('main'));
    // specify chart configuration item and data

    var cost_amounts = document.getElementsByName("cost_amount");
    var cost_dates = document.getElementsByName("cost_date");

    var cost_amounts_arr = [];
    var the_dates_arr = [];

    cost_amounts.forEach((the_cost) => {
        cost_amounts_arr.push(parseFloat(the_cost.innerText));
    });
    cost_dates.forEach((the_date) => {
        the_dates_arr.push(the_date.innerText);
    });

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
