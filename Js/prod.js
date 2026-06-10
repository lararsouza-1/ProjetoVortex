function abrirCadastro() {
    document.getElementById("modalProduto").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalProduto").style.display = "none";
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
    "<td>Ativo</td>" +
    "<td>-</td>" +
    "</tr>" +

    "<tr>" +
    "<td>002</td>" +
    "<td>Teclado Mecânico</td>" +
    "<td>Periféricos</td>" +
    "<td>R$ 300</td>" +
    "<td>R$ 180</td>" +
    "<td>40%</td>" +
    "<td>2</td>" +
    "<td>Baixo</td>" +
    "<td>-</td>" +
    "</tr>" +

    "<tr>" +
    "<td>003</td>" +
    "<td>Monitor 24</td>" +
    "<td>Monitores</td>" +
    "<td>R$ 900</td>" +
    "<td>R$ 700</td>" +
    "<td>22%</td>" +
    "<td>5</td>" +
    "<td>Ativo</td>" +
    "<td>-</td>" +
    "</tr>";

function salvarProduto() {
    let nome = document.getElementById("nome").value;

    if (nome == "") {
        alert("Digite o nome do produto!");
    } else {
        alert("Produto cadastrado com sucesso!");
        fecharModal();
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