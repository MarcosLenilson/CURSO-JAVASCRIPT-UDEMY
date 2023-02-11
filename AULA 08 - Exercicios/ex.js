const nome = 'Marcos Lenilson';
const sobrenome = 'Alves Duarte'
let idade = 36 
const anoNasc = 2022 - idade 
const altura = 1.72
let imc; // peso / (altura * altura)
let peso = 91

imc = peso / (altura * altura)

console.log(`Olá, meu nome é ${nome} ${sobrenome}, nasci em ${anoNasc}, portanto tenho ${idade} anos, meu peso atual é ${peso} kg, e minha altura é ${altura}, o meu IMC é ${imc} `);