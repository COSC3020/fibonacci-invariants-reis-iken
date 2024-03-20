int result = 0;
function fib(n) {
    if (n == 0) {
        return result; }
    else if (n == 1) {
        result += 1; }
    else {
        result = fib(n-1) + fib(n-2); }
    return result; }
