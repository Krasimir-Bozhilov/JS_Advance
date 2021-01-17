function solve(input,rotation){
   let array=input;

    for (let i = 0; i <rotation; i++) {
        let endPosition=array[array.length-1]
        array.unshift(endPosition);
        array.pop()
    }

    console.log(...array)

}

solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15)