const myName = document.getElementById("myName");
const myAge = document.getElementById("myAge");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.onclick = function () {
    const name = myName.value;
    const age = Number(myAge.value);

    output.textContent = age >= 18
        ? `Halo ${name}, kamu sudah dewasa!`
        : `Halo ${name}, kamu masih di bawah umur.`;
}
