let open = document.querySelector("article");

let less = document.querySelector("button");

function showMore(){
    open.classList.toggle('open')
    
    less.classList.toggle('less')

    less.innerHTML = 'Show Less';
}

// let: declara a variável 
// open: é a minha variável a ser usada
// document.getElement: uma função que usa id ou class ao meu objeto
// function: declaro a minha função que vai executar alguma coisa
// classList: puxa um elemento da classe para alterar
// toggle: um elemento que alterna entre dois estados, como no botão ativando a open