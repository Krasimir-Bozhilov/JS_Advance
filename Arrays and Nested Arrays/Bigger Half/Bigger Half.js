    function solve(input){
        var readInput=[];
        for(let num of input){
            readInput.push(num)
        }
    
        var newArray=[];
    
        for (let i = 0; i < readInput.length/2; i++) {
            let min=Math.max(...readInput);
            newArray.unshift(min);
        for(let j=0;j<readInput.length;j++){
            if(min===readInput[j]){
                readInput[j]=-999999999999999999999999999999999999999999999999999999;
            break;
            }
            }
            
        }
        console.log(newArray);
        
    }
solve([3, 19, 14, 7, 2, 19, 6]
)