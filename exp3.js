class Employee{
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }
    calculateSalary() {
        return this.basicSalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
    super(id, name, basicSalary);
    this.incentive = incentive;
    }
    calculateSalary() {
    return this.basicSalary+this.incentive;
    }
}
let employee1 = new Employee(101, "Jazz", 30000);
let manager1 = new Manager(102, "Dee", 50000, 10000);

console.log("Employee Details");
console.log("ID:", employee1.id);
console.log("Name:", employee1.name);
console.log("Salary:", employee1.calculateSalary());
console.log("Manager Details");
console.log("ID:", manager1.id);
console.log("Name:", manager1.name);
console.log("Basic Salary:", manager1.basicSalary);
console.log("Incentive:", manager1.incentive);
console.log("Total Salary:", manager1.calculateSalary());