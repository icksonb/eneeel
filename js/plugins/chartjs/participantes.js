//Sampel Pie Doughnut Chart
var PieDoughnutChartSampleData = [
    {
        value: 100,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Fizeram check-in"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Não fizeram check-in"
    },
]

 window.onload = function() {


  window.DoughnutChartSample = new Chart(document.getElementById("doughnut-chart-sample").getContext("2d")).Pie(PieDoughnutChartSampleData,{
   responsive:true
  });
  

 };
 