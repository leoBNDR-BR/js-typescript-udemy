// string, number, undefined, null, boolean
const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined = não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo = não aponta pra local nenhum na memória
const aprovado = false; //boolean = true, false (lógico)

console.log(typeof nome, nome);

const a = [1, 2];
const b = a;
console.log(a, b);
b.push(3); //dados são referenciados
console.log(a, b);

let a1 = 2;
let b1 = a1;
console.log(a1, b1);
a1 = 3; 
console.log(a1, b1);
