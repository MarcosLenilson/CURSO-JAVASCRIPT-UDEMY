// No navegador temos um OBJETO chamado WINDOW 



// //## ALERT
// // Retorna UNDEFIND
// alert('Olá! Marcos Lenilson aqui! '); // Atalho ( window.alert( ) ) para chamar uma função que tem DENTRO do OBJETO WINDOW 
// window.alert('Marcos Lenilson');



// //## CONFIRM
// // Retorna um BOOLEAN = True ou False
// confirm('Deseja apagar a msg'); // Atalho ( window.confirm( ) ) para chamar uma função que tem DENTRO do OBJETO WINDOW 
// window.confirm('Apaga ????');
// // Podemos capturar a decisão => TRUE = clicar em OK e FALSE = clicar em CANCELA
// const confirma = window.confirm('O que vai ser, TRUE ou FALSE ??? ');
// console.log(confirma);



//## PROMPT
// prompt('Digite algo...'); // Atalho ( window.prompt( ) ) para chamar uma função que tem DENTRO do OBJETO WINDOW 
// window.prompt('Digite novamente');
// Podemos capturar o que foi digitado
// let digitado = window.prompt('Digite uma frase...');
// console.log(digitado);

// let num1 = prompt('Digite um valor:');
// let num2 = prompt('Digite outro valor:');
// console.log(num1 + num2);  //==>> OBS: Percebemos que aqui ele mostra a junção(CONCATENAÇÃO) dos valores e não a soma ... NO PROMPT TUDO É STRING
// Converter para number
let num3 = parseInt(prompt('Digite um valor:')); // OUuuuu
let num4 = parseFloat(prompt('Digite outro valor:')); // OUuuuu
let num5 = Number(prompt('Digite mais um valor:'));

const resultado  = num3 + num4 + num5;

console.log(resultado);
