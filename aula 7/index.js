// Não podemos criar constantes com palavras reservadas. Exemplo: const, console, log
// Constantes precisam ter nomes significativos
// Não podem começar com números. Exemplo: const 1nome (errado)
// Não podem conter espaços ou traços. Exemplo: const nome-completo (errado)
// Utilizamos camelCase. Exemplo: const nomeCompleto (certo)
// Case-sensitive. Exemplo: const nomeCompleto e const NomeCompleto são constantes diferentes
// Não podemos redeclarar constantes com let
// NÃO UTILIZE VAR, UTILIZE LET.

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;

console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));