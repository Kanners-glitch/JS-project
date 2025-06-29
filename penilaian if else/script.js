const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.onclick = function (){
    const name = nameInput.value.trim();
    const nilai = Number(scoreInput.value.trim());

    if (name === "" || isNaN(nilai)) {
        alert (`tolong masukan nilai dengan benar`);
        return;
    }

    let grade = "";

    if (nilai > 90) {
        grade = "Nilai kamu A (sangat baik)";
    } else if (nilai > 80) {
        grade = "Nilai kamu B (baik)";
    } else if (nilai > 70) {
        grade = "Nilai kamu C (cukup)";
    } else if (nilai > 60) {
        grade = "Nilai kamu D (kurang)";
    } else {
        grade = "Nilai kamu E (kurang sekali)";
    }   

alert (`nilai kamu ${grade}`);
    output.textContent = `${name}, nilai kamu adalah ${nilai}, dan predikat kamu: ${grade}`


}