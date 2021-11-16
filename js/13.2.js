const foodsWithUpperCase = [ "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple", ];

//b.1

const foodsCompare1 = foodsWithUpperCase.slice().sort((a,b)=>{
    return a.localeCompare(b);
})

const foodsCompare2 = foodsWithUpperCase.slice().sort((a,b)=>{
    return b.localeCompare(a)
})

console.log(foodsCompare1);
console.log(foodsCompare2);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const wordsSort = words.sort((a,b)=> b.length - a.length)

console.log(wordsSort)