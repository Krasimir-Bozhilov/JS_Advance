function sumOfNumbers(n,m){
    let sum=0;
    let nToInt=Number.parseInt(n);
    let mToInt=Number.parseInt(m);
    for (let i = nToInt; i <=mToInt; i++) {
        sum+=i;
    }
    console.log(sum);
}
