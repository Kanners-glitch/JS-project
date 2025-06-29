const nameInput = document.getElementById("nameInput")
const scoreInput = document.getElementById("scoreInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

let lulus;
let gagal;

submitBtn.onclick = function () {
    let userName = nameInput.value.trim();
    let upperName = nameInput.toUpperCase(); // ubah jadi huruf besar semua
    let nameLength = nameInput.length; // hitung panjang nama

    let score = number(scoreInput.value)
    let score = scoreInput >= 75 ? 
}