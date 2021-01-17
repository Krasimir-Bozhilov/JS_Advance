function solve(input, step) {
    let array = [];
    for (let arrayElement of array) {

    }
    for (let i = 0; i < input.length;i++) {
        if (i%step===0){
            array.push(input[i]);
        }

    }
    return array
}

solve(['1',
        '2',
        '3',
        '4',
        '5'],
    6
)