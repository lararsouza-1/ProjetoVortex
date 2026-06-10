let linhaEditando = null;

function abrirCadastro() {
    document.getElementById("modalCliente").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalCliente").style.display = "none";

    linhaEditando = null;

    document.getElementById("tipo").value = "pf";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cpfCnpj").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

document.getElementById("totalClientes").innerHTML = "3";
document.getElementById("ativos").innerHTML = "3";
document.getElementById("pessoas").innerHTML = "2 / 1";

document.getElementById("tabelaClientes").innerHTML =
    "<tr>" +
    "<td>João Silva</td>" +
    "<td>PF</td>" +
    "<td>123.456.789-00</td>" +
    "<td>(34) 99999-1111</td>" +
    "<td>Patos de Minas - MG</td>" +
    "<td>Ativo</td>" +
    "<td><button onclick='editarCliente(this)'>Editar</button> <button onclick='excluirCliente(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>Maria Souza</td>" +
    "<td>PF</td>" +
    "<td>987.654.321-00</td>" +
    "<td>(34) 99999-2222</td>" +
    "<td>Uberlândia - MG</td>" +
    "<td>Ativo</td>" +
    "<td><button onclick='editarCliente(this)'>Editar</button> <button onclick='excluirCliente(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>Empresa XPTO</td>" +
    "<td>PJ</td>" +
    "<td>12.345.678/0001-99</td>" +
    "<td>(34) 3333-4444</td>" +
    "<td>Belo Horizonte - MG</td>" +
    "<td>Ativo</td>" +
    "<td><button onclick='editarCliente(this)'>Editar</button> <button onclick='excluirCliente(this)'>Excluir</button></td>" +
    "</tr>";

function salvarCliente() {

    let tipo = document.getElementById("tipo").value;
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpfCnpj = document.getElementById("cpfCnpj").value;
    let endereco = document.getElementById("endereco").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    let tipoTexto = "";

    if (tipo == "pf") {
        tipoTexto = "PF";
    }

    if (tipo == "pj") {
        tipoTexto = "PJ";
    }

    let enderecoCompleto = cidade + " - " + estado;

    if (nome == "") {
        alert("Digite o nome do cliente!");
        return;
    }

    if (telefone == "") {
        alert("Digite o telefone!");
        return;
    }

    if (cpfCnpj == "") {
        alert("Digite o CPF ou CNPJ!");
        return;
    }

    if (cidade == "") {
        alert("Digite a cidade!");
        return;
    }

    if (estado == "") {
        alert("Digite o estado!");
        return;
    }

    if (linhaEditando != null) {

        linhaEditando.cells[0].innerHTML = nome;
        linhaEditando.cells[1].innerHTML = tipoTexto;
        linhaEditando.cells[2].innerHTML = cpfCnpj;
        linhaEditando.cells[3].innerHTML = telefone;
        linhaEditando.cells[4].innerHTML = enderecoCompleto;
        linhaEditando.cells[5].innerHTML = "Ativo";

        alert("Cliente atualizado com sucesso!");

        fecharModal();

        return;
    }

    document.getElementById("tabelaClientes").innerHTML +=
        "<tr>" +
        "<td>" + nome + "</td>" +
        "<td>" + tipoTexto + "</td>" +
        "<td>" + cpfCnpj + "</td>" +
        "<td>" + telefone + "</td>" +
        "<td>" + enderecoCompleto + "</td>" +
        "<td>Ativo</td>" +
        "<td><button onclick='editarCliente(this)'>Editar</button> <button onclick='excluirCliente(this)'>Excluir</button></td>" +
        "</tr>";

    alert("Cliente cadastrado com sucesso!");

    fecharModal();
}

function editarCliente(botao) {

    linhaEditando = botao.closest("tr");

    document.getElementById("nome").value = linhaEditando.cells[0].innerText;
    document.getElementById("cpfCnpj").value = linhaEditando.cells[2].innerText;
    document.getElementById("telefone").value = linhaEditando.cells[3].innerText;

    let tipo = linhaEditando.cells[1].innerText;

    if (tipo == "PF") {
        document.getElementById("tipo").value = "pf";
    }

    if (tipo == "PJ") {
        document.getElementById("tipo").value = "pj";
    }

    let endereco = linhaEditando.cells[4].innerText;
    let partes = endereco.split(" - ");

    document.getElementById("cidade").value = partes[0];

    if (partes.length > 1) {
        document.getElementById("estado").value = partes[1];
    }

    document.getElementById("modalCliente").style.display = "block";
}

function excluirCliente(botao) {

    let resposta = confirm("Deseja excluir este cliente?");

    if (resposta == true) {
        botao.closest("tr").remove();
        alert("Cliente excluído!");
    }
}

function filtrar() {

    let busca = document.getElementById("busca").value.toLowerCase();

    let linhas = document.getElementById("tabelaClientes").getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {

        let texto = linhas[i].innerText.toLowerCase();

        if (texto.indexOf(busca) > -1) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}