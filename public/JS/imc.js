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

        if (imc < 18.5 && peso < 64) {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)}, classificação: Magreza`;
        }
        if (imc > 18.5 && imc < 24.9 && peso > 64.6 && peso < 86.1) {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)},classificação: Normal`;
        }
        if (imc > 24.9 && imc < 30 && peso > 86.1 && peso < 103.8) {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)},classificação: Sobrepeso`;
        } else {
            resultado_imc.innerHTML = `Seu imc é de ${parseInt(imc)},classificação: Obesidade`;
        }

    }
}