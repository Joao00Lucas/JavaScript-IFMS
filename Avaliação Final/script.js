const nome = document.getElementById('inputNome');
const email = document.getElementById('inputEmail');
const telefone = document.getElementById('inputTelefone');
const botao = document.getElementById('button');


botao.addEventListener("click", (e) => {
    e.preventDefault();

    const valorNome = nome.value;
    const valorEmail = email.value;
    const valorTelefone = telefone.value;
    
    localStorage.setItem('nome', valorNome);
    localStorage.setItem('email', valorEmail);
    localStorage.setItem('telefone', valorTelefone);
})