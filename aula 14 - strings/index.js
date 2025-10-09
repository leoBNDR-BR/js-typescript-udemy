let umaString = "Um \"texto\""; // \ escapando aspas duplas dentro de aspas duplas
console.log(umaString);

//                 01234567
let outraString = "Um texto"

console.log(outraString[4]); // acessando caractere pelo índice
console.log(outraString.charAt(7)); // acessando caractere pelo índice
console.log(outraString.concat(" em um lindo dia")); // concatenando strings
console.log(outraString + " em um lindo dia"); // concatenando strings
console.log(`${outraString} em um lindo dia`); // concatenando strings
console.log(outraString.indexOf("texto")); // retornando o índice do início da palavra
console.log(outraString.indexOf("o", 3)); // retornando o índice do início da palavra, a partir do índice 3
console.log(outraString.lastIndexOf("o")); // retornando o índice do início da palavra, começando de trás para frente
console.log(outraString.match(/[a-z]/g)); // retornando um array com todas as letras minúsculas
console.log(outraString.search(/x/)); // retornando o índice do início da palavra
console.log(outraString.replace("Um", "Outro")); // substituindo a palavra "Um" por "Outro"

let novaString = "O rato roeu a roupa do rei de Roma.";
console.log(novaString.replace(/r/g, "#")); // substituindo todas as letras "r" por "#"
console.log(novaString.length); // retornando o tamanho da string
console.log(novaString.slice(2, 6)); // retornando a string do índice 2 ao 6 (6 não incluso)
console.log(novaString.slice(-5)); // retornando os últimos 5 caracteres
console.log(novaString.split(" ")); // dividindo a string em um array, usando o espaço como separador
console.log(novaString.toUpperCase()); // convertendo a string para maiúsculas
console.log(novaString.toLowerCase()); // convertendo a string para minúsculas
console.log(novaString.trim()); // removendo espaços em branco no início e no fim da string