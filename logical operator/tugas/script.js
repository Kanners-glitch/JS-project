const ageInput = document.getElementById("ageInput")
const parentPermission = document.getElementById("parentPermission");
const submitBtn = document.getElementById("submitBtn")
const output = document.getElementById("output")

submitBtn.onclick = function () {
    const age = Number(ageInput.value);
    const izinOrtu = parentPermission.checked;

    if (age >= 18) {
        output.textContent = "✅ Kamu boleh masuk karna sudah 18+"
    } else if (age >= 13 && izinOrtu) {
        output.textContent = "✅ Kamu boleh masuk karna sudah izin ortu"
    } else if (age >= 13 && !izinOrtu) {
        output.textContent = "❎ Kamu belum bisa masuk karna belum izin ortu"
    } else {
        output.textContent = "❎ maaf kamu belum bisa masuk"
    }
}