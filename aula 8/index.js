/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.925925925925924
e nasceu em 1993
*/

let nome = 'Luiz Otávio Miranda';
let idade = 30;
let peso = 84;
let altura = 1.80;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log(nome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log('e nasceu em ' + anoNascimento);
