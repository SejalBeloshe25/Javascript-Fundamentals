// // // ASSIGNMENT 1 : EMPLOYEE MANAGEMENT SYSTEM 

// // const employee = [       // an Array

// //     {       // an object 
// //     id: 1,
// //     name: "sejal",
// //     department: "IT",
// //     salary: 50000
// // },
// //     {       // an object 
// //     id: 2,
// //     name: "sejal2",
// //     department: "CT",
// //     salary: 60000
// // },
// //     {       // an object 
// //     id: 3,
// //     name: "sejal3",
// //     department: "ENTC",
// //     salary: 70000
// // },
// //     {       // an object 
// //     id: 4,
// //     name: "sejal4",
// //     department: "CHEM",
// //     salary: 80000
// // },
// //     {       // an object 
// //     id: 5,
// //     name: "sejal5",
// //     department: "IT",
// //     salary: 90000
// // },

// // ];

// // // // console.log(employee[2]);               // not ideal


// // // // employee.forEach((employee )=> {         // not better
// // // //     console.log(employee);

// // // // })

// // // employee.forEach((employee) => {              
// // //   console.log(
// // //     `ID: ${employee.id}
// // // Name: ${employee.name}
// // // Department: ${employee.department}
// // // Salary: ${employee.salary}`
// // //   );
// // // });

// // // // Find employee by ID : find()

// // // function findEmployee(id){
// // //     return employee.find(employee => employee.id === id);
// // // }

// // // console.log(findEmployee(3));


// // // // Add a new employee : push()

// // function addEmployee(employee) {
// //     employee.push(employee);
// // }

// // addEmployee = {
// //     id: 6,
// //     name: "sejal6",
// //     department: "IT",
// //     salary: 23000
// // }
// // console.log([...employee,addEmployee]);        // employee list after adding new employee

// // // // Remove an employee

// // // function removeEmployee(id) {
// // //     return employee.filter(employee => employee.id !== id);
// // // }

// // // const updateEmployee = removeEmployee(2);
// // // console.log(updateEmployee);


// // // update salary :
// // function updateSalary(id, newSalary) {
// //    employee1 = employee.find(emp => emp.id === id);

// //     if(employee) {
// //         employee.salary = newSalary;
// //     }
// // }
// // console.log(updateSalary(1,30000));


// // // Filtering employees department wise :



// // let = function getEmployeeByDepartment(department) {
// //     return employee.filter(
// //         employee => employee.department === department
// //     );
// // }

// // console.log(
// //   getEmployeesByDepartment("IT")
// // );


// // ASSIGNMENT 2 : BANKING SYSTEM 

// class BankAccount {
//     constructor(accountHolder, balance) {
//         this.accountHolder = accountHolder;
//         this.balace = balance;
//     }
//     deposit(amount) {
//         this.balance += amount;
//     }
// }

// const account1 = new BankAccount(
//     "sejal",
//     40000
// )

// console.log(account1);

// account1.deposit(2000);
// console.log(account1.balance);

// Functional Programming Challenge :

const student = [
    {
        id: 1,
        name: "sejal",
        marks: 97,
        grade: "A"
    },
    {
        id:2,
        name: "sejal2",
        marks:96,
        grade: "B"
    },
    {
        id:3,
        name:"sejal3",
        marks:95,
        grade:"C"
    },
]

const names = student.map(student => student.name);
console.log(names);
