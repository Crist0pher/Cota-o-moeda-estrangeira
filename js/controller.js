let ajax = new XMLHttpRequest();
let ajax1 = new XMLHttpRequest();


var moeda = 'USD-BRL'
var conteudo = []

ajax.open('GET','https://economia.awesomeapi.com.br/all/' + moeda);

ajax.onreadystatechange = function(){

    conteudo = JSON.parse(ajax.responseText)
   
    ValorCompra(conteudo.USD.bid)
    naAlta(conteudo.USD.high)
    Name(conteudo.USD.name)
    Low(conteudo.USD.low)
    
    pctChange(conteudo.USD.pctChange)

   

   // console.log(conteudo.USD.bid.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
}
ajax.send()

valorQuinzeDias()
selectMoeda()