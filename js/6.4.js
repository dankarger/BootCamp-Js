const popolation  = [47, 9, 329, 1380];

//Function thatcalculate percentage of country from the world population
function percentageOfWorld1(population) {
    let wordPop = 7900;
    return (population/wordPop*100).toFixed(4)+'%';
}


//Function to loop throught the array of countries population number and return anarray of result
function populationPrecentage(population) {
    let percentages = [];
    for(let pop of population){
        percentages.push(percentageOfWorld1(pop))
    }
    return percentages
}

console.log(populationPrecentage(popolation))