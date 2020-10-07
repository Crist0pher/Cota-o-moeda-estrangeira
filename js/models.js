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

function High(moeda){
    var valor = document.getElementById('name')
    preco = Number(moeda).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    valor.innerHTML = (preco)
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
   
    document.getElementById("moeda").addEventListener("click",()=>{
        conteudo = document.getElementById("moeda")
        console.log(conteudo.value)
    })

    

}