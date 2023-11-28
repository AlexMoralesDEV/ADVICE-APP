const botao = document.querySelector('#carregar');
const token = '';

botao.addEventListener('click', async (e) => {
    let dados = await chamarUrl();
    exibirDados(dados);
})

async function chamarUrl(){
    let url = 'https://api.adviceslip.com/advice'

    let requisicao = await fetch(url);
    let resposta = await requisicao.json();
    
    return resposta;
}

function exibirDados(dados){
    const conselho = document.querySelector('#conselho');
    conselho.innerHTML = dados.slip.advice
}