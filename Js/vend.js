let linhaEditando = null;

function abrirCadastro() {
    document.getElementById("modalVenda").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalVenda").style.display = "none";

    linhaEditando = null;

    document.getElementById("nome").value = "";
    document.getElementById("itens").value = "";
    document.getElementById("valorTotal").value = "";
    document.getElementById("status").value = "ativo";
}

document.getElementById("totalVendas").innerHTML = "R$ 5.500";
document.getElementById("vendasRealizadas").innerHTML = "3";
document.getElementById("vendasRealizadasTexto").innerHTML = "vendas concluídas";
document.getElementById("ticketMedio").innerHTML = "R$ 1.833";

document.getElementById("tabelaVendas").innerHTML =
    "<tr>" +
    "<td>001</td>" +
    "<td>João Silva</td>" +
    "<td>10/06/2026</td>" +
    "<td>2</td>" +
    "<td>R$ 1500</td>" +
    "<td>Ativo</td>" +
    "<td><button onclick='editarVenda(this)'>Editar</button> <button onclick='excluirVenda(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>002</td>" +
    "<td>Maria Souza</td>" +
    "<td>09/06/2026</td>" +
    "<td>1</td>" +
    "<td>R$ 900</td>" +
    "<td>Pendente</td>" +
    "<td><button onclick='editarVenda(this)'>Editar</button> <button onclick='excluirVenda(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>003</td>" +
    "<td>Empresa XPTO</td>" +
    "<td>08/06/2026</td>" +
    "<td>5</td>" +
    "<td>R$ 3100</td>" +
    "<td>Ativo</td>" +
    "<td><button onclick='editarVenda(this)'>Editar</button> <button onclick='excluirVenda(this)'>Excluir</button></td>" +
    "</tr>";

function salvarVenda() {

    let cliente = document.getElementById("nome").value;
    let itens = document.getElementById("itens").value;
    let valorTotal = document.getElementById("valorTotal").value;
    let status = document.getElementById("status").value;

    if (cliente == "") {
        alert("Digite o nome do cliente!");
        return;
    }

    if (itens == "") {
        alert("Digite a quantidade de itens!");
        return;
    }

    if (valorTotal == "") {
        alert("Digite o valor total!");
        return;
    }

    if (status == "ativo") {
        status = "Ativo";
    }

    if (status == "inativo") {
        status = "Inativo";
    }

    if (status == "pendente") {
        status = "Pendente";
    }

    if (linhaEditando != null) {

        linhaEditando.cells[1].innerHTML = cliente;
        linhaEditando.cells[3].innerHTML = itens;
        linhaEditando.cells[4].innerHTML = "R$ " + valorTotal;
        linhaEditando.cells[5].innerHTML = status;

        alert("Venda atualizada com sucesso!");

        fecharModal();

        return;
    }

    let numero = document.getElementById("tabelaVendas").getElementsByTagName("tr").length + 1;
    let id = "00" + numero;

    let hoje = new Date();
    let data = hoje.toLocaleDateString("pt-BR");

    document.getElementById("tabelaVendas").innerHTML +=
        "<tr>" +
        "<td>" + id + "</td>" +
        "<td>" + cliente + "</td>" +
        "<td>" + data + "</td>" +
        "<td>" + itens + "</td>" +
        "<td>R$ " + valorTotal + "</td>" +
        "<td>" + status + "</td>" +
        "<td><button onclick='editarVenda(this)'>Editar</button> <button onclick='excluirVenda(this)'>Excluir</button></td>" +
        "</tr>";

    alert("Venda cadastrada com sucesso!");

    fecharModal();
}

function editarVenda(botao) {

    linhaEditando = botao.closest("tr");

    document.getElementById("nome").value = linhaEditando.cells[1].innerText;
    document.getElementById("itens").value = linhaEditando.cells[3].innerText;
    document.getElementById("valorTotal").value = linhaEditando.cells[4].innerText.replace("R$ ", "");

    let status = linhaEditando.cells[5].innerText.toLowerCase();

    if (status == "ativo") {
        document.getElementById("status").value = "ativo";
    }

    if (status == "inativo") {
        document.getElementById("status").value = "inativo";
    }

    if (status == "pendente") {
        document.getElementById("status").value = "pendente";
    }

    document.getElementById("modalVenda").style.display = "block";
}

function excluirVenda(botao) {

    let confirmar = confirm("Deseja excluir esta venda?");

    if (confirmar == true) {
        botao.closest("tr").remove();
        alert("Venda excluída!");
    }
}

function filtrar() {

    let busca = document.getElementById("busca").value.toLowerCase();

    let linhas = document.getElementById("tabelaVendas").getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {

        let texto = linhas[i].innerText.toLowerCase();

        if (texto.indexOf(busca) > -1) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}