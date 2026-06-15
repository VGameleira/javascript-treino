/********************************MAP*************************************/

/*Exemplo 1*/
// O método `map()` é usado para criar um novo array aplicando uma função a cada elemento do array original.
// Aqui, estamos calculando a raiz quadrada de cada número e arredondando para 2 casas decimais.
const numeros = [10, 15, 30, 50, 70, 9, 6, 3];
let raizDeNumeros = numeros.map(elem => Math.sqrt(elem).toFixed(2)); // Calculando raiz quadrada
console.log('Raizes: ' + raizDeNumeros); // Exibindo o resultado

/*Exemplo 2*/
// O método `map()` é utilizado aqui para transformar o nome de cada produto em letras maiúsculas.
const produtos = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 49.99 },
    { nome: 'Tênis', preco: 89.99 }
];

let caixaAlta = produtos.map(produto => produto.nome.toUpperCase()); // Transformando nome para caixa alta
console.log('Produtos: ' + caixaAlta); // Exibindo os nomes em caixa alta

/*******************************FILTER**********************************/

/*Exemplo 1*/
// O método `filter()` cria um novo array com elementos que atendem a uma condição específica.
// Aqui, estamos filtrando os números que são maiores ou iguais a 10 e menores ou iguais a 50.
const numeros2 = [5, 12, 8, 130, 44, 27, 3, 51, 60];
const numerosFiltrados = numeros2.filter(numero => numero >= 10 && numero <= 50);
console.log('Maiores(10) e Menores(50): ' + numerosFiltrados); // Exibindo os números filtrados

/*Exemplo 2*/
// O `filter()` está sendo usado para filtrar as pessoas com idades entre 18 e 65 anos.
const pessoas = [
    { nome: 'Ana', idade: 17 },
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 19 }
];

let validaIdade = pessoas.filter(pessoa => pessoa.idade >= 18 && pessoa.idade <= 65);
console.log(validaIdade); // Exibindo as pessoas com idades válidas

/*********************************REDUCE*********************************/

/*Exemplo 1*/
// O método `reduce()` aplica uma função acumuladora a cada elemento de um array e retorna um único valor.
// Aqui, estamos somando todos os números do array `numerosReduce`.
const numerosReduce = [10, 12, 15, 30, 65, 78, 102, 1024, 327, 15, 2, 10, 156];
let somaReduce = numerosReduce.reduce((prev, n) => prev + n, 0); // Somando os números
console.log('Soma: ' + somaReduce); // Exibindo o total da soma

/*Exemplo 2*/
// O `reduce()` aqui está somando os valores das transações financeiras (como depósitos) para calcular o saldo final.
const transacoes = [
    { tipo: 'deposito', valor: 100 },
    { tipo: 'pix', valor: 50 },
    { tipo: 'deposito', valor: 200 }
];

let saldoFinal = transacoes.reduce((prev, valores) => prev + valores.valor, 0); // Somando os valores das transações
console.log('Saldo Final: ' + saldoFinal); // Exibindo o saldo final

/*********************************EVERY**********************************/

/*Exemplo 1*/
// O método `every()` verifica se todos os elementos do array atendem a uma condição específica.
// Aqui, estamos verificando se todos os números são positivos (maiores que 0).
const posNeg = [-1, -2, 3, 5, 15, 10];
let validaPosNeg = posNeg.every(numeroEvery => numeroEvery > 0); // Verificando se todos os números são positivos
console.log('Todos positivos: ' + validaPosNeg); // Exibindo o resultado (true ou false)

/*Exemplo 2*/
// O `every()` aqui está verificando se todas as notas dos alunos são maiores ou iguais a 6.
const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 8 }
];

let nota = alunos.every(notaEvery => notaEvery.nota >= 6); // Verificando se todas as notas são >= 6
console.log('Todos média > 6: ' + nota); // Exibindo o resultado (true ou false)

/********************************SOME************************************/

/*Exemplo 1*/
// O método `some()` verifica se **pelo menos um** dos elementos do array atende à condição especificada.
// Aqui, estamos verificando se algum número é negativo.
let validaPosNegSome = posNeg.some(numeroSome => numeroSome < 0); // Verificando se existe algum número negativo
console.log('Algum negativo: ' + validaPosNegSome); // Exibindo o resultado (true ou false)

/*Exemplo 2*/
// O `some()` está verificando se algum produto tem o preço superior a 100.
const produtosSome = [
    { nome: 'Camiseta', preco: 29.99 },
    { nome: 'Calça', preco: 49.99 },
    { nome: 'Tênis', preco: 120.00 }
];

let preco = produtosSome.some(prod => prod.preco > 100); // Verificando se existe algum produto com preço > 100
console.log('Algum maior (100): ' + preco); // Exibindo o resultado (true ou false)

/********************************FIND************************************/

/*Exemplo 1*/
// O método `find()` retorna o **primeiro** elemento que atende à condição especificada.
// Aqui, estamos encontrando o primeiro número que seja maior que 10.
const numerosFind = [0, 10, 11, 12, 13, 14, 15];
let numeroEncontrado = numerosFind.find(num => num > 10); // Encontrando o primeiro número > 10
console.log('1º > 10: ' + numeroEncontrado); // Exibindo o primeiro número encontrado

/*Exemplo 2*/
// O `find()` está sendo usado para encontrar a primeira pessoa com idade superior a 18.
const pessoasFind = [
    { nome: 'Ana', idade: 17 },
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 19 }
];

let pessoaMaior = pessoasFind.find(pessoaM => pessoaM.idade > 18); // Encontrando a primeira pessoa com idade > 18
console.log(pessoaMaior); // Exibindo a pessoa encontrada

/********************************INCLUDES********************************/   

/*Exemplo 1*/
// O método `includes()` verifica se um determinado elemento está presente no array.
// Aqui, estamos verificando se o número 22 está na lista `numeroIncludes`.
const numeroIncludes = [0, 10, 12, 15, 20, 21];
let nIncludes = numeroIncludes.includes(22); // Verificando se 22 está presente no array
console.log('Contém(22): ' + nIncludes); // Exibindo o resultado (true ou false)

/*Exemplo 2*/
// O método `includes()` é combinado com `filter()` para buscar se o nome da fruta contém a palavra "Maçã".
const frutas = [
    { fruta: 'Banana', preco: 7.50 },
    { fruta: 'Laranja', preco: 8.90 },
    { fruta: 'Maçã', preco: 6.90 },
    { fruta: 'Manga', preco: 12.00 }
];

let fruta = frutas.filter(f => f.fruta.includes('Maçã')); // Filtrando frutas que contêm "Maçã"
console.log(fruta); // Exibindo o resultado das frutas encontradas
/************************************************************************/
