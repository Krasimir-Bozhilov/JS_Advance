function sumOfNumbers(n,m){
    let sum=0;
    let nToInt=Number(n);
    let mToInt=Number(m);
    for (let i = nToInt; i <=mToInt; i++) {
        sum+=i;
    }
    console.log(sum);
}
