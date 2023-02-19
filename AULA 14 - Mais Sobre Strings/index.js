// As strings são indexadas, ou seja, ela contem indices 
// As strings podem ser ITERADAS, ou seja, podem ser usadas em laço de repetição 
let string = 'Marcos Lenilson'
for (let i = 0; i < string.length; i++){
    console.log(string[i]+string[i] + string[i]);
}

let umaString = 'Um "Texto"'; // Aspas duplas dentro de aspas simples
// Posso especificar qual caracter deve ser mostrado usando o [ ] e a posição do indice
console.log(umaString[5]);

let outraString = "Mais um \"texto\""; // Podemos usar aspas duplas dentro de aspas duplas, porem, usa-se a barra invertida
// Podemos usar varios metodos para nos auxiliar ... chamando o metodo com ( . ) ponto

console.log(outraString.concat( ' em', ' um', ' lindo', ' dia!'));
console.log(umaString + 'em um lindo dia');
console.log(`${outraString} em um lindo dia `);
console.log(outraString.indexOf('um'));

// Podemos usar expressões regulares (REGEX)
console.log(outraString.match(/[a - z]/g));
console.log(outraString.search(/[a - z]/g));
console.log(outraString.replace('um', 'mais um'));

let str = 'O rato roeu a roupa do rei de Roma'
console.log(str.replace(/r/g, '#'));
console.log(str.length);
console.log(str.slice(2, 6));
console.log(str.slice(-4)); // Mesma coisa do Substring
console.log(str.substring(str.length - 4)); //  Mesma coisa do Slice

// Dividir a String em um Array
console.log(str.split(' ')); // Divido pelo espaço
console.log(str.split('r')); // Divido pelo R
console.log(str.split(' ', 2)); // O numero 2 aqui é a quantidade que eu quer que isso se repita
