let valorTotal;
limpar();

function adicionar() {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidadeProdutos = document.getElementById('quantidade').value;

    let preco = quantidadeProdutos * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProdutos}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

    valorTotal = valorTotal + preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 0;
};

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
};