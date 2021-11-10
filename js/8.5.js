let obj= {
    test:'Bob',
    test2:'Mike',
    p:'Moshe'
}

function swapObjectValue(obj) {
    let swap = {};
    for (let key of Object.keys(obj)) {
        swap[obj[key]] = key;
    }
    return swap;
}

console.log(swapObjectValue(obj))