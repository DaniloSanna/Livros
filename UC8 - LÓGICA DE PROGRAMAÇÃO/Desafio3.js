//console: npm install readline-sync
//console: npm install moment

class participante {
  constructor(nome, idade, posicao){
   this._nome = nome;
   this._idade = idade;
   this._posicao = posicao;

  }
  get nome() {
    return this._nome;
  }
  get idade() {
    return this._idade;
  }
  get posicao() {
    return this._posicao;
  }
  get consoleLog(){
    return (this._posicao +'° -> ' + 'Nome: ' + this._nome + ' - Idade: ' + this._idade);
  }
  set nome(string) {
    this._nome = string;
  }
  set idade(numeic) {
    this._idade = numeic;
  }
  set posicao(numeic) {
    this._posicao = numeic;
  }

  }

const limiteparticipantes = 100;
var readlineSync = require('readline-sync');
const moment = require('moment');
let dtformat = new Intl.DateTimeFormat('pt-BR');
let datehoje = new Date(moment(new Date(), 'DD/MM/YYYY'));
var participantes = [];

while (participantes.length <= (limiteparticipantes+1) ){
    
  console.log();
  console.log("--- Inserindo Participante: " + (participantes.length+1) + " ---");
  console.log();

  //Coletando Data.
  var dataevento = new Date(moment(readlineSync.question('Insira a data do Evento: '), 'DD/MM/YYYY'));

  if( datehoje < dataevento ){
  
      // Coletando nome.
      var nome = readlineSync.question('Qual e o nome do participante: ');

      // Coletando idade.
      var idade = Number(readlineSync.question('Qual e a idade do participante: '));

    if( idade >= 18 ){
      participantes.push(new participante(nome, idade, (participantes.length+1) ));
      
      console.log();
      console.log("---------Impressão Lista:---------");
      participantes.forEach((i) => {
        console.log(i.consoleLog);
      });

    }else{
      console.log();
      console.log('Cadastro não é permitido pela idade.');
      console.log("------------------------------------------------------------------------");
      console.log();
    }

  }else{
    console.log();
    console.log('Cadastro não será permitido por data inválida.');
    console.log("------------------------------------------------------------------------");
    console.log();
    }

    if(participantes.length == limiteparticipantes ){
      console.log('////////////////////////////////////////////////////////////////////////');
      console.log('Cadastro não será permitido por ter excedido o limite.');
      console.log("------------------------------------------------------------------------");
      console.log();
      break;
    }
}


console.log();
console.log("---------Lista Completa:---------");
participantes.forEach((i) => {
  console.log(i.consoleLog);
});
console.log();
console.log("---------------------------------------------Fim do Programa---------------------------------------------");
console.log();