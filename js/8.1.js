let book = {
    bookName:'boo boo',
    authorName: 'Mr nice',
    publishingYear: '2019'
}

function bookDetail(book) {
    return `The book '${book.bookName}' was written by ${book.authorName} in the year ${book.publishingYear}.`
}

console.log(bookDetail(book));