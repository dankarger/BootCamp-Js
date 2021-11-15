let candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200 }

//1
function getCandy(candyStore, id) {
    let candies2 = candyStore.candies;

    let result = candies2.filter(candy =>(
        candy.id.includes(id)
    ))
    return result
}

console.log('1: ',getCandy(candyStore,"5hd7y"))

//2
function getPrice(candyStore, id) {
    let candies = candyStore.candies;
    let result= candies.filter(candy=>(
        candy.id.includes(id)
    ))
    return result[0].price;
}

console.log('2: ', getPrice(candyStore,"5hd7y"));

//3

function addCandy(candyStore, id,name,price) {
    candyStore.candies.push({
        name:name,
        id:id,
        price:price
    })
}
addCandy(candyStore,'222','bla',4);
console.log('3: ',candyStore)


//4

function buy(candyStore, id) {
    let candy = candyStore.candies.filter(candy=>(
        candy.id.includes(id)
    ));
    candy[0].amount--;
    candyStore.cashRegister+=candy[0].price;

}

console.log('4: ', buy(candyStore,"5hd7y"));
console.log(candyStore)