function fib(n) {
    var fib_solns = [];
    
    function fibonacciCalculate(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (fib_solns[n] !== undefined) {
            return fib_solns[n];
        }
        fib_solns[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return fib_solns[n];
    }
    for (var i = 0; i <= n; i++) {
        fibonacci(i);
    }
    return fib_solns;
}
