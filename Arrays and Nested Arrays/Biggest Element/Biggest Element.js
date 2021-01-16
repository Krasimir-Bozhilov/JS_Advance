function solve(input){
    let max=(''+input).split(',')
    let maxToInt=[];
    for (let i = 0; i < max.length; i++) {
        maxToInt.push(Number(max[i]));
    }
    let maxNumber=Math.max(...maxToInt);

    console.log(maxNumber);

}solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])