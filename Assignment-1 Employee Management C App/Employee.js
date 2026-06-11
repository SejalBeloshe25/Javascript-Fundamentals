export class Employee {
    constructor(id, name, age, department, salary) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;

    }

getDetails() {
        return `${this.name} is of ${this.age} in ${this.department} earning ${this.salary}.`;
    };


    displayInfo() {
        const {
            id, name, age, department, salary } = this;

        console.log(`ID: ${id}
                Name: ${name}
                Age: ${age}
                Department: ${department}
                Salary: ${salary}`
        );
    }
}

