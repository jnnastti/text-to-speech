const url = 'https://zenquotes.io/api/random';

function apresentarFrase() {
  // let req = fetch(url, {
  //   mode: 'no-cors',
  //   method: 'GET', 
  //   async:true,  
  //   headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin" : "*", 
  //       "Access-Control-Allow-Credentials" : true 
  //   }
  // })
  // let dado = req.then((response) => {
  //   return response.json()
  // })
     
  // dado.then((dado) => {
  //   dado.forEach(element => {

  //     criarFrase(element)
  //   });
  // })
  var frase = {
    q: 'teste',
    a: 'oi'
  }
  criarFrase(frase);
}

function criarFrase(infofrase) {
  let div = document.getElementById('frase');
  
  let frase = document.createElement('p');
  let h2 = document.createElement('h2');

  h2.textContent = `- ${infofrase.a}`;
  // frase.textContent = `"${infofrase.q}"`;
  frase.textContent = infofrase.q;

  frase.id = "textoFrase";
  
  div.innerHTML = "";

  div.appendChild(frase)
  div.appendChild(h2)

  lerFrase()
}

function lerFrase() {
  let frase = document.getElementById('textoFrase');
  let toSay = frase.textContent.trim();
  const availableVoices = speechSynthesis.getVoices();

  // toSay = toSay.substr(toSay.indexOf("\"") + 1, toSay.lastIndexOf("\"") - 1);

  const utterance = new SpeechSynthesisUtterance(toSay);

  utterance.voice = availableVoices[0];
  speechSynthesis.speak(utterance);
  // frase.textContent = '';

  setTimeout(function() {
    apresentarFrase()
  }, 2000)
}

apresentarFrase()
