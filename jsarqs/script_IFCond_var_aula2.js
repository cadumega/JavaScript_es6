function terceiraIdade(idade) {
  console.log(typeof idade);
  if(typeof idade !== `number`) {
    return `Por favor preencha um número`;
  } else if (idade >= 60) {
    return true;
  } else {
    return false
  }
  console.log(idade)
}

console.log(terceiraIdade(`oi`))

// sendo uma variável de string, retorna mensagem para colocar um número
// crase!!!

var totalPaíses = 193;            //declarei fora a variável
function faltaVisitar(paísesVisitados) {
  return `Falta visitar ${totalPaíses - paísesVisitados} países`;
}

console.log(totalPaíses);

var profissao = `Dev Front-End`;
function dados() {
  var nome = `Carlos`;
  var idade = 29;
  function outrosDados (){
    var endereco = `Rio de Janeiro`;
    var idade = 30;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());

