let library = [
    {
        author: "Bill Gates", title: "The Road Ahead", readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false
    }
];
// //1
// function findBooks(data) {
//     let books = [];
//     data.forEach(b=>{
//         if(b.readingStatus){
//             books.push(b)
//         }
//     })
//      return books;
// }
// console.log('1:',findBooks(library));

//1-2
function findBooks2(data) {
    let result= data.filter(b=> b.readingStatus===true)
    return result;
}
console.log('2:',findBooks2(library))