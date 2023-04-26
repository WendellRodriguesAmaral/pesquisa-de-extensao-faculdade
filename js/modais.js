const textoModaisSolucoes = {

    1: 'Aqui entra a solução proposta para o problema 1',
    2:'Aqui entra a solução proposta para o problema 2',
    3: 'Aqui entra a solução proposta para o problema 3'
}

const textoModaisAnalises = {

    1: 'Aqui entra a analise da metodo 1',
    2:'Aqui entra a analise da metodo 2',
    3: 'Aqui entra a analise da metodo 3'
}


function showModal(modal){
    $('.texto-modal').html(textoModaisSolucoes[modal]);
}


function showModalAnalises(modal){
    $('.texto-modal').html(textoModaisAnalises[modal]);
}
