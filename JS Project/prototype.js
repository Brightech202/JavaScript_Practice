
let EmpDetails = function (name, age){
    this.name = name;
    this.age = age;

};

EmpDetails.prototype.getName = function (){
    return this.name;

};

EmpDetails.prototype.getAge = function (){
    return this.age;

};

let emp = new EmpDetails('Bright', 27);
let emp8 = new EmpDetails('John', 30);

console.log(emp.getName());

console.log(emp8.getAge());
