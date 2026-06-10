function entrar() {
    let email = document.getElementsByName("email")[0].value;
    let senha = document.getElementsByName("senha")[0].value;

    let emailSalvo = localStorage.getItem("email");
    let senhaSalva = localStorage.getItem("senha");

    if (email == emailSalvo && senha == senhaSalva) {
        alert("Login realizado com sucesso!");
        location.href = "dashboard.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }

    return false;
}