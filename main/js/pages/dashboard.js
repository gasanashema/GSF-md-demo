//[Dashboard Javascript]

//Project:	Oral Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
    chart: {
    type: 'bar',
    height: 244,
    toolbar:{
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 4,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    show: false,
    title: {
      text: '$ (thousands)'
    }
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left', 
  },
  fill: {
    opacity: 1
  },
  grid: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#appointment-chart"), options);
  chart.render();



  var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
    chart: {
    type: 'line',
    height: 244,
    toolbar:{
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    show: false,
    title: {
      text: '$ (thousands)'
    }
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left', 
  },
  fill: {
    opacity: 1
  },
  grid: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#appointment-chart-2"), options);
  chart.render();



  var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }],
    chart: {
    type: 'area',
    height: 244,
    toolbar:{
      show: false,
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 4,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    show: false,
    title: {
      text: '$ (thousands)'
    }
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left', 
  },
  fill: {
    opacity: 1
  },
  grid: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#appointment-chart-3"), options);
  chart.render();








var dom = document.getElementById('treatments-chart');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: 15,
    top: 95,
  },
  series: [
    {
      colors:["#3E97FF","#F1416C","#50CD89","#FFC700"],
      name: 'Access From',
      type: 'pie',
      radius: ['35%', '70%'],
      center: ['31.5%', '50%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 38, name: 'Root Canal' },
        { value: 22, name: 'Wisdom Tooth' },
        { value: 30, name: 'Bleaching' },
        { value: 8, name: 'Others' },,
      ]
    }
  ]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);



// // LINE CHART
//   var line = new Morris.Line({
//     element: 'line-chart',
//     resize: true,
//     data: [
//       {y: '2024 Q1', data1: 40},
//       {y: '2024 Q2', data1: 50},
//       {y: '2024 Q3', data1: 45},
//       {y: '2024 Q4', data1: 60},
//       {y: '2024 Q1', data1: 50},
//       {y: '2024 Q2', data1: 70},
//     ],
//     xkey: 'y',
//     ykeys: ['data1'],
//     labels: ['Data 1'],
//     gridLineColor: '#eef0f2',
//     lineColors: ['#0bb2d4'],
//     lineWidth: 1,
//     hideHover: 'auto'
//   });


  var analyticsBarChartOptions = {
    chart: {
      height: 114,
      type: 'line',
      stacked: true,
      toolbar: {
      show: false
      }
    },
    plotOptions: {
      bar: {
      horizontal: false,
      columnWidth: '60%',
      borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#3E97FF', '#cce5ff'],
    series: [{
      name: 'Success',
      data: [40, 50, 45, 65, 50, 70, 90]
    }],
    grid: {
      show: true,
      strokeDashArray: 5,
    },
    markers: {
      size: 4
    },
    stroke: {
      width: 3
    },
    xaxis: {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      axisBorder: {
      show: false
      },
      axisTicks: {
      show: false
      },
      labels: {
        show: false,
      style: {
        colors: '#333333'
      }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 2,
      labels: {
      style: {
        color: '#333333'
      }
      }
    },
    legend: {
      show: false, 
    },
    }

    var analyticsBarChart = new ApexCharts(
    document.querySelector("#line-chart"),
    analyticsBarChartOptions
    );

    analyticsBarChart.render();