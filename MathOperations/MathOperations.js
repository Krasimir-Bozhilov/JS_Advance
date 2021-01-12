function mathOperations(a, b, c) {
    let result;
    switch (c) {
        case '+':
            result = a + b;

            break;
            case '*':
            result = a * b;

            break;
        case '-':
            result = a - b;

            break;
        case '/':
            result = a / b;

            break;
        case '%':
            result = a % b;

            break;
        case '**':
            result = a ** b;

            break;
    }
    console.log(result);
}

mathOperations(3, 5.5, '*')