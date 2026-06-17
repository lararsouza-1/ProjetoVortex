var modalProduto = document.getElementById("modalProduto");
var tabelaEstoque = document.getElementById("tabelaEstoque");

function abrirModal() {
    modalProduto.style.display = "flex";
}

function fecharModal() {
    modalProduto.style.display = "none";
}

function salvarProduto() {
    var nome = document.getElementById("nomeProduto").value;
    var preco = document.getElementById("precoProduto").value;
    var estoque = document.getElementById("estoqueProduto").value;

    tabelaEstoque.innerHTML +=
        "<tr>" +
        "<td>" + nome + "</td>" +
        "<td>00 dias</td>" +
        "<td>" + estoque + " un</td>" +
        "<td>R$ " + preco + "</td>" +
        "</tr>";

    fecharModal();
}