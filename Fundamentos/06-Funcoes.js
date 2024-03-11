// função


// 0 - 17 = "Sou menor de idade" 
// 18 - 60 = "Sou Adulto"
// 60 = "Estou na melhor idade"

function verificarIdade(idade){
if(idade <= 17){
    return  "Sou Menor de Idade";
}else if(idade > 18 && idade < 60) {
    return "Sou adulto."
}else{
    return "Estou na Melhor idade";
}
}

console.log(verificarIdade(65));
console.log(verificarIdade(15));
console.log(verificarIdade(20));





