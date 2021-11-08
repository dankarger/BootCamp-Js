function percentageOfWorld1(population) {
    let wordPop = 7900;
    return (population/wordPop*100).toFixed(4)+'%';
}

let israel = percentageOfWorld1(9);
let england = percentageOfWorld1(55.98);
let india = percentageOfWorld1(1380);

console.log('israel:'+ israel)
console.log('england:'+ england)
console.log('india:'+ india)


//----------------------------------------------------------------------------


let percentageOfWorld2 = function (population) {
    let wordPop = 7900;
    return (population/wordPop*100).toFixed(4)+'%';
}


let israel2 = percentageOfWorld2(9);
let england2 = percentageOfWorld2(55.98);
let india2 = percentageOfWorld2(1380);

console.log('israel:'+ israel2)
console.log('england:'+ england2)
console.log('india:'+ india2)