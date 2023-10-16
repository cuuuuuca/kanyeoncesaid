const containerCitacao = document.getElementById('container-citacao');
const textoCitacao = document.getElementById('texto-citacao');
const botaoObterCitacao = document.getElementById('botao-obter-citacao');
const botaoCompartilharTwitter = document.getElementById('botao-compartilhar-twitter');

async function buscarCitacaoKanye() {
    try {
        const response = await fetch('https://api.kanye.rest');
        const data = await response.json();
        const citacao = data.quote;
        textoCitacao.textContent = `"${citacao}"`;


        const tweetText = encodeURIComponent(`"${citacao}" - Ye`);
        const tweetURL = " "; 


        const twitterShareURL = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetURL}`;


        botaoCompartilharTwitter.setAttribute("href", twitterShareURL);


        botaoCompartilharTwitter.style.display = "block";
    } catch (error) {
        console.error('Ocorreu um erro ao buscar a citação:', error);
        textoCitacao.textContent = 'Ocorreu um erro ao buscar a citação.';
    }
}

botaoObterCitacao.addEventListener('click', buscarCitacaoKanye);
