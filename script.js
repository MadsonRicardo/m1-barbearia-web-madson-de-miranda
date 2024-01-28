const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {


    for (let i = 0; i < barbearia.cortes.length; i++){

        if (id === barbearia.cortes[i].id) {
            return barbearia.cortes[i]
        } 

    } 

    return 'Corte não encontrado'

}

function buscaBarbaPorId(id) {

    for (let i = 0; i < barbearia.barbas.length; i++){

        if (id === barbearia.barbas[i].id) {
            return barbearia.barbas[i]
        } 

    } 

    return 'Barba não encontrada'

}


function verificaStatusBarbearia() {

    if (barbearia.estaAberto) {
        return 'Estamos abertos'
    }

    return 'Estamos fechados.'

}

function retornaTodosCortes() {

    return barbearia.cortes;

}


function retornaTodasBarbas() {

    return barbearia.barbas;

}

function criaPedido(nomeCliente, corteId, barbaId) {

  let barba = buscaBarbaPorId(barbaId).tipo;
  let cabelo = buscaCortePorId(corteId).tipo;
  let precoCabelo = barbearia.cortes[corteId - 1].valor;
  let precoBarba = barbearia.barbas[barbaId - 1].valor;
  let pedido = {

    nome: nomeCliente,
    pedidoCorte: cabelo,
    pedidoCortePreco: precoCabelo,
    pedidoBarba: barba,
    pedidoBarbaPreco: precoBarba,

  }

  return pedido;

}

function atualizarServico(lista, id, valor, tipo) {

    if (lista === barbearia.cortes) {

        barbearia.cortes[id - 1].tipo = tipo;
        barbearia.cortes[id - 1].valor = valor;

        return barbearia.cortes;

    } else {

        barbearia.barbas[id - 1].tipo = tipo;
        barbearia.barbas[id - 1].valor = valor;

        return barbearia.barbas;

    }

}

function calculaTotal(pedido) {

    let totalPedido = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;

    return totalPedido;

}
  
