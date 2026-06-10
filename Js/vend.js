function abrirCadastro() {
    document.getElementById("modalVenda").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalVenda").style.display = "none";
}

// CARDS
document.getElementById("totalVendas").innerHTML = "R$ 5.500";
document.getElementById("vendasRealizadas").innerHTML = "3";
document.getElementById("vendasRealizadasTexto").innerHTML = "vendas concluídas";
document.getElementById("ticketMedio").innerHTML = "R$ 1.833";

// TABELA
document.getElementById("tabelaVendas").innerHTML =
    "<tr>" +
    "<td>001</td>" +
    "<td>João Silva</td>" +
    "<td>10/06/2026</td>" +
    "<td>2</td>" +
    "<td>R$ 1.500</td>" +
    "<td>Concluída</td>" +
    "<td><button onclick='editarVenda()'>Editar</button> <button onclick='excluirVenda(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>002</td>" +
    "<td>Maria Souza</td>" +
    "<td>09/06/2026</td>" +
    "<td>1</td>" +
    "<td>R$ 900</td>" +
    "<td>Pendente</td>" +
    "<td><button onclick='editarVenda()'>Editar</button> <button onclick='excluirVenda(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>003</td>" +
    "<td>Empresa XPTO</td>" +
    "<td>08/06/2026</td>" +
    "<td>5</td>" +
    "<td>R$ 3.100</td>" +
    "<td>Concluída</td>" +
    "<td><button onclick='editarVenda()'>Editar</button> <button onclick='excluirVenda(this)'>Excluir</button></td>" +
    "</tr>";

// SALVAR VENDA
function salvarVenda() {
    let cliente = document.getElementById("nome").value;

    if (cliente == "") {
        alert("Digite o nome do cliente!");
    } else {
        alert("Venda cadastrada com sucesso!");
        fecharModal();
    }
}

// FILTRO
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

// AÇÕES
function editarVenda() {
    alert("Editando venda.");
}

function excluirVenda(botao) {
    let confirmar = confirm("Deseja excluir esta venda?");

    if (confirmar == true) {
        botao.parentNode.parentNode.remove();
        alert("Venda excluída!");
    }
}