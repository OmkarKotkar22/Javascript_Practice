// Stack Memory : All premitive data types stored in the Stack Memory
// "Heap Memory: Non-primitive data types are stored in heap memory, and when we need to access them, they are provided by reference."

let a = "Welcome to Javascript";
 
let b = a;
b = "Welcome to HTML"
console.log(b);

let user1 = {
    email : "user@gmail.com",
    UPIid : "user@sbi"
}

let user2 = user1;

user2.email = "User2@gmail.com";

console.log(user1.email);
console.log(user2.email);

console.log(a);