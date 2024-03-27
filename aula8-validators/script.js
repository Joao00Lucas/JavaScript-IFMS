const nome = document.getElementById("name")
const error = document.getElementsByClassName("error");

function validar() {

    console.log(nome.value.length);
    if(nome.value.length == 0) {
        error[0].innerHTML = "O nome não pode ser vazio!"
    }
    else{
        error[0].innerHTML = "funciona cachorrao"
    }
}

function validarEmail() {
    if(nome.value.indexOf("@") == -1 || nome.value.indexOf(".") == -1 ){
        error[0].innerHTML = "email invalido"
    }
    else{
        error[0].innerHTML = "funciona"
    }
}