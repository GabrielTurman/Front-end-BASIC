function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(quantidade);
    } if (tipo.value == 'inferior') {
        comprarInferior(quantidade);
    } if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponivel para tipo Pista!!');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!!');

    }
};

function comprarInferior(qtd) {
    let qtdCadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdCadeiraInferior) {
        alert('Quantidade indisponivel para tipo Cadeira Inferior!!');
    } else {
        qtdCadeiraInferior = qtdCadeiraInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdCadeiraInferior;
        alert('Compra realizada com sucesso');
    }
};

function comprarSuperior(qtd) {
    let qtdCadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdCadeiraSuperior) {
        alert('Quantidade indisponivel para tipo Cadeira Superior');
    } else {
        qtdCadeiraSuperior = qtdCadeiraSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdCadeiraSuperior;
        alert('Compra realizada com sucesso');
    }
};