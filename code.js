function fib(n) {
    let sequence = [];
    for (let i = 0; i <= n; i++) {
        calculateFib(i);
    return sequence; }

    function calculateFib(index) {
        if (index <= 1) {
            return index; }
        else {
            if !(sequence[index]) {
                sequence[index] = calculateFib(n-1) + calculateFib(n-2); }
            return sequence[index]; }
