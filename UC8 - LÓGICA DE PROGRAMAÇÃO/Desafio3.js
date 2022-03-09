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

//console: npm install readline-sync
//console: npm install moment
var readlineSync = require('readline-sync');
const moment = require('moment');
let dtformat = new Intl.DateTimeFormat('pt-BR');
let date1 = new Date(moment(new Date(), 'DD/MM/YYYY'));
var participantes = new Array([100]);

while (participantes.length<=3){


//Coletando Data.
//var dataevento = new Date(moment(readlineSync.question('Insira a data do Evento: '), 'DD/MM/YYYY'));

// Coletando nome.
var nome = readlineSync.question('Qual é o nome do participante: ');

// Coletando idade.
var idade = Number(readlineSync.question('Qual é a idade do participante: '));

//if( date1 > date2 ){
  //console.log("Data Válida");
  if( idade >= 18 ){
    //console.log("Idade Válida");
    //console.log("----- ADICIONAR-----");
    //var pa = new participante(nome, idade);
    //console.log("Valor de PA: " + pa.consoleLog);
  
    participantes.push(new participante(nome, idade));

  }else{
    console.log("Idade Inválida");
  }
/*
}else{
    console.log("Data Inválida");
  }
*/
console.log("---------Valor Array---------");
for (var i = 1; i<participantes.length; i++){
    //console.log(i + " - " + participantes[i]);
    console.log(i + " - " + participantes[i].consoleLog);

}
}