const cashFunction = (fn) => {
    const cash = {};
    return (n) => {
        if (cash[n]) {
            console.log('взято из кеша', cash[n]);
            return cash[n];
        }
        let result = fn(n);
        console.log("посчитала функция = ", result)
        cash[n] = result;
        return result;
    }
}


const factorial = (n) => {
    let result = 1;
    while (n != 1) {
        result *= n;
        n -= 1;
    }
    return result;
};

// console.log(factorial(5));
const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(3);