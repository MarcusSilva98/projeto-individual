let contador_2 = 0;

function scrollmenu() {


    setTimeout(function() {
        anm_cadastro();
        if (contador_2 < 250) {
            let body = document.body;
            let html = document.documentElement;
            body.scrollTop += 10;
            html.scrollTop += 10;
            scrollCadastro();
            contador_2++;
        }

    }, 12);
}

// function anm_cadastro() {


//     if (contador_2 == 250) {
//         img_esquerda.style.display = "block";
//         img_direita.style.display = "none";
//         form_cadastro.style.display = "flex";
//         form_login.style.display = "none";


//     }
// }