const formRegister = document.forms["register"];
let fullName = formRegister.elements['full-name']
let AQ =formRegister.elements["AQ"];
let QQ = formRegister.elements["QQ"];
let EQ = formRegister.elements["EQ"];
const btnRegister = formRegister.elements["btn-register"];


let searchTxt = document.getElementById('search-txt'); 
let inputSearchStudent = document.getElementById('search');
let searchStudent;

const Q1 = 0.3;
const Q2 = 0.3;
const Q3 = 0.4;

let n1=0; 
let n2=0;
let n3 =0;
let definitive = 0;

let student; 
let students = [];

let conside = "";

btnRegister.addEventListener('click',(e)=>{
    e.preventDefault();
              AQ.value= parseFloat(AQ.value).toFixed(2)
              QQ.value= parseFloat(QQ.value).toFixed(2)
              EQ.value= parseFloat(EQ.value).toFixed(2)

if(parseFloat(AQ.value)>5 || parseFloat(AQ.value)>5){return alert('bad data')} 
else if(parseFloat(QQ.value)>5 || parseFloat(QQ.value)>5){return alert('bad data')} 
else if(parseFloat(EQ.value)>5 || parseFloat(EQ.value)>5){return alert('bad data')} 

 
    n1 =AQ.value*Q1;
    n2 =QQ.value*Q2;
    n3= EQ.value*Q3;
    definitive = n1+n2+n3

    if(definitive > 5){alert('something want wrong')}
    else if(definitive > 4.5 && definitive<=5){
        conside = 'Exellent'

    }else if (definitive > 3.5 && definitive<=4.5){
        conside = 'Good';
    }else if(definitive >= 2 && definitive<=3.4){
        conside = 'You have to recover'
    }
       student = {student:fullName.value,
               n1:parseFloat(AQ.value).toFixed(2),
               n2:parseFloat(QQ.value).toFixed(2),
               n3:parseFloat(EQ.value).toFixed(2),
               nDefinitive: definitive.toFixed(2),
               consideration: conside  
}

    students.push(student); 
    console.log(students)
})

inputSearchStudent.addEventListener('keyup', (e)=>{
    searchStudent = students.filter(element => element.student == inputSearchStudent.value)
    console.log(searchStudent[0].student)
    searchTxt.innerHTML = `student name: ${searchStudent[0].student}<br>
                           n1: ${searchStudent[0].n1} <br> 
                           n2: ${searchStudent[0].n2}<br>
                           n3: ${searchStudent[0].n3}<br>
                           definitive: ${searchStudent[0].nDefinitive} <br>
                           consideration: ${searchStudent[0].consideration}
    `;
})
