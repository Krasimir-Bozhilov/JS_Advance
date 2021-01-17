function solve(input,separator) {
    let array ='';
    for(let i=0; i<input.length;i++){
        if (i===input.length-1){
            array+=input[i];
        }else {
            array+=(input[i]+separator);
        }

    }

    console.log(array);


}solve(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_')