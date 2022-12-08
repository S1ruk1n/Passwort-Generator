
const password_erstellen = document.getElementById("pwd_txt");
var Großbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz";
const Sonderzeichen = "@#$%^&*";
const Zahlen = "0123456789";
const generate = document.getElementById("generate");
const copy = document.getElementById("clipboard");
var pwd_length = document.getElementById("slider");


generate.addEventListener('click', () => {
    let password = "";
    var checked = document.getElementById("checkbox").checked;
    var GB = Großbuchstaben;
    console.log(checked);
    if (checked) {
        GB += "@#$%^&*";
    }
    for (var i = 0; i < pwd_length.value; i++) {
        let pwd = GB[Math.floor(Math.random() * GB.length)];
        password += pwd;
    }
    password_erstellen.innerText = password;
    GB = string;
});


generate.addEventListener('click', () => {
    let password = "";
    var checked = document.getElementById("checkbox").checked;
    var ZH = Zahlen;
    console.log(checked);
    if (checked) {
        GB += "0123456789";
    }
    for (var i = 0; i < pwd_length.value; i++) {
        let pwd = ZH[Math.floor(Math.random() * ZH.length)];
        password += pwd;
    }
    password_erstellen.innerText = password;
    GB = string;
});




copy.addEventListener('click', () => {
    navigator.copy.writeText(password_erstellen.innerText);
    prompt("Passwort wurde kopiert");
});