const prompt = require('prompt-sync')();

let base = +prompt("Informe um número que você deseja ver sua potência: ");

let expoente = +prompt("Agora digite um número para ser o expoente: ")
let potencia;

for(let i = 0; i < expoente; i++){
    for(let j = 0;j < expoente; j++){
        potencia = base;
        base = base;

    }
}
console.log(potencia)