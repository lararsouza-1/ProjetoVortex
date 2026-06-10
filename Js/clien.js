function abrirCadastro() {
    document.getElementById("modalCliente").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalCliente").style.display = "none";
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
    "<td><button onclick='editarCliente()'>Editar</button> <button onclick='excluirCliente(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>Maria Souza</td>" +
    "<td>PF</td>" +
    "<td>987.654.321-00</td>" +
    "<td>(34) 99999-2222</td>" +
    "<td>Uberlândia - MG</td>" +
    "<td>Ativo</td>" +
    "<td><button onclick='editarCliente()'>Editar</button> <button onclick='excluirCliente(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>Empresa XPTO</td>" +
    "<td>PJ</td>" +
    "<td>12.345.678/0001-99</td>" +
    "<td>(34) 3333-4444</td>" +
    "<td>Belo Horizonte - MG</td>" +
    "<td>Ativo</td>" +
    "<td><button onclick='editarCliente()'>Editar</button> <button onclick='excluirCliente(this)'>Excluir</button></td>" +
    "</tr>";

function salvarCliente() {
    let nome = document.getElementById("nome").value;

    if (nome == "") {
        alert("Digite o nome do cliente!");
    } else {
        alert("Cliente cadastrado com sucesso!");
        fecharModal();
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

function editarCliente() {
    alert("Editando cliente.");
}

function excluirCliente(botao) {
    let resposta = confirm("Deseja excluir este cliente?");

    if (resposta == true) {
        botao.parentNode.parentNode.remove();
        alert("Cliente excluído!");
    }
}