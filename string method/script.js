let userName = " BroCode  ";

console.log (userName.charAt(1)); // digunakan untuk mengetahui tempat dari string tapi menggunakan angka 
console.log (userName.indexOf("o")); // digunakan untuk mengetahui tempat  dari string tapi menggunakan huruf 
console.log (userName.lastIndexOf("o")); // digunakan untuk mengetahui tempat  dari string tapi menggunakan huruf dan last 
console.log (userName.length); // digunakan untuk menghitung dari sebuah string 
console.log (userName.trim()) // menghapus semua white space atau space 😹 
console.log (userName.toUpperCase()) // membuat nama menjadi huruf kapital 
console.log (userName.toLowerCase()) // membuat nama menjadi huruf kecil 
console.log (userName.repeat(3)) // membuat string menjadi mengulang

let nama = "  Raisya ";

let result = nama.startsWith(" ")

if (result) {
    console.log ("your name does start with a white space")
} else {
    console.log ("your name does not start with a white space")

}