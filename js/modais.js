const textoModais = {

    1: 'Aqui entra a solução proposta para o problema 1',
    2:'Aqui entra a solução proposta para o problema 2',
    3: 'Aqui entra a solução proposta para o problema 3'
}


function showModal(modal){
    $('.texto-modal').html(textoModais[modal]);
}