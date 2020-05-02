function fatorial(num) {
    let result = 1;
    if (num === 1 || num === 0) {
        return 1;
    } else {
        for ( i = num; i > 0; i -= 1) {
            result = result * i;
        }
        return result;
    }

}
console.log(fatorial(5));