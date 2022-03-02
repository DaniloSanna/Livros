
var readlineSync = require('readline-sync');
let participantes = [];

 
//Coletando Data.
//var data = readlineSync.question('Insira a data do Evento: ');

// Coletando nome.
//var nome = readlineSync.question('Qual é o nome do participante: ');

// Coletando idade.
//var nome = readlineSync.question('Qual é a idade do participante: ');


const dt = new Date().toLocaleString('pt-br', {
    timeZone: "America/Sao_Paulo"
  });


  //console: npm install date-and-time e npm install dateformat
let jao = "02/03/2022";

let dates = require('date-and-time');

let data = dates.format(Date.parse(jao),'YYYY/MM/DD HH:mm:ss');
let data1 = Date.parse("04/03/2022");


console.log ("DATA: " + data);
console.log ("DATA1: " + data1);

data.toLocaleString.toLocaleString('pt-br', {
    timeZone: "America/Sao_Paulo"
  });

if (data > data1) {
    console.log ("DATA > DATA1");
}else{
    console.log ("DATA < DATA1");
}


