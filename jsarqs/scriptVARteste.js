// Declare uma variável contendo uma string
var nome = 'André';

// Declare uma variável contendo um número dentro de uma string
var ano = '2018';

// Declare uma variável com a sua idade
var idade = 28;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var sobrenome = 'Rafael'
var nomeCompleto = `${nome} ${sobrenome}`; /* conta o espaço dessa forma */

// Coloque a seguinte frase em uma variável: It's time
var frase = `It's time`;

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof nome;

console.log(verificarTipoNome);

// apagar


// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

// Crie duas expressões que retornem NaN
var expressao1 = 'Teste' / 2;
var expressao2 = 'Teste' - 2;
console.log(expressao1, expressao2);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'

console.log(peso);
