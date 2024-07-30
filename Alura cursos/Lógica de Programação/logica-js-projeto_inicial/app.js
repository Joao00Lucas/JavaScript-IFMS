alert('Boas vindas ao jogo número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (numeroSecreto == chute) {
        alert(`isso ai você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if ( chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
    }

    tentativas ++;
}
