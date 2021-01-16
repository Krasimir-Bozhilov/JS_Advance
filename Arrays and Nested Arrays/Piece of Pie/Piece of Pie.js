function solve(inputArray, startPie, endPie) {
    let newArray = [];
    let start;
    let end;
    for (let i = 0; i < inputArray.length; i++) {
        if (startPie == inputArray[i]) {
            start = i;
        }
        if (endPie==inputArray[i]){
            end=i;
        }
    }
    for (let i = start; i <= end; i++) {
        newArray.push(inputArray[i])
    }
    console.log(newArray)
}

solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
)