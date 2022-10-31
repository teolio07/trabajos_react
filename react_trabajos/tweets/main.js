let name = document.getElementById('nameProfile');
let inputName = document.getElementById('input-name');
let txtArea =  document.getElementById('txt-area');
let count = document.getElementById('count');
let btnPost = document.getElementById('btn-post');
let btnUpper = document.getElementById('btn-Upper')
let btnLower = document.getElementById('btn-Lower')
let containerComments = document.getElementById('container-comments');
let imgProfile = document.getElementById('img-profile');




let comment;
let comments = [];
let quantity = txtArea.textContent.length;
let lastLetter = "";
let newTxt = "";


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

function createComment(inputName,txtArea){
    comments = []; 
    comment = {
        user: inputName,
        text: txtArea}
    return comment;
}
btnLower.addEventListener('click', (e)=>{
    e.preventDefault();
    newTxt = txtArea.value.toLowerCase();
    txtArea.value = newTxt;
})

btnUpper.addEventListener('click', (e)=>{
    e.preventDefault();
    newTxt = txtArea.value.toUpperCase();
    txtArea.value = newTxt;
})

txtArea.addEventListener('keydown', (e)=>{
    

    if(e.key =='Backspace'){
        quantity = quantity-1;
        count.textContent = `Count: ${quantity}`

    }else{
        quantity++;
        count.textContent = `Count: ${quantity}`
    }

    if(quantity < 1){
       quantity = 0; 
       count.textContent = `Count: ${quantity}`

    }else if(quantity >= 280){
        txtArea.style.background = 'red';
        lastLetter = txtArea.value.slice(0,txtArea.value.length -1);
        txtArea.value = lastLetter;
        quantity --;
 
    } else if(quantity >= 230 && quantity <=280){
        count.style.color ='red';
    }else if(quantity <280){
        count.style.color='black'
        txtArea.style.background = 'white';

    }else{
        console.log('algo salio mal')

    }
})

btnPost.addEventListener('click', (e)=>{
    e.preventDefault();
    imgProfile.textContent = inputName.value[0];
    name.textContent = inputName.value;
    comment = createComment(inputName.value, txtArea.value)    
    comments.push(comment) 
    comments.forEach((element,i)=>{
       fillcard(element) 
    })
})

