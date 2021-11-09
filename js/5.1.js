function countryToLiveIn(language, isIsland, population, country) {
    const countryName = country.charAt(0).toUpperCase() + country.substr(1);
    if(!isIsland && language.toLowerCase() === 'english' && population <50) {
        return `You should live in ${countryName};`
    }
    return `${countryName} does not meet your criteria`
}


console.log(countryToLiveIn('hebrew',false,40,'Israel'))