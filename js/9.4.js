function steps(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        // result[i]= ' ';
        result[i] = ''
        for (let j = n; j > i; j--) {
            result[i] += ('#');
        }
        for (let t = n - result[i].length; t > 0; t--) {
            result[i] += '.';
        }

    }
    result.pop()
    // return result.reverse();
    return result.reverse().join('\n')
}

console.log(steps(14))
