function cadastrar() {
    let nome = document.getElementsByName("nome")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let senha = document.getElementsByName("senha")[0].value;
    let confirmarSenha = document.getElementsByName("confirmarSenha")[0].value;

    if (senha == confirmarSenha) {
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);

        alert("Cadastro realizado com sucesso!");

        location.href = "login.html";
    } else {
        alert("As senhas estão diferentes!");
    }

    return false;
}