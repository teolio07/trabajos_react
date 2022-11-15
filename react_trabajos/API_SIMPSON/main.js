const URLSimpson ='https://thesimpsonsquoteapi.glitch.me/quotes'
const main = document.getElementById('main')
const btn = document.getElementById('btn')

const createCard =  (image,quote,character)=>{
    const card = document.createElement('div');
    const img = document.createElement('img');
    const Quote  = document.createElement('p');
    const Character = document.createElement('h2');

    card.setAttribute('class', 'card')
    img.setAttribute('class', 'img')
    Quote.setAttribute('class', 'quote')
    Character.setAttribute('class', 'character')

    img.src = image;
    Quote.textContent = quote;
    Character.textContent = character;
    
   
    card.appendChild(img);
    card.appendChild(Character);
    card.appendChild(Quote);
    main.appendChild(card);
    
    return card;
    
}

const fetApi = ()=>{
        fetch(URLSimpson)
            .then(response => response.json())
            .then(data => {
                const {image,quote,character} = data[0];
                let card = createCard(image,quote,character)
                return card
            })
            .catch((err)=>{console.log({error: err})})
}

btn.addEventListener('click',()=>{
    main.innerHTML = fetApi()
})

fetApi()







