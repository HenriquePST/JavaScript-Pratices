let idade = 19;
// 0 - 17 = "Sou menor de idade" 
// 18 - 60 = "Sou Adulto"
// 60 = "Estou na melhor idade"

if(idade <= 17){
    console.log( "Sou Menor de Idade");
}else if(idade > 18 && idade < 60) {
    console.log("Sou adulto")
}else{
    console.log ("Estou na Melhor idade");
}

// 1 - Cadastrar
// 2 - Listar 
// 3 - Pesquisa
// 4 - Sair


let menu = 4; 

switch (menu){
    case 1 :
        console.log("cadastrar");
        break;
    case 2 :
        console.log("Listar");
        break;
    case 3 :
        console.log("Pesquisa");
        break;
    default:
        console.log("Sair");
    }
    