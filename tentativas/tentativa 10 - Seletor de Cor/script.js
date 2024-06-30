const cor = document.querySelector('#txtc')
const botao = document.querySelector('#btn')

botao.addEventListener("click", ()=> {
    let nova = cor.value
    var body = document.body
    body.style.background = `${nova}`
})