function Calcular() {
    // Declaração das variáveis utilizadas
    let altura = document.getElementById('txta').value;
    let peso = document.getElementById('txtp').value;
    let resultado = document.querySelector('.resultado');

    // Calculo de IMC e definição de duas casas pós virgula
    let a = altura / 100;
    let res = (peso / a * 2);
    let final = res.toFixed(2);

    // Impressão em tela com a criação de um elemento
    let p = document.createElement('p')
    p.innerHTML = `Seu IMC é ${final}`;
    resultado.appendChild(p)
}