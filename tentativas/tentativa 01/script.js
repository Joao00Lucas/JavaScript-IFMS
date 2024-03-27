function mostrarMenu(){
    let ver = document.querySelector('.bar');

    console.log(ver.classList);
    ver.classList.toggle('open');

    let intervalo = setInterval(()=>{
        ver.classList.toggle('hidden');
        clearInterval(intervalo)
    },800)




}