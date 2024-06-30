// AVANÇANDO EM JAVASCRIPT

// Manipulação de arrays
const frutas = ["Maçã", "Laranja"]

frutas.unshift("Acerola")//adiciona um elemento no inicio do array

console.log(frutas); 

frutas.shift()//remove um elemento no inicio do array

console.log(frutas);

//map, filter, reduce -> arrow function
// como percorrer um array, nesce caso para encontrar os numeros pares
const numeros = [1, 2, 3, 4, 5, 6];

// find retorna o primeiro elemento do criterio, neste caso o primeiro par do array
const numeroPar = numeros.find((num) => num % 2 === 0)

console.log(numeroPar);

// filter retorma todos os elementos que batem com o criterio, um filtr
const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numerosPares);

// Manipulação de strings
const frase = " Olá, mundo! ";

const palavras = frase.trim().split(" "); //trim tira os espaços da string

console.log(frase);
console.log(palavras);

const frase2 = "JavaScript é íncrivel!"

console.log(frase2.startsWith("Java")); // startsWith verifica o texto no começo da string
console.log(frase2.endsWith("!"));      // endsWith verifica o texto no final da string

// Exceções e tratamentos de erros
const idade = 15;

//if(idade < 18) {
//  throw new Error("Você deve ter pelo menos 18 anos!") //throw vai executar o meu novo erro
//}                                                      //quando estamos com erro o programa é encerrado

try {                           //assim como if e else, o try serve para verificar se tem um erro ou nao
    const idade = 15;           //se tiver ele executa o catch mas nao encerra o programa como throw
    if(idade < 18) {            // ou passa direto, servindo como feedback e nao fim do programa
        throw new Error("Você deve ter pelo menos 18 anos!")
    }

} catch (error) {
    console.log(error.message);
}

console.log(("Continuando o programa..."));

// Callbak - uma função que se executa em outra função
function cumprimentar(nome, callback) {
    console.log("Olá, " + nome);
    callback();
}

function mostrarSaudacao() {
    console.log("Como você está?");
}

cumprimentar("Marcelinho", mostrarSaudacao);

cumprimentar("Maria", function() {
    console.log("Tá tudo bem?");
});

//settimeout => dps de um tempo executa algo, uma vez
function mostrarMensagem() {
    console.log(("Essa mensagem será exibida após 3 segundos."));
}

setTimeout(mostrarMensagem, 3000); //1000ms = 1s

setTimeout(function() {
    console.log(("Oi"));
}, 1000);






