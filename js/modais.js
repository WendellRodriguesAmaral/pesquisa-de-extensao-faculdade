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

function showModalNuvemPalavras(){
    $('.modal-title').html('Palavras mais repetidas.');
    $('.texto-modal').html(`<div class="w-100 d-flex">
        <div >
            <b class="ps-5 m-0 text-center">Títulos</b>
            <img class="img-fluid" src="./images/nuvem de palavras/titulo.jpeg" alt="">
        </div>
        <div >
            <b class="ps-5 m-0">Descrição</b>
            <img class="img-fluid" src="./images/nuvem de palavras/descricao.jpeg" alt="">
        </div>
    </div>`);
   

}



function showModalConcorrente(){

    $('.modal-title').html('Sobre o concorrente ');
    $('.texto-modal').html(`
    <section class="about " >
        <div class="container">
            <div class="row"> 
                
                <div class="col-lg-7 col-12">

                    <div class="col-lg-10 col-12">
                        <h5 class="m-0">Principal</h5>
                        <h2 class="mb-4">Concorrente:
                            <u class="text-info">Kopenhagen</u>
                        </h2>
                    </div>

                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nemo neque rerum iste. Quasi blanditiis numquam, voluptas facere velit dolorum temporibus, rerum beatae id animi itaque cum sequi nesciunt possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolores quia maxime ad error nisi repellat natus aliquam, harum, sequi eius magnam reprehenderit provident laborum recusandae. Culpa incidunt rerum saepe.</p>
                    
                   

                    <a class="custom-btn btn custom-link mt-3" href="https://www.reclameaqui.com.br/empresa/kopenhagen-loja-online/lista-reclamacoes/" target="_blank">
                    Reclame aqui <i class="bi bi-box-arrow-up-right ms-2"></i>
                        </a>

                </div>

                <div class="col-lg-5 col-12 mt-5 mt-lg-0 d-flex justify-content-center align-items-start">
                        <figure>
                            <img src="images/reputação concorrente/Screenshot.png"
                            class="schedule-image img-fluid" alt="">
                            <figcaption>Print tirado em 26/05/2023</figcaption>
                        </figure>                
                </div>        
            </div>
        </div>
    </section>
`);


}