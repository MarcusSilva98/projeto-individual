setTimeout(function mostraBotao() { botao.style.display = 'block'; }, 20000);



function sign_up() {

    img_esquerda.style.display = "block";
    img_direita.style.display = "none";
    form_cadastro.style.display = "flex";
    form_login.style.display = "none";
}

function sign_in() {
    img_esquerda.style.display = "none";
    form_login.style.display = "block";
    form_cadastro.style.display = "none";
    img_direita.style.display = "block";
}