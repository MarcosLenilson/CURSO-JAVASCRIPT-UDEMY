/*
    Aritméticos
    += Adição | Concatenação
    - = Subtração 
    / = Divisão
    * = Multiplicação 
    ** = Potenciação
    % = Resto da Divisão 

*/

const num1 = 10; 
const num2 = 5; 
// console.log(num1 + num2) // Adição 
// console.log(num1 - num2) // Subtração
// console.log(num1 / num2) // Divisão
// console.log(num1 *  num2) // Multiplicação
// console.log(num1 **  num2) // Potenciação 5 elevado a 10
// console.log(num1 % num2) // Resta da divisão de 10 / 5 = 0




const num3 = '50'; // Variável STRING
// console.log(num2 + num3); // Se qualquer uma das variáveis for uma STRING, o sinal de ( + ) faz concatenação 


//! PRECEDÊNCIAS 

/**
 ORDEM DE PRECEDÊNCIA
    1ª - ( )
    2ª - **
    3ª - * / %
    4ª - + -
*/

const num4 = 3; 
const num5 = 5; 
const num6 = 4;

// console.log(num4 + num5 * num6); // Neste caso a Multiplicação vem primeiro

//! Alterando a PRECEDÊNCIA 
// console.log((num4 + num5) * num6); // Neste caso, os valores dentro de parênteses vem primeiro
// console.log(num4 * num5 / num6); // Neste caso, as operações segue normalmente



//! Operador de INCREMENTO == --
let contador = 10;

contador++; // Pode ser PÓS OPERADOR: Executa a ação e depois o incremento =>> Não pode usar const
// Exemplo
// console.log(contador++); // Exibe primeiro o valor depois ele é incrementado 
// console.log(contador); // Nessa linha ja está incrementado 

++contador; // Pode ser PRÉ OPERADOR: 1ª faz a conta, depois retorna o valor =>> Não pode usar const
// console.log(++contador);// Incrementa primeiro e depois mostra
// console.log(contador); // Nessa linha ja está incrementado 

//! Operador de DECREMENTO = ++


contador-- // Pode ser PÓS OPERADOR: Executa a ação e depois o incremento =>> Não pode usar const
// Exemplo
// console.log(contador--) // Exibe primeiro o valor depois ele é decrementado 
// console.log(contador); // Nessa linha ja está decrementado 

--contador; // Pode ser PRÉ OPERADOR: 1ª faz a conta, depois retorna o valor =>> Não pode usar const
// console.log(--contador);// Decrementa primeiro e depois mostra
// console.log(contador); // Nessa linha ja está decrementado 


//! Incremento com a própria variável ==> NUNCA FAZER ISSO 
const passo = 2;
let contador1 = 0;

contador1 = contador1 + passo;
// console.log(contador1); // O console mostrará 2
contador1 = contador1 + passo;
// console.log(contador1);// O console mostrará 4
contador1 = contador1 + passo;
// console.log(contador1);// O console mostrará 6


//! Incremento com a própria variável ==> SEMPRE FAZER ISSO 

const passo1 = 50;
let contador2 = 0;

contador2 += passo1 // Isso é igual isso =>> contador2 = contador2 + passo1
// console.log(contador2);
contador2 += passo1 // Isso é igual isso =>> contador2 = contador2 + passo1
// console.log(contador2);
contador2 += passo1 // Isso é igual isso =>> contador2 = contador2 + passo1
// console.log(contador2);

//! Operadores de ATRIBUIÇÃO

let contador3 = 3;
contador3 += 2;
contador3 /= 2;
contador3 *= 2;
contador3 -= 22;
contador3 **= 2;
// console.log(contador3);

//! NaN = Not a Number

const a = 10;
let b = 'Marcos';
// console.log(a * b); // retorna NaN = Not a Number
b = '5'; // O proprio Javascript converte a string em number para tentar resolver a questão
// console.log(a * b); // Depois da conversão, retorna 50
// console.log(typeof b);
b = 'L5'
// console.log(a * b); // o Javascript não converte devido ter dois tipos de dado na String
// console.log(typeof b); 

//! Converte string em NUMBER

let c = parseInt('5')
// console.log(typeof c);
let d = parseFloat('5.6')
// console.log(typeof d);
let e = Number('25')
// console.log(typeof e);
