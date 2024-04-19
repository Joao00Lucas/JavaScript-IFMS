const container = document.querySelector("#container")

const meuH2 = document.createElement("h2")

meuH2.innerText = "Meu elemento H2"

//container.appendChild(meuH2)//

/*Primeiro você seleciona o lugar - querySelector*/
/*Cria o seu objeto - createElement(*/
/*Atribui o que quer nele - innerText*/
/*linca ele aonde quer que ele fique - appendChild()*/

// Parte 2 MAP

const number1 = [2, 5, 7, 10, 22]
const number2 = number1.map(myFunction)

function myFunction(value, index, array) {
    return value * 2;
}

console.log(number2);

//Parte 3 FETCH (querendo consumir alguma API de algum lugar)(por default ele pega um GET)
const url = "https://jsonplaceholder.typicode.com/posts";

async function getAllPosts() {
    const resp = await fetch(url)

    const data = await resp.json()

    data.map((post) => {
        const div = document.createElement("div")
        div.classList.add("posts")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const a = document.createElement("a")

        h2.innerText = post.title
        p.innerText = post.body
        a.innerText = "Leia mais"
        a.setAttribute("href", "#")

        div.appendChild(h2)
        div.appendChild(p)
        div.appendChild(a)

        container.appendChild(div)
    })

}

getAllPosts()
/*REFAÇA TODA ESSA MERDA EM CASA IDIOTA, QUER APRENDER? ENTÃO PRATICA SEU BOÇAL*/