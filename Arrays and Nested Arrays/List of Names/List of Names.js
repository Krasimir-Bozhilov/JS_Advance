function solve(input){
  let sorted=input
   sorted.sort();
    for (let i = 0; i < sorted.length; i++) {
        console.log(i+1+'.'+sorted[i])
    }
}
solve(["John", "Bob", "Christina", "Ema"])
