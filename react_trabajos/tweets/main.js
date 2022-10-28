let name = document.getElementById('nameProfile');
let inputName = document.getElementById('input-name');
let txtArea =  document.getElementById('txt-area');
let count = document.getElementById('count');
let btnPost = document.getElementById('btn-post');
let containerComments = document.getElementById('container-comments');

let comment;
let comments = [];

function fillcard(element){
    const card = document.createElement('div');
    const text = document.createElement('p');
    const textName = document.createElement('p');

    card.classList.add('card');
    text.classList.add('text');
    textName.classList.add('textName');


    textName.textContent = element.user;
    text.textContent = element.text;

    card.appendChild(textName);
    card.appendChild(text);
    containerComments.appendChild(card);
}

btnPost.addEventListener('click', (e)=>{
    e.preventDefault();
    name.textContent = inputName.value;
    comments = []; 
    comment = {
        user: inputName.value,
        text: txtArea.value} 
    comments.push(comment) 
    comments.forEach((element,i)=>{
       fillcard(element) 
    })
})

