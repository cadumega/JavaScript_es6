// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'André',
  sobrenome: 'Rafael',
  idade: 28,
  cidade: 'Rio de Janeiro',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function() {    //Como é um método preciso escrever function()
  return `${this.nome} ${this.sobrenome}`;    //crase , preciso colocar this para definir 
}

// Modifique o valor da propriedade preco para 3000
var carro = {      //objeto de carro
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;          //setando novo valor


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {            //criei o objeto que representa o dog
  raca: 'labrador',            //propriedade que representa raça
  cor: 'preto',                   
  idade: 10,                          
  latir(pessoa) {           //fc metodo, colocar input de pessoa, especificar homem
    if(pessoa === 'homem') {     
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}