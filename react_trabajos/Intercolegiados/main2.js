let screen = document.getElementById('screen')
let input = document.getElementById('inputNumber')
let btn = document.getElementById('btn')
let numberGuess = document.getElementById('numberGuess')
let number = 0;

//generar numero aleatorio
function generateNumber(){
    let n = (Math.random()*10);
    number = Math.round(n);
    return number
   
}

// verificar el numero y mostrar la respuesta
function guess(nVerify){
    if(number == nVerify){
        alert('los numeros coiciden')

        resetNumber();
    }
    else{
        alert('no coiciden')}
    

    }


// resetear numero
function resetNumber(){

    number = generateNumber();
    let higher = number + 2; 
    let minor = number - 2;
    numberGuess.textContent =`El numero es mayor ${minor} y menor ${higher}`;
    return number;
}

//resetea el numero al cargar
resetNumber();

//pasar valor a verificar
btn.addEventListener('click', ()=>{
    guess(input.value)
})
