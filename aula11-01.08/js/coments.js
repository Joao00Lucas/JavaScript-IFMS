const container = document.getElementById('container');

async function getcoments() {
    const params = new URLSearchParams(window.location.search);

    const id = params.get('id');

    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`

    const resp = await fetch(url);

    const data = await resp.json()    
    
    data.map((coments) => {
        const divCard = document.createElement('div');
        divCard.classList.add("card")

        const name = document.createElement('h1');
        name.innerText = coments.name

        const email = document.createElement('p');
        email.innerText = coments.email

        const body = document.createElement('p');
        body.innerText = coments.body

        divCard.appendChild(name)
        divCard.appendChild(email)
        divCard.appendChild(body)

        container.appendChild(divCard)

    })

}

getcoments()