function fib(n) {
    let sequence = [];
    for (let i = 0; i <= n; i++) {
        sequence.push(calculateFib(i)); }
    return sequence;

    function calculateFib(index, sequence) {
        if (index <= 1) {
            return index; }
        if (!sequence[index]) {
            sequence[index] = calculateFib(index-1) + calculateFib(index-2); }
            return sequence[index]; }
