function solve(input) {
    let array = [];
    for (let i = 0; i <input.length ; i++) {
        if ('add'===input[i]){
            array.push(i+1);
        }else if ('remove'===input[i]){
            if (array.length===0||array.length===1){
                array=[];
            }else {
                array=[1];
            }
        }
    }

    if (array.length===0){
        console.log('Empty');
    }else {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);

        }
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add'])