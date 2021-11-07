function describeCountry(country,population,capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`

}

let israel = describeCountry('Israel',9,'Jerusalem');
let france = describeCountry('France',30,'Paris');
let england  = describeCountry('England',40,'London');
console.log(israel);
console.log(england);
console.log(france);
