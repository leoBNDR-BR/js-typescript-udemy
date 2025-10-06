/**
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * * Multiplicação
 * ** Potenciação
 * / Divisão
 * % Resto da Divisão
 * 
 * Precedência dos operadores
 * 1º ()
 * 2º **
 * 3º * / %
 * 4º + -
 * 
 * Incremento
 * ++ Incrementa 1
 * -- Decrementa 1
 * +=
 */ 

const num1 = 10;
const num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 / num2);
console.log(num1 % num2);

let contador = 1;
contador++; //2
contador++; //3
contador++; //4
contador++; //5
console.log(contador);

contador--; //4
console.log(contador);

contador += 10; //contador = contador + 10
console.log(contador);

contador *= 2; //contador = contador * 2
console.log(contador);

const numero1 = 10;
const numero2 = parseInt('5'); //Number(convertendo string para número inteiro)
const numero3 = parseFloat('5.2'); //Number(convertendo string para número float)
const numero4 = Number('5.2'); //Number(convertendo string para número float)
console.log(numero1 + numero2);
console.log(numero1 + numero3);
console.log(numero1 + numero4);