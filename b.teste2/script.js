const nome = document.getElementById('name');
const email = document.getElementById('email');
const numero = document.getElementById('number');
const botao = document.getElementById('button');

botao.addEventListener('click', (e)=> {
    e.preventDefault();

    if (nome.value == "" || email.value == "" || numero.value == ""){
        alert("Precisa preencher todos os dados!")
    } else {
    let lista_dados = JSON.parse(localStorage.getItem('dados')) || [];

    lista_dados = lista_dados.length ? lista_dados : [];

    const valorNome = nome.value;
    const valorEmail = email.value;
    const valorNumero = numero.value;

    lista_dados.push({valorNome, valorEmail, valorNumero});
    
    localStorage.setItem('dados', JSON.stringify(lista_dados))
    }
})