function solve(matrix) {
    let sum = 0;
    let sum2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    for (let i = 0; i < matrix.length; i++) {
        sum2 += matrix[i][matrix.length - 1 - i];

    }

    console.log(sum+' '+sum2);



}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])