let botao = document.getElementById('button');
let texto = document.querySelector('section');
let mais = "Ler Mais"

function abrir() {
    texto.classList.toggle('open');

    if(botao.value == mais) {
        botao.value = "Ler Menos"
    } else {
        botao.value = "Ler Mais"
    }
}