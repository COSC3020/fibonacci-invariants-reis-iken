function fib(n) {
    let sequence = [];
    for (let i = 0; i <= n; i++) {
        sequence.push(calculateFib(i));
    return sequence; }

    function calculateFib(index) {
        if (index <= 1) {
            return index; }
        if (!sequence[index]) {
            sequence[index] = calculateFib(n-1) + calculateFib(n-2); }
            return sequence[index]; }
