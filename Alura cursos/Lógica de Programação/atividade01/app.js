let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificaClique() {
    console.log('O botão foi clicado');
}

function enviaAlerta() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    var cidade = prompt('Diga o nome de uma cidade do Brasil:')
    var mensagem = `Estive em ${cidade} e lembrei de você`
    alert(mensagem)
}

function somarDois() {
    var primeiro = prompt('Digite o primeiro número:')
    var segundo = prompt('Digite o segundo npumero:')
    var soma = Number(primeiro) + Number(segundo)
    alert(soma)
}