//console: npm install readline-sync
//console: npm install moment
//console: npm install arraylist

class participante {
  constructor(nome, idade){
   this.nome = nome;
   this.idade = idade;
  }
  get nome() {
    return nome;
  }



  
  get idade() {
    return idade;
  }
  set nome(valor) {
    nome = valor;
  }
  set idade(valor) {
    idade = valor;
  }
  get consoleLog(){
    return ("Nome: " + nome + " - Idade: " + idade);
  }

  }

var readlineSync = require('readline-sync');
const moment = require('moment');
let dtformat = new Intl.DateTimeFormat('pt-BR');
let date1 = new Date(moment(new Date(), 'DD/MM/YYYY'));
var participantes = new Array([100]);
//var participantes = require('ArrayList');

while (participantes.length<=2){


//Coletando Data.
//var dataevento = new Date(moment(readlineSync.question('Insira a data do Evento: '), 'DD/MM/YYYY'));

console.log();
console.log("--- Inserindo Participante: " + participantes.length + " ---");

// Coletando nome.
var nome = readlineSync.question('Qual e o nome do participante: ');

// Coletando idade.
var idade = Number(readlineSync.question('Qual e a idade do participante: '));

//if( date1 > date2 ){
  //console.log("Data Válida");
  if( idade >= 18 ){
    //console.log("Idade Válida");
    //console.log("----- ADICIONAR-----");
    //var pa = new participante(nome, idade);
    //console.log("Valor de PA: " + pa.consoleLog);
  
    participantes.push(new participante(nome, idade));
    //participantes.push('x');

  }else{
    console.log("Idade Inválida");
  }
/*
}else{
    console.log("Data Inválida");
  }
*/
console.log("---------Impressão Lista:---------");
for (var i = 1; i<participantes.length; i++){
    //console.log(i + " - " + participantes[i]);
    console.log(i + " - " + participantes[i].consoleLog);

}
}