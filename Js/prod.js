let linhaEditando = null;

function abrirCadastro() {
    document.getElementById("modalProduto").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalProduto").style.display = "none";

    linhaEditando = null;

    document.getElementById("nome").value = "";
    document.getElementById("sku").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("custo").value = "";
    document.getElementById("estoque").value = "";
    document.getElementById("min").value = "";
}

document.getElementById("totalProdutos").innerHTML = "3";
document.getElementById("ativosTexto").innerHTML = "3 ativos";

document.getElementById("estoqueBaixo").innerHTML = "1";
document.getElementById("baixoTexto").innerHTML = "1 produto em alerta";

document.getElementById("valorEstoque").innerHTML = "R$ 2500";
document.getElementById("totalTexto").innerHTML = "valor total";

document.getElementById("categorias").innerHTML = "2";
document.getElementById("categoriasTexto").innerHTML = "2 categorias ativas";

document.getElementById("filtroCategoria").innerHTML =
    "<option value=''>Todos</option>" +
    "<option value='Periféricos'>Periféricos</option>" +
    "<option value='Monitores'>Monitores</option>";

document.getElementById("tabelaProdutos").innerHTML =
    "<tr>" +
    "<td>001</td>" +
    "<td>Mouse Gamer</td>" +
    "<td>Periféricos</td>" +
    "<td>R$ 150</td>" +
    "<td>R$ 90</td>" +
    "<td>40%</td>" +
    "<td>10</td>" +
    "<td><span class='status-ativo'>Ativo</span></td>" +
    "<td><button onclick='editarProduto(this)'>Editar</button> <button onclick='excluirProduto(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>002</td>" +
    "<td>Teclado Mecânico</td>" +
    "<td>Periféricos</td>" +
    "<td>R$ 300</td>" +
    "<td>R$ 180</td>" +
    "<td>40%</td>" +
    "<td>2</td>" +
    "<td><span class='status-baixo'>Baixo</span></td>" +
    "<td><button onclick='editarProduto(this)'>Editar</button> <button onclick='excluirProduto(this)'>Excluir</button></td>" +
    "</tr>" +

    "<tr>" +
    "<td>003</td>" +
    "<td>Monitor 24</td>" +
    "<td>Monitores</td>" +
    "<td>R$ 900</td>" +
    "<td>R$ 700</td>" +
    "<td>22%</td>" +
    "<td>5</td>" +
    "<td><span class='status-ativo'>Ativo</span></td>" +
    "<td><button onclick='editarProduto(this)'>Editar</button> <button onclick='excluirProduto(this)'>Excluir</button></td>" +
    "</tr>";

function salvarProduto() {

    let nome = document.getElementById("nome").value;
    let sku = document.getElementById("sku").value;
    let desc = document.getElementById("desc").value;
    let categoria = document.getElementById("categoria").value;
    let preco = document.getElementById("preco").value;
    let custo = document.getElementById("custo").value;
    let estoque = document.getElementById("estoque").value;

    if (nome == "") {
        alert("Digite o nome do produto!");
        return;
    }

    if (sku == "") {
        alert("Digite o SKU!");
        return;
    }

    if (categoria == "") {
        alert("Digite a categoria!");
        return;
    }

    if (preco == "") {
        alert("Digite o preço!");
        return;
    }

    if (custo == "") {
        alert("Digite o custo!");
        return;
    }

    if (estoque == "") {
        alert("Digite a quantidade em estoque!");
        return;
    }

    let lucro = preco - custo;
    let margem = (lucro * 100) / preco;
    let status = "";

    if (estoque <= 2) {
    status = "<span class='status-vencido'>Baixo</span>";
} else {
    status = "<span class='status-pago'>Ativo</span>";
}

    if (linhaEditando != null) {

        linhaEditando.cells[0].innerHTML = sku;
        linhaEditando.cells[1].innerHTML = nome;
        linhaEditando.cells[2].innerHTML = categoria;
        linhaEditando.cells[3].innerHTML = "R$ " + preco;
        linhaEditando.cells[4].innerHTML = "R$ " + custo;
        linhaEditando.cells[5].innerHTML = margem.toFixed(0) + "%";
        linhaEditando.cells[6].innerHTML = estoque;
        linhaEditando.cells[7].innerHTML = status;

        alert("Produto atualizado com sucesso!");

        fecharModal();

        return;
    }

    document.getElementById("tabelaProdutos").innerHTML +=
        "<tr>" +
        "<td>" + sku + "</td>" +
        "<td>" + nome + "</td>" +
        "<td>" + categoria + "</td>" +
        "<td>R$ " + preco + "</td>" +
        "<td>R$ " + custo + "</td>" +
        "<td>" + margem.toFixed(0) + "%</td>" +
        "<td>" + estoque + "</td>" +
        "<td>" + status + "</td>" +
        "<td><button onclick='editarProduto(this)'>Editar</button> <button onclick='excluirProduto(this)'>Excluir</button></td>" +
        "</tr>";

    alert("Produto cadastrado com sucesso!");

    fecharModal();
}

function editarProduto(botao) {

    linhaEditando = botao.closest("tr");

    document.getElementById("sku").value = linhaEditando.cells[0].innerText;
    document.getElementById("nome").value = linhaEditando.cells[1].innerText;
    document.getElementById("categoria").value = linhaEditando.cells[2].innerText;
    document.getElementById("preco").value = linhaEditando.cells[3].innerText.replace("R$ ", "");
    document.getElementById("custo").value = linhaEditando.cells[4].innerText.replace("R$ ", "");
    document.getElementById("estoque").value = linhaEditando.cells[6].innerText;

    document.getElementById("modalProduto").style.display = "block";
}

function excluirProduto(botao) {

    let resposta = confirm("Deseja excluir este produto?");

    if (resposta == true) {
        botao.closest("tr").remove();
        alert("Produto excluído com sucesso!");
    }
}

function filtrar() {
    let busca = document.getElementById("busca").value.toLowerCase();
    let categoria = document.getElementById("filtroCategoria").value.toLowerCase();

    let linhas = document.getElementById("tabelaProdutos").getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {
        let texto = linhas[i].innerText.toLowerCase();

        let mostrarBusca = texto.indexOf(busca) > -1;
        let mostrarCategoria = categoria == "" || texto.indexOf(categoria) > -1;

        if (mostrarBusca && mostrarCategoria) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
}