const textoModaisSolucoes = {

    1: 'Aqui entra a solução proposta para o problema 1',
    2:'Aqui entra a solução proposta para o problema 2',
    3: 'Aqui entra a solução proposta para o problema 3'
}

const textoModaisAnalises = {

    1: ` <p class="pt-2">Foi desenvolvido um robô que tem como objetivo extrair as reclamações avaliadas de uma determinada empresa do site Reclame Aqui. O robô foi desenvolvido na linguagem Python, o mesmo utiliza a biblioteca "Selenium", que tem como objetivo permitir que o robô interaja com o navegador através dos seletores das páginas, para fazer a extração das informações das reclamações, foi utilizado a biblioteca "Beautiful Soup" que faz o Web Scraping da tela, extraindo o texto do seletor que for passado para ele e, para salvar as informações extraídas, foi utilizado a biblioteca "Pandas", para fazer a leitura do arquivo xlsx  que é onde tem os parâmetro utilizados pelo robô, que são, a URL da página da empresa no Reclame Aqui e o caminho onde será salvo o arquivo csv, também foi utilizado essa biblioteca, para salvar as informações extraídas da reclamação em um arquivo csv.</p>
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
