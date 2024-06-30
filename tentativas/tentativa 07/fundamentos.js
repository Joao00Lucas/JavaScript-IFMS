//estrutura de condição - if, else, else if

const idade = 16

if(idade < 13) {
    console.log("A pessoa é uma criança");
} else if (idade < 20){
    console.log("A pessoa é um adolescente");
} else {
    console.log("A pessoa é um adulto");
}

//Switch
const fruta = "mamao"

switch(fruta) {
    case "Banana":
        console.log("Banana é a fruta!");
        break
    case "Maçã":
        console.log("Maçã é a fruta");
        break
        default:
            console.log("Fruta não encontrada");
} 

//estrutura de repetição
//contador; condição; incremento
//for
for(let i = 0; i < 5; i ++) {
    console.log("O valor de i é: " + i);
}

//while
let i = 0;

while(i < 5) {
    console.log("O valor de k é: " + i);
    i++;
}

//do while
let j = 0;

do {
    console.log("O valor de j é: " + j);
    j++
} while(j < 5);

//funções
function cumprimentar(nome) {
    console.log("Olá! " + nome);
}

cumprimentar("Matheus");

//escopo de variaveis
let cor = "azul";

function mostrarCor() {
    let cor = "verde";
    console.log(cor);
}
console.log(cor);

mostrarCor();

//hoisting
testeHoisting();

function testeHoisting(){
    console.log("Deu certo!");
}

//arrow function
const testeArrow = () => console.log("Isso também é uma função");

testeArrow();

// truthy e falsy
const minhaVariavel1 = "" // falsy
const minhaVariavel2 = "Algum texto"

if(minhaVariavel1) {
    console.log("Verdadeiro");
} else {
    console.log("Falso");
}

if(minhaVariavel2) {
    console.log("Verdadeiro 2");
} else {
    console.log("Falso 2");
}

//array, listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[2]);

numeros.push(6);

console.log(numeros);

numeros.pop()

console.log(numeros);

//strings
const minhaStringNova = "Olá, Mundo!"
const minhaString3 = minhaStringNova + " Como voce esta?"

console.log(minhaString3);

const minhaString4 = `${minhaStringNova} Como você está?`

console.log(minhaString4);

console.log(minhaString4.length);
console.log(minhaString4[5]);
console.log(minhaString4.toUpperCase());

//Data e Hora
const agora = Date()
console.log(agora);

const natal = new Date(2023, 11, 25)
console.log(natal);

//Math
console.log(Math.PI);

console.log(Math.round(3.6));

console.log(Math.sqrt(16));

console.log(Math.pow(2, 3));

