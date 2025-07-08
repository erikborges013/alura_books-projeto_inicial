const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => botao.addEventListener("click", filtrarLivros))


function filtrarLivros() {
    const elementoBotao = document.getElementById(this.id);
    const categoria = elementoBotao.value;
    let livrosFiltrados = categoria == "disponivel" ? filtrarLivrosPorQuantidade() : filtrarLivrosPorCategorias(categoria)
    exibirOsLivrosNaTela(livrosFiltrados);
    
    if (categoria == "disponivel" || categoria == "front-end" || categoria == "dados" || categoria == "back-end") {
        const valorTotal = calcularValorTotalDosLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
    
}

function filtrarLivrosPorCategorias(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarLivrosPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
            valorTotalDosLivrosDisponiveis.innerHTML = `
            <div class="livros__disponiveis">
          <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>`
    }