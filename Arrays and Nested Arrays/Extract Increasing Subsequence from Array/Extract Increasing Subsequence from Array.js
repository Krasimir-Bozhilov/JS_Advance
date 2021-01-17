function solve(input){
    let bigNum=input[0];
    let array=[bigNum];
    for (let i = 0; i < input.length-1; i++) {
        if (input[i+1]>bigNum){
            array.push(input[i+1])
            bigNum=input[i+1]
        }
    }
   return array
}
solve([20,
    3,
    2,
    15,
    6,
    1])