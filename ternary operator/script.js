const myName = document.getElementById("myName ");
const mySubmit = document.getElementById("mySubmit");
const output = document.getElementById("output");

mySubmit.onclick = function () {
    let userName = myText.value.trim(); // ambil input + hapus spasi
    let upperName = userName.toUpperCase(); // ubah jadi huruf besar semua
    let nameLength = userName.length; // hitung panjang nama
    let hasA = userName.toLowerCase().includes("a"); // cek apakah ada huruf 'a'

    output.innerHTML = `
        Nama kamu: ${userName} <br>
        Huruf kapital: ${upperName} <br>
        Panjang nama: ${nameLength} karakter<br>
        Mengandung huruf "a": ${hasA ? "Iya" : "Tidak"}
    `;
}