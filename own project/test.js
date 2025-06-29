const subsBtn = document.getElementById("subsBtn");
const myVisa = document.getElementById("myVisa");
const masterCard = document.getElementById("masterCard");
const payPal = document.getElementById("payPal");
const output = document.getElementById("output");
const subOutput = document.getElementById("subOutput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function() {
    if (subsBtn.checked) {
        subOutput.textContent = `you are subscribed`
    } else {
        subOutput.textContent = `you are NOT subscribed yet`
    }

        if (myVisa.checked) {
        output.textContent = `you are paying with Visa`
    } else if (masterCard.checked) {
        output.textContent = `you are paying with MasterCard`
    } else if (payPal.checked) {
        output.textContent = `you are paying with PayPal`
    } else {
        output.textContent = `OUT OF MONEY!`
    }
}