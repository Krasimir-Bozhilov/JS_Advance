function sameNumbers(input){
   let inputToArray=(''+input).split('');
   var x=new Boolean(true);
    for (let i = 0; i < inputToArray.length-1; i++) {
        if (inputToArray[i]!==inputToArray[i+1]){
            x=false;
        }

    }
    var sum=0;
    for (let i = 0; i <inputToArray.length; i++){
        sum+=Number(inputToArray[i]);
    }
    if (x==true){
        console.log('true');
    }else{
        console.log('false')
    }
    console.log(sum)

}
sameNumbers(2222222)
