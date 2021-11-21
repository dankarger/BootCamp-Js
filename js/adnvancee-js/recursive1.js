function recursive1(number) {
    if (number === 0) return;
    console.log(number)
    recursive1(number - 1);
}

recursive1(5);

function recursive2(number) {
    if (number > 0) {
        console.log(number)
        recursive2(number - 1)
    }
}

recursive2(10);

function forLoop(number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}

forLoop(4)

function recursive3(str) {
    if (str.length === 1) {
        console.log(str);
        return;
    }
    console.log(str);
    recursive3(str.slice(1))
}

recursive3('this is a test');