

class Employees{

    setEmployeeDetails(name, id, phoneNumber){
        this.name = name;
        this.id = id;
        this.phoneNumber = phoneNumber;
    }

    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNumber(){
        return this.phoneNumber;
    }
}

let emp3 = new Employees();

emp3.setEmployeeDetails('Bright', 1001, 08062717152);

console.log(emp3.getEmpName());
console.log(emp3.getEmpId());
console.log(emp3.getEmpPhoneNumber());