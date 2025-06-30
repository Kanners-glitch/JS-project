const myName =  document.getElementById("myName")
const myAge =  document.getElementById("myAge")
const parentPermission =  document.getElementById("parentPermission")
const submitBtn = document.getElementById("submitBtn")
const output = document.getElementById("output")

submitBtn.onclick = function () {
    const userName = myName.value.trim();
    const umurSaya = Number(myAge.value);
    const checkbox = parentPermission.checked;

    if (userName === "" || isNaN (umurSaya)) {
        output.textContent = "❎ nama dan usia harus benar.";
        return;
    }

// pakai logical operator
const UpperName = userName.toUpperCase();
const nameLength = userName.length;
const countA = userName.toLowerCase().includes('a');

let status = "";

 if (umurSaya >= 18) {
    status = "✅ Kamu boleh mendaftar tanpa izin orang tua.";
  } else if (age >= 13 && checkbox) {
    status = "✅ Kamu boleh mendaftar karena ada izin orang tua.";
  } else {
    status = "❌ Kamu belum boleh mendaftar.";
  }

  output.innerHTML = `
    Nama (kapital): ${UpperName}<br>
    Panjang nama: ${nameLength} karakter<br>
    Mengandung huruf 'a': ${countA ? "Iya" : "Tidak"}<br>
    Status: ${status}
  `;
};