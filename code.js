function fib(n) {
    var fib_solns = [];
    
    function fibonacciCalculate(i) {
        if (i === 0) return 0;
        if (i === 1) return 1;
        if (fib_solns[i] !== undefined) {
            return fib_solns[i];
        }
        fib_solns[i] = fibonacciCalculate(i-1) + fibonacciCalculate(i-2);
        return fib_solns[i];
    }
    for (var i = 0; i <= n; i++) {
        fibonacciCalculate(i);
    }
    return fib_solns;
}
