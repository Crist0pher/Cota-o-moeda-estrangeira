
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

function valorQuinzeDias(moeda){
    //console.log(moeda)
   
   switch(moeda){
   case moeda == 'EUR':
       console.log(ok)
       moeda = 'EUR-BRL'
    break
    case moeda == 'GBW':
       moeda = 'GBP-BRL'
    break
    case moeda == 'ARS':
       moeda = 'ARS-BRL'
    break
    default:
    }
    


    
    ajax1.open('GET', 'https://economia.awesomeapi.com.br/json/daily/' + moeda + '/7');

    ajax1.onreadystatechange = function(){

        var ultimos7dias = Array.prototype.slice.call(JSON.parse(ajax1.responseText))
        
      
        var valores = []

        
        ultimos7dias.forEach(valorAtual => {
         valores.push(valorAtual.ask)
         
         

        });
       
        valores.push(ultimos7dias[0].ask)
        novoGrafico(valores)
         
    }
    ajax1.send()
}

function selectMoeda(){

    var conteudo;
   
    document.getElementById("moeda").addEventListener("change",()=>{
        conteudo = document.getElementById("moeda")
        requisicao(conteudo.value)
        valorQuinzeDias(conteudo.value)

       
    })

    

}