let input_searcher = document.getElementById('input_searcher');
let search_container = document.getElementById('search_container')
search_container.style.visibility = 'hidden'
let template = ``;
let filtroOne = [];
let filtro = [];

let card;


const main = document.getElementById('main');

const AxiosApi = ()=>{
    return new Promise(async (resolve,reject)=>{
        await axios.get('https://rickandmortyapi.com/api/character', {
        responseType: 'json'
        })
            .then(function(res) {
                resolve(res.data.results)
      
            })
        .catch(function(err) {
            console.log(err)
        })

    });
};
const AxiosApiSear = (nameCharacter)=>{
    return new Promise(async (resolve,reject)=>{
        await axios.get(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`, {
        responseType: 'json'
        })
            .then(function(res) {
                resolve(res.data.results)
      
            })
        .catch(function(err) {
            console.log(err)
        })

    });
};


const createCard = (name,gender,image)=>{
    card = document.createElement('div');

    let Name = document.createElement('h2');
    let Gender = document.createElement('p');
    let Image = document.createElement('img');
    let br = document.createElement('br');

    Name.textContent = name;
    Gender.textContent = gender;
    Image.src = image;



    card.setAttribute('class','card');
    Name.setAttribute('class','name');
    Gender.setAttribute('class','gender');
    Image.setAttribute('class','image')


    card.appendChild(Image);
    card.appendChild(Name);
    //card.appendChild(br);
    card.appendChild(Gender);

    main.appendChild(card);
    
}

const fillCard = async ()=>{
    const data =  await AxiosApi();
    data.forEach(element => {
        createCard(element.name,element.gender,element.image)
    });

    input_searcher.addEventListener('keyup',async (e)=>{
        filtroOne = [];
        template = ``;
        console.log(e.keyCode)
        if(e.keyCode == 8){
            console.log('funciona')
            filtro = []
            filtroOne = [];
            template = ``;
            search_container.style.visibility = 'hidden'

            search_container.innerHTML = `<div></div>`
            
        }
        else{
            let data =  await AxiosApiSear(e.target.value)
            console.log(data)
            search_container.style.visibility = 'visible'

                

                for (let i = 0; i < data.length; i++){
                    template += `<div class='card'><h2 class='name'>${data[i].name}</h2><p class='gender'>${data[i].gender}</p> <img class='image' src='${data[i].image}'/></div>`
            }
            document.getElementById('search_container').innerHTML = template
        }
        
    
    })
}


fillCard()
