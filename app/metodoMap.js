const desconto = 0.3;

function aplicarDesconto(livros) {
    livrosComDescontos = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    });
    return livrosComDescontos;
}