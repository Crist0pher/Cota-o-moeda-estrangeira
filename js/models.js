
function requisicao(moeda){
    let ajax = new XMLHttpRequest();
    ajax.open('GET','https://economia.awesomeapi.com.br/json/all');
    
    ajax.onreadystatechange = function(){
    
        conteudo = JSON.parse(ajax.responseText)
       
        switch(moeda){
            case 'USD':
            conteudo = conteudo.USD
            break;
            case 'EUR':
            conteudo = conteudo.EUR
            break;
            case 'GBP':
            conteudo = conteudo.GBP
            break;
            case 'ARS':
            conteudo = conteudo.ARS
            break;
            default:
               conteudo = conteudo.USD
        }
      
        ValorCompra(conteudo.ask)
        naAlta(conteudo.high)
        Name(conteudo.name)
        Low(conteudo.low)
        pctChange(conteudo.pctChange)
       // console.log(conteudo.USD.bid.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    }
    ajax.send()
    
 
    }


function ValorCompra(moeda){

    var valor = document.getElementById('compra')
    
    preco = Number(moeda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    valor.innerHTML = (preco)

}

function naAlta(moeda){
    var valor = document.getElementById('High')

    preco = Number(moeda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    valor.innerHTML = (preco)
}

function Name(moeda){
    var valor = document.getElementById('name')
   
    valor.innerHTML = (moeda)
}


function Low(moeda){
    var valor = document.getElementById('low')
    preco = Number(moeda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    valor.innerHTML = (preco)
}

function pctChange(moeda){
    var valor = document.getElementById('pctChange')
  
    valor.innerHTML = (moeda)
}

function valorQuinzeDias(){

    
    ajax1.open('GET','https://economia.awesomeapi.com.br/json/daily/USD-BRL/7');

    ajax1.onreadystatechange = function(){

        var cincoDias = Array.prototype.slice.call(JSON.parse(ajax1.responseText))
        //console.log(dias)
        var valores = []
      
        
        cincoDias.forEach(valorAtual => {
         valores.push(valorAtual.ask)
         
         });
         novoGrafico(valores)
         
    }
    ajax1.send()
}

function selectMoeda(){

    var conteudo;
   
    document.getElementById("moeda").addEventListener("change",()=>{
        conteudo = document.getElementById("moeda")
        requisicao(conteudo.value)

        console.log(conteudo.value)
        console.log(typeof(conteudo))
    })

    

}