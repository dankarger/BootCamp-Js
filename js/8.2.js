const myCountry = {
    country:'France',
    capital: 'Paris',
    language: 'French',
    population: 67.39,
    neighbours:['Andorra', 'Belgium', 'Germany', 'Italy'],
    describe:function() {
        return `${this.country} has ${this.population} million people, their mother tongue is ${this.language},\nthey have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    }
}

myCountry.checkIsland = function(){
    return `${this.neighbours.length===0}`
}
console.log(myCountry.describe())
console.log(myCountry.checkIsland())