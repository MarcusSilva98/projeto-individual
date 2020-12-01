const { combineTableNames } = require("sequelize/types/lib/utils");

function calcular() {
    error_peso.innerHTML = '';
    error_altura.innerHTML = '';
    var peso = Number(peso_usuario.value);

    var altura_com_virgula = altura_usuario.value;

    var altura = Number(altura_com_virgula.replace(',', '.'));

    var imc = (peso / (altura * altura));

    if (peso == 0 && altura == 0) {
        error_peso.innerHTML = `Preenchimento obrigatório`;
        error_altura.innerHTML = `Preenchimento obrigatório`;
    } else if (peso == 0) {
        error_peso.innerHTML = `Preenchimento obrigatório`;
    } else if (altura == 0) {
        error_altura.innerHTML = `Preenchimento obrigatório`;

    } else if (altura >= 3) {
        error_altura.innerHTML = `Por favor não se esqueça da vírgula`;
    } else {

        tabela.style.display = 'block'

        magreza.style.backgroundColor = "black";
        normal.style.backgroundColor = "black"
        sobrepeso.style.backgroundColor = "black"
        obesidade.style.backgroundColor = "black"


        if (imc < 18.5 && peso < 56.7) {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)}, classificação: Magreza`;
            magreza.style.backgroundColor = "#DAA520";
        } else if (imc > 18.5 && imc < 24.9 && peso > 56.7 && peso < 76.3) {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)},classificação: Normal`;
            normal.style.backgroundColor = "green"
        } else if (imc > 24.9 && imc < 30 && peso > 76.3 && peso < 91.9) {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)},classificação: Sobrepeso`;
            sobrepeso.style.backgroundColor = "#FF8C00"
        } else {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)},classificação: Obesidade`;
            obesidade.style.backgroundColor = "red"
        }

        resultado_imc.style.display = 'block';
    }
}