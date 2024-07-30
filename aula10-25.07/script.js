// // VAR
// const a = 3; // constante
// let b = 2; // variável
// var c = 3; // legado
// d = 10;

// // estrutura condicional
// if (a > 2) {
//     // caso verdade o teste
// } else {
//     // caso falso o teste
// }

// apresentação dos resultados
let a = 123
console.log(a);
//alert(a);

// Manipulação da DOM
let c = document.getElementById('container');
let d = document.getElementsByClassName('menu');
let e = document.getElementsByTagName('h3');
let f = document.querySelector('#container');

console.log(c);

console.log(d);

console.log(e);

console.log(f);

// estruturas de repetição
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let j =0
while (j < 10) {
    console.log(j);
    j++
}

function soma(a, b){
    console.log( a + b);
}

soma(6, 6);

let soma2 = new Function("a", "b", "return a + b");

// objetos
let pessoa = {
    nome: "João",
    idade: 22,
    sexo: "M"
};

console.log(pessoa.nome);

function dizerOi(){
    let nome = document.getElementById("nome").value
    
    if (nome.length == 0) {
        let error = document.getElementById('error');

        error.classList.add("error");

        error.innerHTML = "Precisa escrever"

    } else {
        let right = document.getElementById('right');

        right.classList.add("right");

        right.innerHTML = `Olá ${nome}`
    }
}