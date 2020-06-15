const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = joke => {
  // Adicionar lógica aqui!
  const container = document.querySelector("#jokeContainer");
  const li = document.createElement("li");
  li.innerText = joke;
  container.appendChild(li);
};

window.onload = () =>  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => fetchJoke(data.joke));
   

          
  