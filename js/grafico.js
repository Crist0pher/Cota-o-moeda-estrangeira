
// Para a geração do gráfico foi utilizado a biblioteca Char.js.


function novoGrafico(valor){
    var dia = new Date
    var dias = []
    

    for (var i = 6; i >= 0; i --) {

        dias.push(dia.getDate()-i)
        console.log(i)
        
    }
var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',

      data: {
          labels: dias,
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