let main = document.getElementById('main');
const objs = [];

const createCard = async (name,author,year)=>{
    let card = document.createElement('div');
    let Name= document.createElement('h2');
    let Author= document.createElement('p');
    let Year = document.createElement('p');

    card.setAttribute('class', 'card')

    Name.textContent =await name;
    Author.textContent = await author;
    Year.textContent =await year;

    console.log( await year)
    card.appendChild(Name);
    card.appendChild(Author);
    card.appendChild(Year);
    
    main.appendChild(card)
}


const fetchApi = ()=>{
    return new Promise((resolve,reject)=>{
        fetch('https://the-dune-api.herokuapp.com/books/3')
            .then(res => res.json())
            .then(data=> resolve(data))
    })
}

const fillCard= async ()=>{
    let data = await fetchApi();
    data.forEach((element,i)=>{
        createCard(element.title,element.author,element.year)
    })
}

fillCard()
