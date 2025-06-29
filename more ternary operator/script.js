const myName = document.getElementById("myName");
const mySubmit = document.getElementById("mySubmit");
const output = document.getElementById("output");

mySubmit.onclick = function () {
    let userName = myName.value.trim();
    let upperName = userName.toUpperCase();
    let nameLength = userName.length;   


        output.innerHTML = `
        Nama kamu: ${userName} <br>
        Huruf kapital: ${upperName} <br>
        Panjang nama: ${nameLength} karakter<br>
    `;
}