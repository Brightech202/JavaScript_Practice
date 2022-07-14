

function Worker(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

   let monthlyBonus = 10000;

    let calculateFinalsalary = function (){
        let totalSalary = baseSalary + monthlyBonus;
        console.log('Your total salary is : ' +totalSalary)
    }
    this.getEmpDetails = function (){
        console.log('Name : '+this.name+ '| Age : ' +this.age);

        calculateFinalsalary();
    }
}

let wk1 = new Worker('Bright', 31, 500000);

wk1.getEmpDetails();
