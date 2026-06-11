import { Employee } from "./Employee.js";
import { generateId } from "./IdGenerator.js";

export class EmployeeManager {
    constructor() {
        this.employees = new Map();

    }

    // CREATE : Destructuring the object passed into prarameters
    addEmployee({ name, age, department, salary }) {
        const id = generateId();
        const newEmployee = new Employee(id, name, age, department, salary);
        this.employees.set(id, newEmployee);
        return newEmployee;

        debugger
    }

    // LIST : simple conversion of Map values to Array

    listEmployees() {
        this.employees.forEach(employee => {
            employee.displayInfo();
           
        });
          return Array.from(this.employees.values());
    }

    // UPDATE : using spread operator to retain existing data while updating changed fields

    updatedEmployee(id, updatedData) {
        const employee = this.employees.get(id);
        if (!employee) throw new Error(`Employee with ID ${id} not found.`);

    // Spread the old data, spread the updateData to override, create a new employee
        const updatedEmployee = new Employee(
            employee.id,
            updatedData.name || employee.name,
            updatedData.age || employee.age,
            updatedData.department || employee.department,
            updatedData.salary || employee.salary
        );

        this.employees.set(id, updatedEmployee);
        return updatedEmployee;

    }

    // DELETE : using Map's built-in delete method 


    // EmployeeManager.js

deleteEmployeeByInput(inputString) {
    if (!inputString || typeof inputString !== "string") {
        console.error("❌ Error: Please provide a valid string ID or Name.");
        return false;
    }

    const cleanInput = inputString.trim();

    // SCENARIO A: The user passed an ID string directly (e.g., "EMP-101")
    if (this.employees.has(cleanInput)) {
        this.employees.delete(cleanInput);
        console.log(`🗑️ Success: Removed employee via explicit ID: ${cleanInput}`);
        return true;
    }

    // SCENARIO B: The user passed a Name string (e.g., "Bob Johnson")
    // Convert Map values into an array to look for a matching name
    const allEmployees = Array.from(this.employees.values());
    
    // Find the first employee whose name matches (case-insensitive)
    const targetEmployee = allEmployees.find(emp => 
        emp.name.toLowerCase() === cleanInput.toLowerCase()
    );

    if (targetEmployee) {
        // Use the found employee's ID to delete them from the Map
        this.employees.delete(targetEmployee.id);
        console.log(`🗑️ Success: Found and removed "${targetEmployee.name}" using their name string.`);
        return true;
    }

    // SCENARIO C: The input matched absolutely nothing
    console.warn(`⚠️ Warning: No employee matches the ID or Name input: "${inputString}"`);
    return false;
}


    // SEARCH : using filter to find partial matches

    searchEmployees(keyword) {
        const list = Array.from(this.employees.values());
        const lowerKeyword = keyword.toLowerCase();

        return list.filter(emp =>
            emp.name.toLowerCase().includes(lowerKeyword) ||
            emp.department.toLowerCase().includes(lowerKeyword)

        );
    }

    // BONUS : Salary Analytics using Map, Filter, and Reduce

getSalaryAnalytics() {
    // 1. Transform the database Map into an array of numeric salaries using map()
    const salaries = Array.from(this.employees.values()).map(emp => emp.salary);

    // 2. Defensive programming: Handle real-world scenario where company has 0 employees
    if (salaries.length === 0) {
        return { totalPayroll: 0, averageSalary: 0, highestSalary: 0 };
    }

    // 3. Accumulate total spending using reduce()
    const totalPayroll = salaries.reduce((accumulator, currentSalary) => accumulator + currentSalary, 0);

    // 4. Calculate average spending
    const averageSalary = totalPayroll / salaries.length;

    // 5. Use the Spread Operator (...) with Math.max to extract the single highest earner value
    const highestSalary = Math.max(...salaries);

    // 6. Return everything inside a clean, modern analytical object structure
    return {
        totalPayroll,
        // .toFixed(2) prevents long decimal float point numbers, parseFloat converts it back to a clean number
        averageSalary: parseFloat(averageSalary.toFixed(2)), 
        highestSalary
    };
}
}

