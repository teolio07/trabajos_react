let string = document.getElementById('string');
let newString = '';
let btn = document.getElementById('btn')

//invierte la cadena
function reverse(string){
    for(let i = string.length-1; i>= 0;i--){
        newString += string[i] 
    }   

    console.log(newString);
}

btn.addEventListener('click', ()=>{
    reverse(string.value)
})


//4 mintutos


