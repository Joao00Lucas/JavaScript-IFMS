// 1)
function exibirConsole() {
    console.log('Olá, mundo!')
}

exibirConsole()

// 2)
function exibirName(nome) {
    console.log(`Olá, ${nome}!`);
}

exibirName('João')

// 3)
function calculaDobro(numero) {
    return numero * 2
}

let resultado = calculaDobro(5)
console.log(resultado);

// 4)
function calculaMedia(a, b, c) {
    return (a + b + c) / 3
}

let media = calculaMedia(3, 4, 5)
console.log(media);

// 5)
function verificaMaior(a, b) {
    return a > b ? a : b //no lugar de IF e ELSE, ? é true e : é false.
}

let maior = verificaMaior(6, 7)
console.log(maior);

// 6)
function calculaMulti(numero) {
    return numero * numero
}

let dobro = calculaMulti(8)
console.log(dobro);