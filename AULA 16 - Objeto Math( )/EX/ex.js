const num = prompt("Digite um numero: ");
const numTitle = document.getElementById("number-title");
const text = document.getElementById("text");


numTitle.innerHTML = num
text.innerHTML = `Seu numero - 2 é ${num - 2}`;