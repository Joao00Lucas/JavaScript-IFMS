function showMore(){
    let lista = document.getElementById('lista')
    console.log(lista);
    lista.classList.toggle('open');
}

function lerMais(){
    let open = document.getElementsByClassName("article");
    open[0].classList.toggle('ler');
}

function lerMais2(){
    let open = document.getElementsByClassName("article");
    open[1].classList.toggle('ler');
}