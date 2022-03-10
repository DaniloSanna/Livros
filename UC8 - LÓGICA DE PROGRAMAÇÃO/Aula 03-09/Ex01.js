const Listadepecas = ['pecas de teste', 'AB', 'peca B'];
console.log(Listadepecas.length);

if (Listadepecas.length<=10){
    console.log('As peças podem ser cadastradas');
    
    for (let index =0; index< Listadepecas.length; index++){
        let pecaatual = Listadepecas[index];
        console.log('');
        if (pecaatual.length<3){
            console.log(pecaatual + ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada!');
        }else{
            console.log(pecaatual + ': a peça atual pode ser cadastrada!');
        }
        console.log('peso da peça');
    
        const pesodapecaemgramas = 50;

        if (pesodapecaemgramas < 100){
            console.log('Peso Suficiente!');
        }else{
            console.log('Peso Insuficiente!');
        }
    }

}else{
    console.log('As peças NÃO podem ser cadastradas');
}