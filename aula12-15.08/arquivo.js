// pegar elementos
const form = document.querySelector('#formStorage');
const input = document.querySelector('#name');

// EVENTOS
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = input.value;
    localStorage.setItem('nome', JSON.stringify({ name: name, idade: 20 }))
    const r = localStorage.getItem('nome');
    localStorage.removeItem('name');
    console.log(r);
})

// FUNÇÕES
// CRUD - create, read, update, delete