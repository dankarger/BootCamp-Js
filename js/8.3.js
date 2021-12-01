const book1 = {
    name: 'Boo boo',
    author: 'Calvin Klein',
    year: 2000
};

const book2 = {
    name: 'Work in progress',
    author: 'Dave Chapelle',
    year: 2012
};

const bookUtils = {
    getFirstPublished : function(book1,book2) {
        return  book1.year<book2.year? book1:book2;     //3
    },
    setNewEdition : function(book, year) {    //4
         book.latestEdition=  year;
    },
    setLanguage : function(book, language) {  //5
         book.language = language;
    },
    setTranslation(book, language, translator) {  //6
        book.translation = {
            translator: translator,
            language: language
        }
    },
    setPublisher(book, name, location) {   //7
        book.publisher = {
            name: name,
            location: location
        }
    },
    isSamePublisher(book1,book2) {       //8
        return book1.publisher.name ===book2.publisher.name
            && book1.publisher.location ===book2.publisher.location
    }

}


console.log(bookUtils.getFirstPublished(book1,book2));
console.log(bookUtils.setNewEdition(book1,2002));
console.log(bookUtils.setNewEdition(book1,2003));
console.log(bookUtils.setLanguage(book1, 'French'));
bookUtils.setTranslation(book1, 'Hebrew','Moshe C');
bookUtils.setPublisher(book1, 'Pub','Tel-Aviv2');
bookUtils.setPublisher(book2, 'Pub','Hulon2');
console.log(bookUtils.isSamePublisher(book1, book2));
console.log(book1)