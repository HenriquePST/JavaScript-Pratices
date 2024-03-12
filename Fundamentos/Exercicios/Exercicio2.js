/*Faça um algoritmo para ler: quantidade atual em estoque,
quantidade máxima em estoque e quantidade minima em estoque de um produto.
 Calcular e escrever a quantidade média ( maxima + minima)/2. 
Se a quantidade em estoque for maior ou igual a media, escrever a mensagem. 
"Não efetuar a compra", se não, escrever "Efetuar compra". */

var atualEstoque = 10;
var maximaEstoque = 40;
var minimaEstoque = 5;

var mediaEstoque = (maximaEstoque + minimaEstoque)/2;
console.log(mediaEstoque);

if(atualEstoque >= mediaEstoque){
    console.log("Não efetuar a compra");
}else{
    console.log("Efeturar a compra");
}

