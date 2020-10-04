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