function criar() {
    login.style.display = "none";
    cadastro.style.display = "block";
}

function logar() {
    login.style.display = "block";
    cadastro.style.display = "none";
}

function entrar() {
    // aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.login;
                sessionStorage.nome_usuario_meuapp = json.nome;

                window.location.href = 'paravoce.html';
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                // finalizar_aguardar(texto);
                alert(texto);
            });
        }
    });

    return false;
}

function cadastrar() {
    // aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function(response) {

        if (response.ok) {

            logar();

        } else {

            console.log('Erro de cadastro!');
            response.text().then(function(resposta) {
                div_erro.innerHTML = resposta;
            });
            // finalizar_aguardar();
        }
    });

    return false;
}