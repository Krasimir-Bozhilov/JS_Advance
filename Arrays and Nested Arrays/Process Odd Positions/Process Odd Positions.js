function solve(input){
    let array=[];
    for (let i = 0; i < input.length; i++) {
        if (i%2!==0){
            array.unshift(input[i]*2);
        }
    }
    console.log(...array)

}
solve([10, 15, 20, 25])