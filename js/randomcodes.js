var code = "";
var getCode = "";
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var btnvalue = true;

function generateCode() {
    code = "";
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length);
        code += str.charAt(char);
    }
    return code;
}

document.getElementById("codes").innerHTML = generateCode();

function disableButton(btnvalue) {
    var submitBtn = document.getElementById("submit");

    if (btnvalue === true) {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "#cccccc";
        submitBtn.style.cursor = "not-allowed";
    } else {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "#4977D1";
        submitBtn.style.cursor = "pointer";
    }
}

document.getElementById("randomcode").addEventListener("keyup", evaluateCode);

function evaluateCode() {
    getCode = document.getElementById("randomcode").value;

    var cleanInput = getCode.trim();
    var cleanCode = code.trim();

    if (cleanInput.length === 8 && cleanInput === cleanCode) {
        disableButton(false);
    } else {
        disableButton(true);
    }
}