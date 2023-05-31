const textoModaisSolucoes = {

    1: `<br>Como ja dito no resumo do problema encontrado, a maior concentração de reclamações está na Região Sudeste, mais específico no estado de São Paulo, e principalmente é grandes metrópoles como a cidade de São Paulo, Guarulhos, Campinas e outros. <br> 
     Ao analisarmos em conjunto com o segundo gráfico notamos que o maior tipo de reclamação é por 'Produto não recebido' ou seja há um grande problema na logistica de entregas das compras dos clientes. <br> <br>
     Possíveis soluções para este problema:
     <ul>
        <li> - <b>Aumento de centros de distruição das mercadorias a serem entregues, principalmente nas cidades com maior população.</b> <br>
            <small style="margin-left:20px;"> > <i> Ex: Guarulhos possui 1.3 milhão de habitantes, se considerarmos que há entregas todos os dias, e levarmos em consideração os problemas de transporte, a chance de ocorrer algo com ate 90% das entregas é grande. </i></small>
        </li>

        <li> - <b>Implementação de um site/aplicativo próprio afim de dispor da localização em tempo real da mercadoria comprada.</b> <br>
            <small style="margin-left:20px;"> > <i> Inúmeros e-commerces hoje ja possui um aplicativo de rastreamento em tempo real, essa prática entrega muito alem de uma experiência, mas sim a confiança do cliente e seriedade no transporte. </i></small>
        </li>
       
        <li> - <b>Implementar ações de marketing para região específica.</b> <br>
            <small style="margin-left:20px;"> > <i> É possivel implementar um algoritmo que obtenha a localização do cliente enquanto realiza a compra e ofereceR produtos/preços especiais, além de mostrar frases que citem o nome da cidade em questão. Ex:Compre agora e aproveite a promoção exclusica para 'NOME_DA_CIDADE' </i></small>
        </li>

        <li> - <b>Abertura de lojas e franqueados em localizações estratégicas.</b> <br>
            <small style="margin-left:20px;"> > <i> É interessante o estudo geográfico da clientela e abertura e inauguração de lojas (que tambem podem funcionar como pontos de retirar de produtos comprados online) em pontos estratégicos afim de captar e reter seus clientes. Sem contar que passa a impressão que 'existe uma loja em cada esquina'. </i></small>
        </li>

        <li> - <b>Implementação de chats online em tempo real.</b> <br>
            <small style="margin-left:20px;"> > <i> Seria interessante a criação de chats que respondessem em tempo real à clientes que estão aguardando suas compras. Ao enviar um e-mail de confirmação de compra, poderiam enviar um link para um chat que atendesse em horario comercial e respondesse ao que fosse necessario sobre a compra em questão, isso gera mais credibilidade e confiança na empresa. </i></small>
        </li>
     </ul>

     <p>São Paulo é o estado brasileiro mais populoso e possui atualmente mais de 46 milhões de habitantes de acordo com o Censo Demográfico de 2022 divulgada pelo IBGE. Sabendo disso a Cacau Show não se pode dar ao luxo de perder tamanha clientela.</p>
     `,
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
                    
                        <h2 class="mb-4">Concorrente:
                            <u class="text-info">Kopenhagen</u>
                        </h2>
                    </div>

                    <p> 
                    Fundada há 94 anos por um casal de imigrantes da Letônia, a Kopenhagen virou referência quando o assunto é chocolates e doces clássicos. Não por acaso, a primeira loja da marca foi aberta, em 1928, na Rua Oscar Freire, região nobre de São Paulo conhecida e lembrada por conter muitas lojas de luxo.
                    Desde então, a rede se expandiu, principalmente, em regiões de classe média e alta, vendendo diversos doces como chocolates que são mais procurados em datas especiais como Natal e Páscoa.  
                    Hoje é uma das principais (se não a principal) concorrentes da Cacau show, possuindo uma melhor avaliação no site do Reclame Aqui e tendo tambem consideravelmente menos reclamações, sem esquecer que a retorno por parte da empresa é mais rápido e eficiente.
                    </p>
                    
                   

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