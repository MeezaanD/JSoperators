// Addition
// function addition() {
//     console.log(2+2);
// }
// Subtraction
// function subtraction() {
//     console.log(5-2);
// }
// Multiplication
// function multiplication() {
//     console.log(3*3);
// }
// Division
// function division() {
//     console.log(5/2);
// }
// Exponents
// function exponents() {
//     console.log(2**2);
// }
// Modulus
// function modulus() {
//     console.log(5%2);
// }
// Call all functions
// addition();
// subtraction();
// multiplication();
// division();
// exponents();
// modulus();

// Assignments
// let numb1 = 4;
// let numb2 = 6;
// let result = 0;
// result += numb1 + numb2;
// console.log(result);

// let numb1 = 3;
// numb1 += 2;
// console.log(numb1);

// First approach: make use of function 
// let firstName = prompt("Please enter your name:");
// let surname = prompt("Please enter your surname:");
// let salary = prompt("Please enter your salary: ", 0);
// document.write(`
// Name:${firstName}<br>
// Surname:${surname}<br>
// Salary:R${eval(`${salary}*2`)}`);

// My Attempt
// let firstName = prompt("Please enter your firstname:");
// let lastName = prompt("Please enter your lastname:");
// let salary = prompt("Please enter your salary:")

// document.write(`
// Name:${firstName}<br>
// Lastname:${lastName}<br>
// Salary:R${eval(`${salary}*5`)}`);


// function addition(){
//     return 9 + 2;
// }
// document.write(`Sum: ${addition()}`);


// Arrow Method
// let addition = ()=>{
//     document.write(8 + 4);
// }

// addition();

// Array
// let students = [
//     'Gift', 'Asandile',
//     'Deno', 'Javier',
//     'Kevin','Hart',
//     'Dwayne','Johnson'
// ];
// let size = students.length;
// console.log(students);
// console.log(students[0]);
// Last element
// console.log(students[size-1]);
// Second last element
// console.log(students[size-2]);

// let Student = [
//     'Gift','Asandile',
//     'Deno','Javier',
//     'Sakhe','Mkhuseli',
//     'John','Thando',
//     'Joel'
// ];
// console.log(Student);
// let size = Student.length;
// console.log(Student[parseInt((size-1)/2)]);

// Comparison Operators
// let numb1 = 6;
// let numb2 = 7;
// console.log(numb1<numb2);
// console.log(numb1<=numb2);
// console.log(numb1>=numb2);
// console.log(numb1!=numb2);
// console.log(numb1==numb2);

let salary = parseFloat(prompt("Enter your salary: "));
let age = parseInt(prompt("Enter your age: "));
let qualified = (salary >=5000) &&
(age > 17);

document.write(qualified);