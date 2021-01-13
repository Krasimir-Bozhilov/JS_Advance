function squareOfStars(input){

    for (let i = 0; i < input; i++) {
        var array=[];
        for (let j = 0; j < input; j++) {

           array.push('*');
        }

        console.log(...array)
    }

}
squareOfStars(7)