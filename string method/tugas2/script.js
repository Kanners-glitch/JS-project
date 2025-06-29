const myName = document.getElementById("myName");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.onclick = function() {
    const userName = myName.value.trim();


  if (userName === "") {
    output.textContent = "⚠️ Tolong masukkan nama dulu!";
  } else {
    const upperName = userName.toUpperCase();
    output.textContent = `Nama kamu dalam huruf kapital: ${upperName}`;
  }
};
