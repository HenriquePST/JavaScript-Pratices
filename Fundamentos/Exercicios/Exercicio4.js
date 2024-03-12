/*Crie um progrma que, a partir de um número, 
calcule quantos números pares e ímpares existem
no intervalo de 0 até ele.*/

var numero  = 16;
var numeroPar = 0;
var numeroImpar = 0;

while(numero > 0){
    if(numero % 2 ==0 ){
        numeroPar++;
    }else{
        numeroImpar++;
    }
    numero --;
}
console.log(numeroPar);
console.log(numeroImpar);
