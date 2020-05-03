const backCard = document.querySelector('#back-card');
const displayCard = document.querySelector('#display-card');
const cards = ['cinco-de-ouros', 'nove-de-espadas', 'quatro-de-paus', 'seis-de-copas', 'sete-de-espadas', 'sete-de-paus', 'tres-de-ouros'];
const animations = ['rotate', 'scale', 'skew'];


backCard.addEventListener('click', ()=>{
    showCard();
})

const showCard = () => {
    let flipCard = document.createElement('img');
    
    flipCard.src = `./cartas/${ cards[genNumber(cards)] }.png`;
    
    flipCard.classList.add('card', animations[genNumber(animations)]);

    displayCard.appendChild(flipCard);

}

const genNumber = (array) => {
    return Math.floor(Math.random() * array.length);
}