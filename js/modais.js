const textoModaisSolucoes = {

    1: 'Aqui entra a solução proposta para o problema 1',
    2:'Aqui entra a solução proposta para o problema 2',
    3: 'Aqui entra a solução proposta para o problema 3'
}

const textoModaisAnalises = {

    1: ` <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et ipsam impedit sit adipisci vel, voluptas laudantium perspiciatis exercitationem odit. Possimus ducimus quae, natus corporis illum eius distinctio. At, quia!</p>
    <h5>Veja o GIF:</h5>
    <div class="w-100 d-flex align-items-center justify-content-center">
        <img class="w-75 img-fluid rounded-3" src="./gifs/Gif robô em execução.gif" alt="GIF do robô em python rodando">
    </div>`,
    2:'Aqui entra a analise da metodo 2',
    3: 'Aqui entra a analise da metodo 3'
}


function showModal(modal){
    
    $('.modal-title').html('Solução Proposta');
    $('.texto-modal').html(textoModaisSolucoes[modal]);
}


function showModalAnalises(modal){
    $('.modal-title').html('Método/Processo');
    $('.texto-modal').html(textoModaisAnalises[modal]);
}
