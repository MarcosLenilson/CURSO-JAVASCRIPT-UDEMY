let num1 = 9.45654
let num2 = Math.floor(num1); // Arredondando para BAIXO = 9
let num3 = Math.ceil(num1); // Arredondando para CIMA = 10
let num4 = Math.round(num1); // Arredonda o valor de acordo com o numero EX: 9.49 = PARA BAIXO // 9.51 = PARA CIMA 
let num5 = Math.max(1, 2, 3, 45, 67, 41, 22, 39, -45, 5); // Retorna o maior numero da lista
let num6 = Math.min(1, 2, 3, 45, 67, 41, 22, 39, -45, 5); // Retorna o menor numero da lista
let num7 = Math.random(); // Retorna um numero qualquer entre 0 e 1 
let num8 = Math.pow(2, 10); // Retorna valor de expoente onde o 2 é o numero que será elevado a 5 ==>> 2
let num9 = 2 ** 10; // O metodo Math.pow() pode ser substituido por esse expressão com o OPERADO **
let mum10 = 100 / 0; // Retorna INFINITY = TRUE
let mum11 = 100 / 0.0000000000001; // Retorna 100000000000000 ==>> Quanto mais eu me aproximo do 0, maior o resultado



let aleatorio = Math.random() * (10 - 5) + 5; // Retorna um numero qualquer entre 5 e 10 
let aleatorio1 = Math.round( Math.random() * (10 - 5) + 5 ); // Retorna um numero qualquer entre 5 e 10 porem sem as casas decimais



console.log(mum11);