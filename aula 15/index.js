// IEEE 754-2008

let num1 = 1;
let num2 = 2.5;
let num3 = 10.566755657

console.log(num1 + num2);

console.log(num1.toString() + num2);
console.log(typeof num1);

num1 = num1.toString();
console.log(typeof num1);

console.log(num1.toString(2)); // converte para binário
console.log(num3.toFixed(2)); // limita o número de casas decimais

console.log(Number.isInteger(num1)); // verifica se é um número inteiro com verdadeiro ou falso

let temp = num3 * 'ola';
console.log(temp);
console.log(Number.isNaN(temp)); // verifica se é NaN com verdadeiro ou falso


let num4 = 0.7;
let num5 = 0.1;

num4 += num5; // 0.8
num4 += num5; // 0.9
num4 += num5; // 1.0

//outro jeito de resolver o problema de precisão
// num4 = ((num4 * 100) + (num5 * 100)) / 100;
// num4 = ((num4 * 100) + (num5 * 100)) / 100;
// num4 = ((num4 * 100) + (num5 * 100)) / 100;

num4 = Number(num4.toFixed(2)); // resolve o problema de precisão

console.log(num4);
console.log(Number.isInteger(num4));