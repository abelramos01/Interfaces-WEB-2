function calcular(){
   
    var num = parseFloat(document.getElementById('numero').value);
    var num2 = 1;
    var resultado = 0;
    var resultadoString = '';

 while (num2<=10){

    
    resultado = num*num2;
    resultadoString += 'Resultado: ' + resultado + '<br>'; 
    num2++;
 }

 document.getElementById('resultados').innerHTML= resultadoString;

}