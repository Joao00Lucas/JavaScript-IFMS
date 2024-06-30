// Exercícios de fundamentos
// Exercício 1: Olá, mundo!
// crie um script que imprima "Olá, Mundo!" no console
console.log("Olá, mundo!");

// Exercícios 2: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console
const variavelString = "1234";
const valorNumber = Number(variavelString);
console.log(typeof valorNumber);

// Exercício 3: Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem
// e quantas palavras existem na frase.
const minhaString = "JavaScript é incrível";
const numeroDeCaracteres = minhaString.length;
const numeroDePalavras = minhaString.split(" ").length;

console.log(`O numero de caracteres é ${numeroDeCaracteres}`);
console.log(`O numero de palavras é ${numeroDePalavras}`);

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.
const nomes = ["Ana", "Bia", "Clara", "Duda", "Eli"]

for(let i = 0; i < nomes.length; i++){

    console.log(nomes[i]);

}

// Exercício 5: Funções, strings e math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo,
// "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas(por 
// exemplo, "2:30PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se que ua função lida
// corretamente com horários na meia-noite e no meio-dia.

function converterHorario(horario24) {
    
    const [hora, minuto] = horario24.split(":")

    const hora12 = hora % 12 || 12;

    let periodo = "AM"

    if(hora > 12) {
        periodo = "PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`);
}

converterHorario("15:16");

converterHorario("09:46");

converterHorario("21:12");







