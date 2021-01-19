function solve(input){
    var towns={};
    let array=(''+input).split(',');
    for (let i=0; i<array.length; i++){
        let tokens= array[i].split(' <-> ');
        let name = tokens[0];
        let populationOfTown=Number(tokens[1]);
        if (towns[name]==undefined){
            towns[name]=populationOfTown
        }else{
            towns[name]+=populationOfTown
        }


        for (const name in towns) {
            console.log(`${name} : ${towns[name]}`);
        }
    }
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])