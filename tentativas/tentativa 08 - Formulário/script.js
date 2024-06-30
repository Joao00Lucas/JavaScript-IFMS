// Declaro as variaveis do botao e do resultado em tela
let button = document.querySelector("button")
let result = document.querySelector(".resultado")

// Crio uma função que pega os dados do formulário
function enviarDados() {
    // Pego esses dados e coloco em variaveis
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    
    // Crio um novo elemento onde vai mostrar meus dados em tela
    let p = document.createElement('p')
    // Eu escrevo esses dados com o inner
    p.innerHTML = `Nome:${nome} </br>`;
    p.innerHTML += `Idade:${idade}`;
    
    // Eu digo onde eles vão aparecer, nesse cado na div 
    result.appendChild(p)
}