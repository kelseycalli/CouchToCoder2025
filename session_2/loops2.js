// loops through objects

const employees = [
    {name: "John Doe", salary: 60000, department: "marketing"},
    {name: "Alice Cooper", salary: 75000, department: "engineering"},
    {name: "Seamus Finnigan", salary: 85000, department: "logistics"}
 ]


// figure out the average salary
// tip: best practice to name value singular of object/array
let totalSalary = 0;

for (employee of employees){
    totalSalary = totalSalary + employee.salary;
} 

const average = totalSalary / employees.length;

for(employee of employees) {
    if(employee.salary > average) {
        console.log(employee.name, "has a salary more than the average.")
    }
    
}

console.log(average)