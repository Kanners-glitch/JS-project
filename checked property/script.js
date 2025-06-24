const myVisa = document.getElementById("myVisa");
const myPay = document.getElementById("myPay");
const myMaster = document.getElementById("myMaster");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");

mySubmit.onclick = function () {
    // Checkbox
    if (myCheck.checked) {
        result.textContent = `You are subscribed`;
    } else {
        result.textContent = `You are NOT subscribed yet`;
    }

    // Radio Button
    if (myVisa.checked) {
        subResult.textContent = "Payment method: Visa";
    } else if (myPay.checked) {
        subResult.textContent = "Payment method: PayPal";
    } else if (myMaster.checked) {
        subResult.textContent = "Payment method: MasterCard";
    } else {
        subResult.textContent = "No payment method selected";
    }
};
