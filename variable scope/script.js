// variable scope = where a variable is recognized in the code and accessible (locally or globally).

//example of variable scope
// let x = 1;

myFunction2();

function myFunction2() {
    let x = 1;
    console.log(x); // 1, x is accessible here
}

function myFunction2() {
    let x = 2;
    console.log(x); // 1, x is accessible here
}