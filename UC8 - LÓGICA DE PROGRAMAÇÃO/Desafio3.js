
//console: npm install readline-sync
//console: npm install moment

var readlineSync = require('readline-sync');
const moment = require('moment');
let date1 = new Date(moment(new Date(), 'DD/MM/YYYY'));

let participantes = [];

 
//Coletando Data.
var dataevento = new Date(moment(readlineSync.question('Insira a data do Evento: '), 'DD/MM/YYYY'));

// Coletando nome.
var nome = readlineSync.question('Qual é o nome do participante: ');

// Coletando idade.
var idade = readlineSync.question('Qual é a idade do participante: ');

//console: npm install date-and-time e npm install dateformat
let dtformat = new Intl.DateTimeFormat('pt-BR');

console.log("Nome: " + nome + ", Data: " + dtformat.format(dataevento) + ", idade: " + idade);


/*
console.log(date1);
console.log(date2);
if( date1 > date2 ){
  console.log("Maior: " + dtformat.format(date1));
  console.log("Menor: " + dtformat.format(date2));
}else{
  console.log("Maior: " + dtformat.format(date2));
  console.log("Menor: " + dtformat.format(date1));
}
*/