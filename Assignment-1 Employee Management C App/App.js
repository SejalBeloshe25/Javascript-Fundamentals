// app.js
import { EmployeeManager } from './EmployeeManager.js';
import { Employee } from './Employee.js';
import {generateId } from './IdGenerator.js'

// Initialize the system
const manager = new EmployeeManager();

// 1. Add Employees (Create)
const emp1 = manager.addEmployee({ name: "Alice Smith", age: 22, department: "Engineering", salary: 85000 });
const emp2 = manager.addEmployee({ name: "Bob Johnson", age: 22, department: "Design", salary: 75000 });
const emp3 = manager.addEmployee({ name: "Charlie Brown", age:22, department: "Engineering", salary: 95000 });
const emp4 = manager.addEmployee({ name: "John Smith", age:22, department: "Design", salary: 55000 });

// window.manager = manager;

console.log("--- Employee List ---");
console.log(manager.listEmployees());

// 2. Update Employee (Update)
console.log("\n--- Updating Alice's Salary ---");
manager.updatedEmployee(emp1.id, { salary: 90000 });
console.log(manager.employees.get(emp1.id));

console.log("\n--- Updating John's Salary ---");
manager.updatedEmployee(emp4.id, { salary: 80000 });
console.log(manager.employees.get(emp4.id));

// 3. Search Employees (Search)
console.log("\n--- Search Results for 'Engineer' ---");
console.log(manager.searchEmployees("Engineer"));


// 4. Search Employees (Search)
console.log("\n--- Search Results for 'johnson' ---");
console.log(manager.searchEmployees("johnson"));

// Delete Employee

// ==========================================
// TEST 1: Searching for an ID that DOES NOT exist
// ==========================================
console.log("\n--- Testing Non-Existent ID Search ---");
const missingResult = manager.deleteEmployeeByInput("EMP-999"); 

if (missingResult === null) {
    console.log("✅ System safely handled the missing ID without throwing an error!");
}

// ==========================================
// TEST 2: Removing an Employee by their raw ID String
// ==========================================
console.log("\n--- Testing Removal via ID String ---");
// We pass the string directly instead of a variable reference
manager.deleteEmployeeByInput("EMP-101"); 

// ==========================================
// TEST 3: Removing an Employee by their Name String
// ==========================================
console.log("\n--- Testing Removal via Name String ---");
// We type the exact name string directly into the function call
manager.deleteEmployeeByInput("Bob Johnson");

// ==========================================
// TEST 4: Attempting to remove someone who isn't there
// ==========================================
console.log("\n--- Testing Failed Removal ---");
manager.deleteEmployeeByInput("John Doe");

// ==========================================
// Final Visual Database Verification
// ==========================================
console.log("\n--- Final Active Staff List ---");
console.table(manager.listEmployees());
console.log("Total Employees Remaining:", manager.listEmployees().length);

// Salary Analytics : 

// --- 1. Initial Salary Analytics ---
console.log("\n--- 📊 Salary Analytics (Before Deletion) ---");
const initialAnalytics = manager.getSalaryAnalytics();
console.log("Total Payroll Spending: $", initialAnalytics.totalPayroll.toLocaleString());
console.log("Average Staff Salary:   $", initialAnalytics.averageSalary.toLocaleString());
console.log("Highest Single Salary:  $", initialAnalytics.highestSalary.toLocaleString());


// --- 2. Run your deletion step ---
console.log("\n--- Processing Charle's Deletion ---");
// manager.deleteEmployee(emp2.id); 
const isDeleted = manager.deleteEmployeeByInput("EMP-103");
console.log("Deletion Successful:", isDeleted);


// --- 3. Post-Deletion Salary Analytics ---
console.log("\n--- 📊 Salary Analytics (After Deletion) ---");
const postDeleteAnalytics = manager.getSalaryAnalytics();
console.log("New Total Payroll:     $", postDeleteAnalytics.totalPayroll.toLocaleString());
console.log("New Average Staff Salary: $", postDeleteAnalytics.averageSalary.toLocaleString());
console.log("New Highest Single Salary:$", postDeleteAnalytics.highestSalary.toLocaleString());