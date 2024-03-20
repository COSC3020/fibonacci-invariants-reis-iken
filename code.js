function fib(n) {
    let fib_solns = [0];
    if (n == 0) {
        return fib_solns; }
    fib_solns[1] = 1;
    if (n == 1) {
        return fib_solns; }
    for (var i = 2; i <= n; i++) {
        fib_solns[i] = fib_solns[i-1] + fib_solns[i-2]; }
    return fib_solns;
}
