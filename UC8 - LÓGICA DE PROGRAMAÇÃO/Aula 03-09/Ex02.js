const qtdaluno = 14;

for (let i=0; i<=qtdaluno ; i++){

    console.log('');
    console.log("Aluno número: " + i);

    if((i % 2)==0 && i > 0){
        console.log("Número: " + i + " é par");
    }else if(i == 0){
        console.log("Número: " + i + " é zero");
    }else {
        console.log("Número: " + i + " é impar");
    }
}