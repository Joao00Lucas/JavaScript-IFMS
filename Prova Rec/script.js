const nome = document.getElementById('nome');
const email = document.getElementById('email');
const endereco = document.getElementById('endereco');
const numero = document.getElementById('numero');
const estado = document.getElementById('estado');
const unidade = document.getElementById('unidade');
const cidade = document.getElementById('cidade');
const botaoSalva = document.getElementById('salvar');
const botaoApaga = document.getElementById('apagar');

botaoSalva.addEventListener('click', (e)=> {
    e.preventDefault();

    if (nome.value == "" || email.value == "" || endereco.value == ""){
        alert("Preencha os dados obrigatórios!")
    } else {
    let cadastros = JSON.parse(localStorage.getItem('cadastro')) || [];

    cadastros = cadastros.length ? cadastros : [];

    const valorNome = nome.value;
    const valorEmail = email.value;
    const valorEndereco = endereco.value;
    const valorNumero = numero.value;
    const valorEstado = estado.options[estado.selectedIndex].text;
    const valorUnidade = unidade.options[unidade.selectedIndex].text;
    const valorCidade = cidade.options[cidade.selectedIndex].text;
    
    cadastros.push({valorNome, valorEmail, valorEndereco, valorNumero, valorEstado, valorUnidade, valorCidade});
    
    localStorage.setItem('cadastro', JSON.stringify(cadastros))
    }
})

botaoApaga.addEventListener('click', (e)=> {
    e.preventDefault();
    localStorage.clear();
})