
function novoGrafico(valor){

var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['-6','-5', '-4', '-3', '-2', '-1', '0'],
          datasets: [{
              label: 'Valor',
              data: valor,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
           
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                  
              ],
              
              borderWidth: 6
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}