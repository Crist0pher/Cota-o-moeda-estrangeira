
function novoGrafico(valor){

var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',

      data: {
          labels: ['-6','-5', '-4', '-3', '-2', '-1', '0'],
          datasets: [{
              label: 'Histórico dos últimos 7 dias',
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
                      beginAtZero: false,
                      
                  }
              }],
              
          }
      }
  });
}