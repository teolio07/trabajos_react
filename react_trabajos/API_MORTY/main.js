var input_searcher = document.getElementById('input_searcher');
var search_container = document.getElementById('search_container')
var template = ``;
var filtroOne = [];
var filtro = [];

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
            search_container.innerHTML = `<div></div>`
            
        }
        else{
            filtro = data.filter(character => character.name == input_searcher.value ||
                character.name[0]+character.name[1] == input_searcher.value);

                for (let i = 0; i < filtro.length; i++){
        
                    template += `<div class='title_img'>${filtro[i].name} <img id='imagen' src='${filtro[i].image}'/></div>
                                    `
    
            }
            console.log(filtro)
            document.getElementById('search_container').innerHTML = template
        }
        
    
    })
}



fillCard()
