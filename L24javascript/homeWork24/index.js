
let root = document.getElementById("root");


Studend.prototype.render =  function(){

   root.innerHTML = `
    <h3> student name is: ${this.name} </h3>
    <h3> student age is: ${this.age} </h3>
    <h3> student grade is: ${this.grade} </h3>     
    `;
 

}


function Studend (name, age, grade){
 
    this.name = name,
    this.age = age,
    this.grade = grade

    this.render(name,age,grade);
}



const sArr = new Array;

for(let i = 0; i < 10 ; i++){
   let new_1Student  = new Studend('dolev','32','85');
   sArr.push(new_1Student);
}

console.log(sArr);

// this will create a json file
let bArry = JSON.stringify(sArr);

// at this stage it is a json
window.localStorage.setItem("testArr", bArry);