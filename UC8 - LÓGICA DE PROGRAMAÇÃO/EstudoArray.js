class participante {
    constructor(nome, idade){
     this._nome = nome;
     this._idade = idade;
    }
    get nome() {
      return this._nome;
    }
    get idade() {
      return this._idade;
    }
    
    set nome(string) {
        this._nome = string;
      }
      set idade(numeic) {
        this._idade = numeic;
      }
      
    get consoleLog(){
      return ("Nome: " + this._nome + " - Idade: " + this._idade);
    }
  
    }

console.log();
console.log('----------------');
console.log();
var e = [];
e.push(new participante('A', 20));
e.push(new participante('B', 20));
e.push(new participante('C', 20));
e.push(new participante('D', 20));

e.forEach((i) => {

    console.log( i.consoleLog + ' -> ' + typeof i);
})

console.log();
/*
var a = [1, 6, 'A', 5];
console.log(a.length);
console.log(typeof a);
console.log(typeof a[2]);

console.log();
console.log('----------------');
console.log();

var b = ["hello", 1, false];
b.forEach((i) => {
    console.log( i + ' -> ' + typeof i);
})

console.log();
console.log('----------------');
console.log();

var c = ["hello", 1, false];
console.log(c);
c.push(2.15);
console.log(c);
c.unshift(123);
console.log(c);
*/