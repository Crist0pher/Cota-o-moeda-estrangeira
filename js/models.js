

//Arquivo com funções necessárias para a exercuão da aplicação.


// A função requiscao() faz uma request para a API economia.awesomeapi solicitando todas as moedas disponívels e armazena em um vetor,  utiliza 
//o paramentro "moeda" para pesquisar dentro do vetor a moeda solicitada pelo usuário.

let ajax1 = new XMLHttpRequest();


function requisicao(moeda){

    //Cria a requisção via AJAX com a API.
    
    let ajax = new XMLHttpRequest();
    ajax.open('GET','https://economia.awesomeapi.com.br/json/all');
    
    // o metodo abaixo e acionado quando a requisição retorna a resposta.

    ajax.onreadystatechange = function(){
    
        // Recebendo o valor retornado da request e criando um objeto para melhor manipulação
        conteudo = JSON.parse(ajax.responseText)
       
        // o Switch abaixo recebe o paramentro 'moeda' e realiza a busca dentro do objecto conteúdo correto a ser exibido

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
      

        // As funções abaixo são para enviar os valores recebido para o HTML
        ValorCompra(conteudo.ask)
        naAlta(conteudo.high)
        Name(conteudo.name)
        Low(conteudo.low)
        pctChange(conteudo.pctChange)
    }

    ajax.send()
    
 
    }

    // As proximas funções até a linha 92 são responsáveis por atualizar o Html com os valores da requisição

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

// A função abaixo realiza uma request diferente da anterior, nessa é solicitado o histórico da cotação da moeda solicitada nos últimos 7 dias.

function valorQuinzeDias(moeda){
    console.log(moeda)

   switch(moeda){
    case moeda == 'EUR':
        moeda = 'EUR-BRL'
    break;
    
    case moeda == 'GBP':
       moeda = 'GBP-BRL'
    break;

    case moeda == 'ARS':
        moeda = 'ARS-BRL'
    break;
    default:
//        moeda = 'USD-BRL'
    }
    
   
    ajax1.open('GET', 'https://economia.awesomeapi.com.br/json/daily/' + moeda + '/7');
    // Nas próximas linhas o retorno da requisição foi transformado em um array, e em seguida criado um novo array para receber somente os valores necessários
    // e ecanimhar para a função que gera o gráfrico.

    ajax1.onreadystatechange = function(){

        
    
        var ultimos7dias = Array.prototype.slice.call(JSON.parse(ajax1.responseText))
        console.log(ultimos7dias)
        var valores = []

        // ness trecho é criado um array para receber somente os valores da cotação dentro do array de objetos
        ultimos7dias.forEach(valorAtual => {
            valores.push(valorAtual.ask)
        });
       //console.log(valores)

        //console.log(valores)
        // Aqui e feito a chamada para a criação do gráfico, e feita a reversão do array para que os valores fiquem de acordo com o dia.
        novoGrafico(valores.reverse())
         
        }
        ajax1.send()
    }

    // A função SelectMoeda adicionar o evento "change" ao combobox para quando houver alteração realizar novamente a request.

function selectMoeda(){

    var conteudo;
   
    document.getElementById("moeda").addEventListener("change",()=>{
        conteudo = document.getElementById("moeda")
        requisicao(conteudo.value)
        valorQuinzeDias(conteudo.value)
        console.log(conteudo.value)
       
    })

    

}