const prompt = require('prompt-sync')();

let numero = +prompt("Informe um número que você deseja ver sua potência: ");

let expoente = +prompt("Agora digite um número para ser o expoente: ")
let potencia;

for(let i = 0; i < expoente; i++){
    for(let j = 0;j < expoente; j++){
        potencia = numero + numero
    }
}
console.log(potencia)