const url = 'https://zenquotes.io/api/random';

function apresentarFrase() {
  let req = fetch(url, {
    mode: 'no-cors',
    method: 'GET', 
    async:true,  
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
    }
  })
  let dado = req.then((response) => {
    return response.json()
  })
     
  dado.then((dado) => {
    dado.forEach(element => {

      criarFrase(element)
    });
  })
}

function criarFrase(infofrase) {
    let div = document.getElementById('frase');
  
    let frase = document.createElement('p');

    frase.textContent = infofrase.q;
  
    div.appendChild(frase)
}

apresentarFrase()