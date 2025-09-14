// objects are like js version of dictionaries

const employee = {
    firstName: "Kelsey",
    lastName: "Callington",
    jobTitle: "Dental Hygienist",
    salary: 40000,
    currentProjects: ["Exams", "Scaling", "Polishing"],
};

employee.lastName = "Benjamin";



// adding new key and value to object
employee.department = "dentistry";

console.log(employee);

// either way is fine but . easier/preferred
console.log(employee["salary"]);
console.log(employee.salary);

// data type is an number so can used
console.log(employee.salary * 1.2);

// make uppercase
console.log(employee.firstName.toUpperCase());

// access string within array within object
console.log(employee.currentProjects[1]);

// access string within array and within object make uppercase
console.log(employee.currentProjects[1].toUpperCase());










const recipe = {
    title: "Omelette",
    ingredients: ["eggs", "butter", "salt"],
    steps: ["whisk eggs", "add salt", "add butter to pan on med heat", "add eggs"]
    // nested object within and object

}

// take all ingredients and print on screen