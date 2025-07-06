let botaoOrdenar = document.getElementById("btnOrdenarPorPreco");

botaoOrdenar.addEventListener("click", metodoOrdenar);

function metodoOrdenar() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}