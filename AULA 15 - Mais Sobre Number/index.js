// Padrão IEEE 754-2008

let num1  =  1500; 
let num2 = 2.6;

console.log(num1.toString() + num2); // Convertendo number em string ... retorna 12.6 que é 1 + 2.6 ( Concatenado )

// Alterando a variavel para ser uma string 
//num1  = num1.toString();
console.log(num1 + num2);
console.log(num1.toString(2));

// Arredondando a variavel
let num3 = 10.5658876546546;
console.log(num3.toFixed(2));

console.log(Number.isInteger(num3)); // Retorna TRUE = se o numero é inteiro e FALSE = se não 

let temp = num3 * 'Olá'
console.log(temp); // Retorna NaN
console.log(Number.isNaN(temp)); // Retorna TRUE = conta invalida ou FALSE = se não 

// IMPRECISÃO

let num4 = 0.7;
let num5 = 0.1;
console.log(num4 + num5); // Retorna 0.799999999999999 e não 0.8

num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0
num4 += num5; // 1.1
num4 += num5; // 1.2
num4 += num5; // 1.3
num4 += num5; // 1.4
num4 += num5; // 1.5
num4 += num5; // 1.6
num4 += num5; // 1.7
num4 += num5; // 1.8
num4 += num5; // 1.9
num4 += num5; // 2.0

console.log(num4); // Retorna 0.99999999999999 e não 1.0

// num4 = num4.toFixed(2)
console.log(num4); // Retorna 1.00 mas somente no visual... NÃO RESOLVE O PROBLEMA
console.log(Number.isInteger(num4)); // Retorna 1.00 mas somente no visual... NÃO RESOLVE O PROBLEMA

num4 = parseFloat(num4.toFixed(2));
console.log(num4); // RESOLVEU O PROBLEMA === retorna 2
console.log(Number.isInteger(num4)); // Retorna TRUE pq é 2

// Pode ser resolvido fazendo conta
let num6 = 0.7;
let num7 = 0.1;

num6 = ((num6 * 100 ) + (num7 * 100 )) / 100;
console.log(num6); // Retorna 0.8
num6 = ((num6 * 100 ) + (num7 * 100 )) / 100; // INCREMENTO
console.log(num6); // Retorna 0.9
num6 = ((num6 * 100 ) + (num7 * 100 )) / 100;// INCREMENTO
console.log(num6); // Retorna 1