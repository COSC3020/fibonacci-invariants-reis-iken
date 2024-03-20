function fib(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(calculateFib(i, sequence)); }
    return sequence;

function calculateFib(index, sequence) {
    if (index <= 1) {
        return index; }
    if (!sequence[index]) {
        sequence[index] = calculateFib(index-1, sequence) + calculateFib(index-2, sequence); }
        return sequence[index]; }
