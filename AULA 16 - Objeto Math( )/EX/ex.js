const num = Number(prompt("Digite um numero: "));
const numTitle = document.getElementById("number-title");
const text = document.getElementById("text");
const text1 = document.getElementById("raiz");

numTitle.innerHTML = num

text.innerHTML = ''
text.innerHTML += `<p>Raiz quadrada: ${num ** 0.5}</p>`;
text.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
text.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
text.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
text.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
text.innerHTML += `<p>Com duas casa decimais: ${num.toFixed(2)}</p>`;