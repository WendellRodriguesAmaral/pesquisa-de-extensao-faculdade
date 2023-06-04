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

    2:`<br>
    Uma das maiores reclamações feitas à CacauShow, foi de produtos não recebidos.  Já a menor quantidade de reclamação registrada, foi de produto com defeito.
    Baseando nisso, acreditamos que não haja minilojas, quiosques, franqueados ou até mesmo,um centro de distribuição em um raio de ação de no máximo 100km.
    E pode existir inumeros tipos de fatores que levam ao produto apresentar defeitos: Defeito de fábrica, calor excessivo, embalagem não condicionada, condicionamento do produto abaixo
    ou acima do normal. Pode haver também falha humana: negligência por parte do consumidor ou erro de compra, má fé dos funcionários ou despreparo dos entregadores.
    <br> <br>
    Possíveis soluções para este problema: <br><br>

    <ul>
        <li> - <b>A solução do produto com defeito, seria analisar o produto primeiramente. Fazer uma triagem do produto e verificar se houve falha por parte da empresa ou falha por parte do consumidor.
        </b> <br>
            <small style="margin-left:20px;"> > <i> Posteriormente, fazer uma tratativa com o(a) cliente, a respeito da politica de troca e
            devolução. Pode ser uma devolução do dinheiro, pode ser dado ao cliente um voucher com o valor do produto avariado, ou a troca do outro produto pelo mesmo valor
            ou poderia ser o mesmo produto, só que novo. </i></small>
        </li>
        <br>
        <li> - <b>Outra solução proposta, seria montar minilojas no raio de 10 a 30km dependendo da localidade do estado ou cidade. </b> <br>          
        </li>

        <br>
        <li> - <b>Montar uma modalidade de entregas pelo IFood nos raios de 10 a 30km dependendo da localidade do estado ou cidade.
        </b> <br>          
        </li>

     </ul>
    
    `,

    3: `<br>
    Nos meses de out/nov 2022, o indice de reclamações subiu de 63 reclamações para 798.
Isto, se deve ao fato de haver bastante demanada em relação a data. posteriormente, uma das razões seria a compra em loja fisica ou 
online de panetones, ou kits de natal com chocolate. houve também uma sobrecarga nas demandas em lojas online. consequentemente, há pessoas 
que moram perto dos estabelecimentos ou centros de distribuições, sendo assim, a compra feita online e sendo retirada presencialmente.
por fim.
Fazendo um contraste com o grafico    pode se notar que o maior tipo de reclamação foi por produto não recebido.
    <br> <br>
    Possíveis soluções para este problema: <br><br>

    <ul>
        <li>- <b> Aumento de estoque de produtos em épocas comemorativas com pascoa e natal   </b> <br>
            <small style="margin-left:20px;"> > <i>O aumento de estoque traria mais segurança na produção dos produtos e menos perigo de faltar.  </i></small>
        </li>
        <br>
        <li> - <b>Aumento de funcionários temporários nas datas em questão. </b> <br>      
        <small style="margin-left:20px;"> > <i>É notável os problemas em datas especiais, seria interessante o aumento de mão de obra sabendo do aumento significativo de demanda, poderiam contratar pessoas apenas para tal periodo.  </i></small>
        </li>
    </ul>`
}

const textoModaisAnalises = {

    1: ` <p class="pt-2">Foi desenvolvido um robô que tem como objetivo extrair as reclamações avaliadas de uma determinada empresa do site Reclame Aqui. O robô foi desenvolvido na linguagem Python, o mesmo utiliza a biblioteca "Selenium", que tem como objetivo permitir que o robô interaja com o navegador através dos seletores das páginas, para fazer a extração das informações das reclamações, foi utilizado a biblioteca "Beautiful Soup" que faz o Web Scraping da tela, extraindo o texto do seletor que for passado para ele e, para salvar as informações extraídas, foi utilizado a biblioteca "Pandas", para fazer a leitura do arquivo xlsx  que é onde tem os parâmetro utilizados pelo robô, que são, a URL da página da empresa no Reclame Aqui e o caminho onde será salvo o arquivo csv, também foi utilizado essa biblioteca, para salvar as informações extraídas da reclamação em um arquivo csv.</p>
    <h5>Veja o GIF:</h5>
    <div class="w-100 d-flex align-items-center justify-content-center">
        <img class="w-75 img-fluid rounded-3" src="./gifs/Gif robô em execução.gif" alt="GIF do robô em python rodando">
    </div>`,
    2:` <br>No código de limpeza foi utilizada a biblioteca Pandas, que é uma das principais bibliotecas utilizadas para a manipulação de dados em Python. Ela oferece diversas ferramentas e estruturas de dados para lidar com informações tabulares, como tabelas e planilhas, além de possuir funcionalidades para lidar com dados de diferentes fontes, como arquivos CSV, que foi necessitado no projeto. Com ela foi possível fazer análises, transformações e visualizações de dados de forma eficiente e prática. Também foi importada a ferramenta NLTK (Natural Language Toolkit), que é uma ferramenta de processamento de linguagem natural amplamente utilizada em projetos que envolvem análise de textos. Ela oferece uma série de recursos para trabalhar com textos em diferentes níveis, como tokenização, análise sintática, lematização, entre outros. Além disso, a NLTK também possui um conjunto de stopwords, ou palavras comuns que geralmente não carregam significado relevante para a análise de textos, dessa forma foram removidas aquelas que não teriam utilização relevante. E por fim, com a biblioteca Regex (Regular Expressions), uma ferramenta muito útil para a formatação de cadeias de caracteres, foi possível definir  padrões de texto que puderam ser usados para buscar, substituir e manipular strings de forma simples, como foi o caso para substituir caracteres especiais para espaço vazio.<br>                   
                
    </p>
    <div class="w-100 d-flex justify-content-around flex-wrap p-5 imagens-metodos">
        <img class="w-25 img-fluid" src="./images/metodos/NLTK.png" alt="">
        <img class="img-fluid bg-black w-50"  src="./images/metodos/pandas.svg" alt="">
    </div>

    `,
    3: `<br>Foi desenvolvido um script em Python que através do algoritmo Kmeans, separou as reclamações em grupos através da sua técnica de aprendizado não supervisionado. Posteriormente utilizamos algumas bibliotecas para plotar um gráfico T-SNE que mostra de forma simples os grupos definidos anteriormente. Além disso, também utilizando Python, criamos nuvens de palavras com as palavras mais repetidas em cada um dos grupos, permitindo a criação de vários insights sobre os assuntos mais abordados nas reclamações encontradas.
        <br>
     <a class="m-0 custom-btn mt-3 click-scroll btn ver-grafico" href="#kmeans" onclick="fecharModal()">Ver Gráfico</a>`
}


