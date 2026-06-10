let nome = localStorage.getItem("nome");

document.getElementById("nomeUsuario").innerHTML =
    "Bem-vindo(a), " + nome + "!";
document.getElementById("produtos").innerHTML = "150";
document.getElementById("totalProdutosTexto").innerHTML = "150 produtos no catálogo";

document.getElementById("clientes").innerHTML = "80";
document.getElementById("novosClientes").innerHTML = "12 novos este mês";

document.getElementById("vendas").innerHTML = "R$ 8.500";
document.getElementById("crescimento").innerHTML = "15% vs mês anterior";

document.getElementById("contas").innerHTML = "R$ 3.200";
document.getElementById("faturas").innerHTML = "7 faturas pendentes";

document.getElementById("estoque").innerHTML =
    "<li>Mouse Gamer - 5 unidades</li>" +
    "<li>Teclado Mecânico - 3 unidades</li>" +
    "<li>Headset RGB - 2 unidades</li>";

document.getElementById("vendasLista").innerHTML =
    "<li>Notebook Gamer - R$ 4.500</li>" +
    "<li>Mouse Gamer - R$ 150</li>" +
    "<li>Monitor 24'' - R$ 900</li>";