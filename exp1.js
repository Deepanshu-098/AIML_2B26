class Student{
    static count = 0;
    constructor(name, rollNo, marks)
    {
        this.name = name;
        this.rollNo = rollNo;
        this.marks =marks;
        Student.count++;
    }
    display()
    {
    console.log("Roll No:", this.rollNo);
    console.log("Name:", this.name);
    console.log("Marks:", this.marks);

    if (this.marks >= 40) {
    console.log("Result: Pass");
    } else {
    console.log("Result: Fail");
    }
    }
}
let s1 = new Student("Dee","501", "87");
let s2 = new Student("AC", "502", "97");
let s3 = new Student("DC","505","91")

s1.display();
s2.display();
s3.display();
console.log(Student.count)