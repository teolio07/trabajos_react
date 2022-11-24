let btn = document.getElementById('btn')
let p = document.getElementById('p');
let number = 0;

//Se obtiene el parrafo y luego se aplica un split para separar las palabras para luego contar su cantidad de palabras y despues determinar cual es mayor
function Higher(){
    let string = document.getElementById('string').value
    let arrString = string.split(' ');

    arrString.forEach((element,i)=>{
        if(element.length > number){
            number = element.length;
            p.textContent = 'Mayor word: '+ element
            console.log(element)
        }
    
    })   
}

btn.addEventListener('click', ()=>{
    Higher()
})


