const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.onclick = function () {
    // Ambil nilai input
    let userName = nameInput.value.trim(); // ambil dan hapus spasi
    let score = Number(scoreInput.value);  // konversi nilai ke number

    // Validasi input
    if (userName === "" || isNaN(score)) {
        output.innerHTML = "Tolong isi nama dan nilai dengan benar.";
        return;
    }

    // Buat data lainnya
    let upperName = userName.toUpperCase();
    let nameLength = userName.length;
    let status = score >= 75 ? "Lulus ✅" : "Gagal ❌";

    // Predikat nilai
    let predikat = "";
    if (score >= 90) {
        predikat = "A";
    } else if (score >= 80) {
        predikat = "B";
    } else if (score >= 70) {
        predikat = "C";
    } else if (score >= 60) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    // Tampilkan hasil
    output.innerHTML = `
        Nama kamu: ${userName}<br>
        Huruf kapital: ${upperName}<br>
        Jumlah huruf: ${nameLength}<br>
        Status: ${status}<br>
        Predikat: ${predikat}
    `;
}
