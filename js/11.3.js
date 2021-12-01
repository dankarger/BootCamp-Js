const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];
//1
const findNames = data.map(el => {
        return {name: el.name};
    }
);

console.log(findNames)

//2
function findBornBefor1990(arr) {
    let result2 = [];
    arr.forEach(el => {
        if (Number(el.birthday.substr(-4)) < 1990) {
          result2.push(el);

        }
    })
    return result2
}

console.log(findBornBefor1990(data));

//3

function findFoods(data) {
    let result = {};
    data.forEach(el => {
        let foods1 = el.favoriteFoods.meats;
        let foods2 = el.favoriteFoods.fish;
        let foods = foods1.concat(foods2);
        foods.forEach(food => {
            if (result[food]) {
                result[food]++
            } else {
                result[food] = 1
            }
        })
    })
    return result;
}
console.log('3:', findFoods(data))
