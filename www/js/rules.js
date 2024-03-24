var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular);

function calcular() {
    let valorInvestido = parseFloat(getValorInvestido());
    let quantidadeMeses = parseFloat(getQuantidadeMeses());
    let taxaRendimento = parseFloat(getTaxaRendimento());

    let resposta = "Valor investido: " + parseFloat(valorInvestido).toFixed(2) + "<br />";

    for (let i = 0; i < quantidadeMeses; i++) {
        valorInvestido = valorInvestido + (valorInvestido * taxaRendimento);
    }
    resposta += "Resultado: " + valorInvestido.toFixed(2);
    document.querySelector('#resultado').innerHTML = resposta;
}



function getValorInvestido() {
    return document.getElementById("valorInvestido").value;
}
function getQuantidadeMeses() {
    return document.getElementById("quantidadeMeses").value;
}
function getTaxaRendimento() {
    return document.getElementById("taxaRendimento").value / 100;
}


