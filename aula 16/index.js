let num1 = 9.54578;
let num2 = Math.floor(num1); // arredonda para baixo
let num3 = Math.ceil(num1); // arredonda para cima
let num4 = Math.round(num1); // arredonda para o mais próximo

console.log(num2 ** (1/2)); // raiz quadrada
console.log(num2 ** 0.5); // raiz quadrada

console.log(num2);
console.log(num3);
console.log(num4);

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -50, 150, 20, 30)); // retorna o maior número
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -50, 150, 20, 30)); // retorna o menor número

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // número aleatório entre 5 e 10

console.log(Math.random()); // retorna um número aleatório entre 0 e 1
console.log(aleatorio);

console.log(Math.pow(2, 10)); // potência
console.log(2 ** 10); // potência