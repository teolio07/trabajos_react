let numbers = [1,10,11,12,13,15,19,21,1,50];
let arrNumbers = [];
let number = 0;

let numberOrder = [];

//elimina numeros repetidos 
numbers.forEach((element,i)=>{
    numbers.forEach((element2,i2)=>{
    if(element < element2){
        
         if(!arrNumbers.includes(element)){arrNumbers.push(element)}
    }
    })
})

//ordena
numberOrder = arrNumbers.sort();

//imprime consola
console.log(arrNumbers[numberOrder.length-1])
