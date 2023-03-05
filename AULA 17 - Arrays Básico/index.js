// Os arrays são uma lista de coisas

//             0123456789..... (INDICES)
const aluno = "Marcos Lenilson"; // Toda String é indexada... ou seja... tem um numero/posição para cada letra

console.log(aluno[0]); // Indice da letra que esta na posição 0 = 'M'
console.log(aluno.indexOf("Marcos")); // Indice da palavra 'Marcos' = 0

// --------------------------------------------------------------------------------------

//Os arrays são indexados por elementos presentes dentro dele..
//                 0         1         2          3     4    5     6
const names = ["Marcos", "Daniel", "Isabela", "Raiane", 1, null, true]; // Tentaremos manter o array sempre consiso, com um tipo de dado... Ex: somente strings, ou somente numbers.

console.log(names[1]); // Retorna 'Daniel' devido estamos aqui especificado o elemento do array que queremos que apareça
console.log(names[2]); // Retorna 'Isabela'
console.log(names[3]); // Retorna 'Raiane'
console.log(names[4]); // Retorna 1

// --------------------------------------------------------------------------------------

// Podemos reatribuir valores em arrays
names[3] = "Paolino";
console.log(names); // O index 3 do array não será mais 'Raiane' e sim 'Paolino'

// --------------------------------------------------------------------------------------

// Podemos acrescentar mais itens à nossa lista  de duas formas

names[7] = 'Henrique'; // Note que não temos indice 7 no array
// Podemos ter um problema aqui... Para indicar qual o indice para ser o ultimo, temos que saber o tamanho do array... para isso, usamos o método length 

names[names.length] = 'Luisa'; // Adiciona ao fim do array
names[names.length] = 'Marcela'; // Adiciona ao fim do array
names[names.length] = 'Epaminondas'; // Adiciona ao fim do array
console.log(names); 
console.log(names.length); // Essa propriedade mostra o tamanho do array em indices

names.push('Pedro'); // Esse método vai acrescentar o 'Pedro' na ultima posição = names[8]
console.log(names); // retorna ['Marcos',  'Daniel', 'Isabela', 'Paolino', 1, null, true,     'Henrique', 'Pedro'  ]
names.unshift('Leonardo'); // Esse método vai acrescentar o 'Pedro' na primeira posição = names[0]... Uma vez que o indice 0 era o 'Marcos', agora ele vira indice 1 e o indice 0 passa a ser o 'Leonardo'
console.log(names); // 'Leonardo' aparece na posição 0

// --------------------------------------------------------------------------------------

// Podemos TIRAR itens da nossa lista

names.pop(); // Esse método tira o ultimo item do array, no caso tirou o 'Pedro'
names.pop(); // Esse método tira o ultimo item do array, no caso tirou o 'Epaminondas'
names.pop(); // Esse método tira o ultimo item do array, no caso tirou o 'Marcela'
names.pop(); // Esse método tira o ultimo item do array, no caso tirou o 'Luisa'
console.log(names); 

// Posso salvar esse item removido em uma variável
const remove = names.pop(); // Esse método tira o ultimo item do array, no caso tirou o 'Henrique'
console.log(remove); // Retorna 'Henrique'

names.shift(); // Esse método tira o PRIMEIRO item do array, no caso tirou o 'Leonardo'
names.shift(); // Esse método tira o PRIMEIRO item do array, no caso tirou o 'Marcos'
names.shift(); // Esse método tira o PRIMEIRO item do array, no caso tirou o 'Daniel'

console.log(names); // Retorna [ 'Isabela', 'Paolino', 1, null, true ]

// OBS: TODAS ESSAS MUDANÇAS ALTERAM OS INDICES... Para que isso não aconteça fazemos isso 

// delete names[1];
console.log(names); // [ 'Isabela', <1 empty item>, 1, null, true ], os indices permanecem os mesmo, porem o item deletado fica dessa forma <1 empty item>
console.log(names[1]); // retorna UNDEFINED 

// --------------------------------------------------------------------------------------

// Podemos tambem "FATIAR" o array com o SLICE()

// console.log(names); // Retornando [ 'Isabela', 'Paolino', 1, null, true ]
console.log(names.slice(0, 2)); // Retorna uma cópia de parte de um array no caso [ 'Isabela', 'Paolino' ], pois 0 é o inicio da cópia e 2 o fim(que não é incluido no caso o indice 2 = 1)... Se eu quisesse que o indice 2 aparecesse no lugar de 2 seria o 3... veja abaixo
console.log(names.slice(0, 3)); // Retorna [ 'Isabela', 'Paolino', 1 ]

// Slice() com numeros negativos, fatiam do fim para o começo
console.log(names.slice(0, -1)); // Retorna [ 'Isabela', 'Paolino', 1, null ]... Note que o 'true' não apareceu

console.log(names.slice(0, -2));// Retorna [ 'Isabela', 'Paolino', 1 ]... Note que nem o  'true' e nem o 'null' apareceu

// --------------------------------------------------------------------------------------

// Todo array é um objeto... Como saber?

console.log(typeof names); // Retorna OBJECT
console.log(names instanceof Array); // Retorna true ou false --- PARA TER A CERTEZA DE QUE É UM ARRAY