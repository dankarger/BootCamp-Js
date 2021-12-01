const popolation  = [47, 9, 329, 1380,12];

//Function that calculate percentage of country from the world population
function percentageOfWorld1(population) {
    let wordPop = 7900;
    return (population/wordPop*100).toFixed(4)+'%';
}


//Function to loop throught the array of countries population number and return an array of result
function populationPrecentage(population) {
    let percentages = [];
    for(let pop of population){
        percentages.push(percentageOfWorld1(pop))
    }
    return percentages
}

function populationPercentageForEach(popolation) {
     let percentanges2 = [];
    popolation.forEach(value1 => percentanges2.push(percentageOfWorld1(value1)));
     // console.log(percentanges2)
    return percentanges2
}
// populationPercentageForEach()

console.log(populationPercentageForEach(popolation))
console.log(populationPrecentage(popolation))