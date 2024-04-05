function calcular() {
    // Obtenha os valores dos campos de entrada
    var numero1 = parseFloat(document.getElementById('inputNumber1').value);
    var numero2 = parseFloat(document.getElementById('inputNumber2').value);

    // Faça os cálculos desejados
    var resultado = numero1 + numero2;

    // Exiba o resultado
    document.getElementById('resultados').textContent = 'Resultado: ' + resultado;
}