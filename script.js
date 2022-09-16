const prompt = require ('prompt-sync')();


let soma = 0
const peso = Number ( prompt ('Insira o peso: '));
const altura = Number ( prompt ('Insira sua altura: '));

soma = imcCalc (peso,altura);

console.log(`${soma} Esse é seu imc:`);

//fuction
function imcCalc(peso,altura) {

    const soma =  peso/(altura*altura)
    return soma
}