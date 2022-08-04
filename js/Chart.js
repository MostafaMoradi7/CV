let myChart = document.getElementById('myChart').getContext('2d');
// Global Options
Chart.defaults.global.defaultFontFamily = 'Muli';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontColor = '#777';


let massPopChart = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Sem 1', 'Sem 2'],
    datasets:[{
      label:'',
      data:[
        3.4,
        3.59
      ],
      backgroundColor:'green',
      backgroundColor:[
        'rgba(179, 208, 95, 1)',
        'rgba(179, 208, 95, 1)'
      ],
      borderWidth:2,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    title:{
      display:true,
      text:'Transcript Chart',
      fontSize:14
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:30,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});
