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
    return candies2.filter(candy =>(
        candy.id.includes(id)
    ))

}

console.log('1: ',getCandy(candyStore,"5hd7y"))

//2
function getPrice(candyStore, id) {
    let candies = candyStore.candies;
    return  candies.find(candy=> candy.id===id).price;
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
    return candyStore.cashRegister+=candy[0].price;
}

function buy2(candystore,id) {
    let price= getPrice(candyStore,id)
    let candy = getCandy(candyStore,id);
    candy.amount-=1;
    return  candyStore.cashRegister+=price

}

console.log('4: ', buy(candyStore,"5hd7y"));
console.log(candyStore)
console.log(buy2(candyStore,'222'));
console.log(candyStore)



candyStore= {};
     candies = []
          candy= {}
          candy= {}
     cashRegister = {}

