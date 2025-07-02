let livros = [];
const endpoindDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpoindDaAPI);
    livros = await res.json();
    let livrosComDescontos = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDescontos);
}

