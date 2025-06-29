/// method chaining adalah menggunakan kode dalam satu linne

let userName = prompt("enter your name");
// tanpa method chaining

userName = userName.trim()
let letter = userName.charAt(0)
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars
console.log(userName)


// menggunakan Method Chaining
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName)