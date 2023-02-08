// console.log('João nasceu em 1986.');
// console.log('Em 2000, João conheceu Maria.');
// console.log('João casou-se com Maria em 2012.');
// console.log('Em 2015, nasceu o primeiro filho de João.');
// console.log('O filho de João se chama Marcos ');

// const name = 'João'; // const é a mesma coisa que Var

// console.log(name, 'nasceu em 1986.');
// console.log('Em 2000,', name, 'conheceu Maria.');
// console.log(name, 'casou-se com Maria em 2012.');
// console.log('Em 2015, nasceu o primeiro filho de', name, '.');
// console.log('O filho de', name, 'se chama Marcos. ');

// const name1 = 'Marcos'; // Toda Constante deve ser inicializada SEMPRE
// console.log(name1);  // Variável declarada mas não inicializada

// // name1 = 'Marcos' // Constante não podem ter seus valores REATRIBUÍDOS 

// const num1 = 5
// const num2 = 10
// let soma = num1 + num2
// soma = soma * 4
// soma = soma * 10
// soma = soma * 1.5659
// console.log(typeof soma); // Retorna o ultimo valor atribuido ==>> soma = soma * 1.5659



// const subtrair = num1 - num2
// const mult = num1 * num2
// const divisao = num1 / num2
// console.log(subtrair);
// console.log(mult);
// console.log(divisao);



//! Sempre utilize const para variaveis que possam ser alterados no futuro 
//! Não pode ter variaveis com o mesmo nome
//! Não podemos redeclarar Constante
//! Não podemos criar Constante com palavras reservadas
//! Constante precisam ter nomes SIGNIFICATIVOS
//! O nome da Constante não pode começar com numeros
//! Constantes Não pode ter espaços no nome
//! Sempre se utiliza o camelCase
//! São Case-sensitive




//! EXPLICAÇÃO DA DIFERENÇA ENTRE CARACTERES
const aMinusculo = 'a';
const aMaiusculo = 'A';
 
console.log(
  'Letra',
  aMinusculo,
  'Hexadecimal',
  aMinusculo.charCodeAt(0).toString(16),
  'Binário',
  aMinusculo.charCodeAt(0).toString(2),
); // Letra a Hexadecimal 61 Binário 1100001
 
console.log(
  'Letra',
  aMaiusculo,
  'Hexadecimal',
  aMaiusculo.charCodeAt(0).toString(16),
  'Binário',
  aMaiusculo.charCodeAt(0).toString(2),
); // Letra A Hexadecimal 41 Binário 1000001

console.log('a' === 'A'); // false