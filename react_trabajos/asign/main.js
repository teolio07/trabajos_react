class Student {
    constructor(name,surname,age,distance){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.distance = distance;
    }
    createStudent(){
        let name = this.name;
        let surname = this.surname;
        let age = this.age;
        let distance = this.distance;
        let student = {"name":name,"surname":surname,"age":age,"distance":distance};
        return student;
    }
}


let form = document.forms["register"];
let studentName = form.elements["name"];
let studentSurname = form.elements["surname"];
let studentAge = form.elements["age"];
let studentDistance = form.elements["km"];
let btnRegister = form.elements["btn-register"];


let student;
let addStudent;
let html ;


let dayShift = [];
let afterShift = [];
let nightShift = [];

let containerDayShift = document.getElementById('container-day-shift');
let containerAfterShift = document.getElementById('container-after-shift');
let containerNightShift = document.getElementById('container-night-shift');



btnRegister.addEventListener("click",(e)=>{
    
    e.preventDefault();
    html = ``;
    student = new Student(studentName.value,studentSurname.value,studentAge.value,studentDistance.value);
    addStudent = student.createStudent();
    if(dayShift.length == 15){  
      alert('se lleno')
      return true
    }

    if(studentAge.value >= 18 && studentDistance.value > 10){
        nightShift = []
        afterShift = []
        dayShift = []; 
        alert('hola')
        afterShift.push(addStudent);
    }else if(studentAge.value >= 18 && studentDistance.value <= 10){
        nightShift = []
        afterShift = []
        dayShift = [];
        nightShift.push(addStudent)
    }else if(studentAge.value < 18 || studentDistance.value > 10){
        nightShift = []
        afterShift = []
        dayShift = [];
        dayShift.push(addStudent)
    }

    dayShift.forEach((element,i)=>{
        html = `
                <div class='box day'>
                    <h2>Estudiante: </h2><p>${element.name}</p> <p>${element.surname}</p> <p>${element.age}</p>  <p>${element.distance}</p>
                    
                </div>`;
        containerDayShift.innerHTML += html;
    }) 

    afterShift.forEach((element,i)=>{
        html = `
                <div class='box after'>
                    <h2>Estudiante: </h2><p>${element.name}</p> <p>${element.surname}</p> <p>${element.age}</p>  <p>${element.distance}</p>
                    
                </div>
                `;
        containerAfterShift.innerHTML += html;
    }) 

    nightShift.forEach((element,i)=>{
        html = `
         <div class='box after'>
                    <h2>Estudiante: </h2><p>${element.name}</p> <p>${element.surname}</p> <p>${element.age}</p>  <p>${element.distance}</p>
                    
                </div>
`;
        containerNightShift.innerHTML += html;
    }) 
})





