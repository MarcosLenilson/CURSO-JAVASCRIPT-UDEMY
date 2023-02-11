/*
    Aritméticos
    += Adição | Concatenação
    - = Subtração 
    / = Divisão
    * = Multiplicação 
    ** = Potenciação
    % = Resto da Divição 

*/

const num1 = 10; 
const num2 = 5; 
console.log(num1 + num2) // Adição 
console.log(num1 - num2) // Subtração
console.log(num1 / num2) // Divisão
console.log(num1 *  num2) // Multiplicação
console.log(num1 **  num2) // Potenciação 5 elevado a 10
console.log(num1 % num2) // Resta da divisão de 10 / 5 = 0




const num3 = '50'; // Variável STRING
console.log(num2 + num3); // Se qualquer uma das variáveis for uma STRING, o sinal de ( + ) faz concatenação 


// PRECEDENCIAS 

/**
 ORDEM DE PRESCEDENCIA
    1ª - ( )
    2ª - **
    3ª - * / %
    4ª - + -
*/

const num4 = 3; 
const num5 = 5; 
const num6 = 4;

console.log(num4 + num5 * num6); // Neste caso a Multiplicação vem primeiro

// Alterando a PRECEDENCIA
console.log((num4 + num5) * num6); // Neste caso, os valores dentro de parenteses vem primeiro


// PAREI O VIDEO EM 08m30s