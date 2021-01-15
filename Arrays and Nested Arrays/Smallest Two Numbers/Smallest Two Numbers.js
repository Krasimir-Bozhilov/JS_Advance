function solve(input){
    var readInput=[];
    for(let num of input){
        readInput.push(num)
    }
   

  
    for (let i = 0; i < 2; i++) {
        let min=Math.min(...readInput);
        console.log(min);
       for(let j=0;j<readInput.length;j++){
           if(min===readInput[j]){
               readInput[j]=999999999999999999999999999999999999999999999999999999;
           break;
           }
        }
        
    }
}
   


solve(3,3,3,3,3,3)