let tipoAtual = "receber";

// ABAS
function mostrarAba(aba, botao) {

    document.getElementById("receber").classList.add("oculto");
    document.getElementById("pagar").classList.add("oculto");
    document.getElementById("transacoes").classList.add("oculto");

    document.getElementById(aba).classList.remove("oculto");

    tipoAtual = aba;

    let botoes = document.getElementsByClassName("aba");

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove("ativa");
    }

    botao.classList.add("ativa");
}

// MODAL
function abrirCadastro(tipo) {

    tipoAtual = tipo;

    document.getElementById("modalFinanceiro").style.display = "block";

    if (tipo == "receber") {
        document.getElementById("tituloModal").innerHTML = "Nova Conta a Receber";
    }

    if (tipo == "pagar") {
        document.getElementById("tituloModal").innerHTML = "Nova Conta a Pagar";
    }

    if (tipo == "transacao") {
        document.getElementById("tituloModal").innerHTML = "Nova Transação";
    }
}

function fecharModal() {
    document.getElementById("modalFinanceiro").style.display = "none";
}

// CARDS
document.getElementById("contasReceber").innerHTML = "R$ 8.000,00";
document.getElementById("receberTexto").innerHTML = "5 faturas pendentes";

document.getElementById("contasPagar").innerHTML = "R$ 3.200,00";
document.getElementById("pagarTexto").innerHTML = "3 contas pendentes";

document.getElementById("saldoProjetado").innerHTML = "R$ 4.800,00";

// TABELA RECEBER
document.getElementById("tabelaReceber").innerHTML =
    "<tr>" +
    "<td>Cliente A</td>" +
    "<td>Venda produto</td>" +
    "<td>15/06/2026</td>" +
    "<td>R$ 2.000</td>" +
    "<td><span class='status-pendente'>Aberto</span></td>" +
    "<td>" +
    "<button onclick='receberConta(this)'>Receber</button> " +
    "<button onclick='excluirLinha(this)'>Excluir</button>" +
    "</td>" +
    "</tr>";

// TABELA PAGAR
document.getElementById("tabelaPagar").innerHTML =
    "<tr>" +
    "<td>Fornecedor X</td>" +
    "<td>Compra estoque</td>" +
    "<td>R$ 1.200</td>" +
    "<td>20/06/2026</td>" +
    "<td><span class='status-pendente'>Pendente</span></td>" +
    "<td>" +
    "<button onclick='pagarConta(this)'>Pagar</button> " +
    "<button onclick='excluirLinha(this)'>Excluir</button>" +
    "</td>" +
    "</tr>";

// TABELA TRANSAÇÕES
document.getElementById("tabelaTransacoes").innerHTML =
    "<tr>" +
    "<td>Entrada</td>" +
    "<td>10/06/2026</td>" +
    "<td>Venda produto</td>" +
    "<td>R$ 2.000</td>" +
    "</tr>";

function verificarStatus(data) {

    let hoje = new Date();
    let vencimento = new Date(data);

    hoje.setHours(0, 0, 0, 0);
    vencimento.setHours(0, 0, 0, 0);

    if (vencimento < hoje) {
        return "<span class='status-vencido'>Vencido</span>";
    } else {
        return "<span class='status-pendente'>Aberto</span>";
    }
}

// SALVAR
function salvarConta() {

    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    let vencimento = document.getElementById("vencimento").value;
    let valor = document.getElementById("valor").value;

    if (nome == "") {
        alert("Preencha o nome!");
        return;
    }

    if (descricao == "") {
        alert("Preencha a descrição!");
        return;
    }

    if (vencimento == "") {
        alert("Preencha o vencimento!");
        return;
    }

    if (valor == "") {
        alert("Preencha o valor!");
        return;
    }

    if (tipoAtual == "receber") {

        document.getElementById("tabelaReceber").innerHTML +=
            "<tr>" +
            "<td>" + nome + "</td>" +
            "<td>" + descricao + "</td>" +
            "<td>" + vencimento + "</td>" +
            "<td>R$ " + valor + "</td>" +
            "<td>" + verificarStatus(vencimento) + "</td>" + 
            "<td>" +
            "<button onclick='receberConta(this)'>Receber</button> " +
            "<button onclick='excluirLinha(this)'>Excluir</button>" +
            "</td>" +
            "</tr>";
    }

    if (tipoAtual == "pagar") {

        document.getElementById("tabelaPagar").innerHTML +=
            "<tr>" +
            "<td>" + nome + "</td>" +
            "<td>" + descricao + "</td>" +
            "<td>R$ " + valor + "</td>" +
            "<td>" + vencimento + "</td>" +
            "<td>" + verificarStatus(vencimento) + "</td>" +
            "<td>" +
            "<button onclick='pagarConta(this)'>Pagar</button> " +
            "<button onclick='excluirLinha(this)'>Excluir</button>" +
            "</td>" +
            "</tr>";
    }

    if (tipoAtual == "transacao") {

        document.getElementById("tabelaTransacoes").innerHTML +=
            "<tr>" +
            "<td>Entrada</td>" +
            "<td>" + vencimento + "</td>" +
            "<td>" + descricao + "</td>" +
            "<td>R$ " + valor + "</td>" +
            "</tr>";
    }

    alert("Registro adicionado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("vencimento").value = "";
    document.getElementById("valor").value = "";

    fecharModal();
}

// EXCLUIR
function excluirLinha(botao) {

    let resposta = confirm("Deseja excluir este registro?");

    if (resposta == true) {
        botao.parentNode.parentNode.remove();
    }
}

// RECEBER
function receberConta(botao) {

    let linha = botao.parentNode.parentNode;

    linha.cells[4].innerHTML =
        "<span class='status-pago'>Recebido</span>";

    botao.disabled = true;
    botao.innerHTML = "Recebido";
}

// PAGAR
function pagarConta(botao) {

    let linha = botao.parentNode.parentNode;

    linha.cells[4].innerHTML =
        "<span class='status-pago'>Pago</span>";

    botao.disabled = true;
    botao.innerHTML = "Pago";
}

// FILTRO RECEBER
function filtrarReceber() {

    let busca = document.getElementById("buscaReceber").value.toLowerCase();
    let linhas = document.getElementById("tabelaReceber").getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {

        let texto = linhas[i].innerText.toLowerCase();

        if (texto.indexOf(busca) > -1) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}

// FILTRO PAGAR
function filtrarPagar() {

    let busca = document.getElementById("buscaPagar").value.toLowerCase();
    let linhas = document.getElementById("tabelaPagar").getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {

        let texto = linhas[i].innerText.toLowerCase();

        if (texto.indexOf(busca) > -1) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}

// FILTRO TRANSAÇÕES
function filtrarTransacoes() {

    let busca = document.getElementById("buscaTransacao").value.toLowerCase();
    let linhas = document.getElementById("tabelaTransacoes").getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {

        let texto = linhas[i].innerText.toLowerCase();

        if (texto.indexOf(busca) > -1) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}