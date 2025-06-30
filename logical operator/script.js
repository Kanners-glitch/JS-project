// // logical operator


 
// // 1. `&&` → **AND** (*dan*) 
// //✅ Hanya akan **true** jika **kedua kondisi bernilai true**.

// // contoh &&

// const temp = 20;

// if (temp > 0 && temp <= 30 ) {
//     console.log("cuaca nya bagus")
// } else {
//     console.log("cuaca nya kurang bagus")
// }

// //contoh ||


// if (temp > 0 || temp <= 30 ) {
//     console.log("cuaca nya bagus")
// } else {
//     console.log("cuaca nya kurang bagus")
// }

const tempt = 35;

if(tempt <= 0 || tempt > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}