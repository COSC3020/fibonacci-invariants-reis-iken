function fib(n) {
    if (n <= 1) {
        return n; }
    let previous = 0;
    let current = 1;
    for (let i = 2; i <= n; i++) {
        let result = previous + current;
        previous = current;
        current = next; }
    return current; }
