const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compareTwoStrings(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                result.push(a[i])
            }
        }
    }
    if(result.length===0){return false}
    return result;
}

console.log(compareTwoStrings(food, food1))