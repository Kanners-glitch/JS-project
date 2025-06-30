let login = false;
let username;
let password;

 do{
    username = window.prompt("Masukan Username")
    password = window.prompt("Masukan Password")

    if (username === "usernameSaya" && password === "myPassword" ) {
        login = true;
        console.log(`you are logged in`)
        
    } else {
        console.log("invalid")
    }
} while (!login)