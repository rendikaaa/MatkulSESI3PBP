const profile = {
    firstName: "RENDIKA",
    lastName: "FEBRIAN",
    age: 20
}
let firstName = "GANTENG"
let age = 20;
// menginisialilasi nilai baru melalui dectructing objek
console.log(firstName);
({firstName, age} = profile);
console.log(age);