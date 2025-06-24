const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        result.textContent = `kamu TERLALU TUA untuk memasuki website ini`
    } else if (age == 0) {
        result.textContent = `Kamu gak bisa masuk, karna kamu baru saja lahir`
    } else if (age >= 18) {
        result.textContent = `kamu sudah bisa memasuki website ini`
    } else {
        result.textContent = `kamu belum berumur 18+ untuk memasuki website ini`
    }
}