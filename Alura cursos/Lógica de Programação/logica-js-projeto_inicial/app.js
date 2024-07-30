alert('Boas vindas ao jogo número secreto');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (numeroSecreto == chute) {
alert(`isso ai você descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert('voce errou :(');
}