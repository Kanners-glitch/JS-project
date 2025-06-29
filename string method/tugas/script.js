const myName = document.getElementById("myName");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.onclick = function () {
    const trimmedChar = myName.value.trim();
    const firstChar = trimmedChar.charAt(0);
    const panjang = trimmedChar.length;
    const isCapital = firstChar === firstChar.charAt(0).toUpperCase();
    const jumlah = trimmedChar.toLowerCase().split("a").length -1;
    const capitalA = trimmedChar.toUpperCase();
    const capitalB = trimmedChar.toLowerCase();

    output.innerHTML = `
    Hallo nama Trim kamu adalah = ${trimmedChar}<br>
    Hallo nama awal kamu adalah = ${firstChar}<br>
    Hallo panjang dari nama mu adalah = ${panjang}<br>
    Hallo apakah nama mu memiliki awalan kapital = ${isCapital}<br>
    Hallo berapa jumlah huruf 'a' dalam nama mu = ${jumlah}<br>
    Hallo nama mu jika diubah menjadi huruf kapital menjadi = ${capitalA}<br>
    Hallo nama mu jika diubah menjadi huruf kecil menjadi = ${capitalB}<br>
    `
}