function fecharModal(){
    $('.btn-close').click()
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
    $('.modal-title').html('Palavras mais repetidas dentre todas as reclamações.');
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



const conteudoGraficoTSNE = {
    0:`<br>
    <h6>Reclamações sobre ovos de páscoa com o produto "ursinhos carinhosos" </h6>
       
    <p>Após análise da nuvem de palavras e das reclamações agrupadas nesse cluster, concluímos que um dos principais assuntos era relativo a compras no período da pascoa, com destaque para o ovo de pascoa com o tema "ursinhos carinhosos".</p>

    <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="img-fluid w-75 mt-5 mb-5" src="./images/grafico t-sne/cluster 0.jpeg" alt="">
    </div>`,

    1:`<br>
    <h6>Reclamações sobre o resgate de benefícios(voucher, pontos) do programa cacau lovers.  </h6>
       
    <p>Após análise da nuvem de palavras e das reclamações agrupadas nesse cluster, concluímos que um dos principais assuntos era relativo a problemas no resgate de benefícios como voucher e pontos obtidos no programa "Cacau Lovers", devido as repetições de palavras como: resgatar, valor, cacau, lover, voucher, ponto.</p>

    <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="img-fluid w-75 mt-5 mb-5" src="./images/grafico t-sne/cluster 1.jpeg" alt="">
    </div>`,

    2:`
    <br>
    <h6>Reclamações sobre produtos entregues em condições ruins(derretidos, mofados...)     </h6>
       
    <p>Após análise da nuvem de palavras e das reclamações agrupadas nesse cluster, concluímos que um dos principais assuntos era relativo a condições de entrega dos produtos comprados pela internet, devido as repetições de palavras como: condições, entrega, derretido, mofo, recebi.</p>

    <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="img-fluid w-75 mt-5 mb-5" src="./images/grafico t-sne/cluster 2.jpeg" alt="">
    </div>`,

    3:`<br>
    <h6> Reclamações sobre atendimento no SAC ou nas lojas.  </h6>
       
    <p>Após análise da nuvem de palavras e das reclamações agrupadas nesse cluster, concluímos que um dos principais assuntos era relativo ao atendimento em lojas físicas ou via SAC, devido as repetições de palavras como: loja, atendimento, sac, site.</p>

    <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="img-fluid w-75 mt-5 mb-5" src="./images/grafico t-sne/cluster 3.jpeg" alt="">
    </div>`,

    4:`<br>
    <h6>Reclamações sobre experiências ruins ao comprar pelo site ou loja física. 
    </h6>
       
    <p>Após análise da nuvem de palavras e das reclamações agrupadas nesse cluster, concluímos que um dos principais assuntos era relativo a experiência de compra, devido as repetições de palavras como: compra, produto, site, loja, atendimento, problema.</p>

    <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="img-fluid w-75 mt-5 mb-5" src="./images/grafico t-sne/cluster 4.jpeg" alt="">
    </div>`,

    5:`<br>
    <h6>Reclamações sobre atraso na entrega de produtos.   </h6>
       
    <p>Após análise da nuvem de palavras e das reclamações agrupadas nesse cluster, concluímos que um dos principais assuntos era relativo a atrasos na entrega de produtos, devido as repetições de palavras como: pedido, compra, entrega, entregue,  não, recebi.</p>

    <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="img-fluid w-75 mt-5 mb-5" src="./images/grafico t-sne/cluster 5.jpeg" alt="">
    </div>`,

    6:`<br>
    <h6> Reclamações sobre problemas de cadastro no programa cacau lovers.  </h6>
       
    <p>Após análise da nuvem de palavras e das reclamações agrupadas nesse cluster, concluímos que um dos principais assuntos era relativo ao cadastro e acesso ao programa "cacau lovers", devido as repetições de palavras como: cacau, lover, senha, email, site, cpf, clico.</p>

    <div class="w-100 d-flex justify-content-center align-items-center">
        <img class="img-fluid w-75 mt-5 mb-5" src="./images/grafico t-sne/cluster 6.jpeg" alt="">
    </div>`,
}

function showModalNuvemPalavrasTSNE(cluster){
    $('.modal-title').html('Cluster ' + cluster);
    $('.texto-modal').html(conteudoGraficoTSNE[cluster]);
}