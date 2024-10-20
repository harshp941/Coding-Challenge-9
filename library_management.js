// Task 1 Create a Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this._isAvailable = true;
    }


getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;

}
// This method allows you to retrieve or access the value of a private property.
get isAvailable() {
    return this._isAvailable
}
// This method allows you to set or change the value of a private property, often with some validation logic.
set isAvailable(value) {
    this._isAvailable= value;
}
}

//Task 2 Create a Section class
 class Section {
    constructor(name) {
        this.name= name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable.length);
    }

    listBooks() {
        return this.books.map(book => ({
            title: book.title,
            isAvailable: book.isAvailable,
        }));
    }
// This is Task 5
    calculateTotalBooksAvailable() {
        return this.getAvailableBooks();
    }
 }
// Task 3 Create a Patron Class
 class Patron {
    constructor(name){
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
        }
    }

    returnBook(book) {
        let index = this.borrowedBooks.indexOf(book);
        if (index!== -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index,1);
        }
    }
 }

 //Task 4 Create a VIPPatron Class that inherits from Patron
 class VIPPatron extends Patron{
    constructor(name) {
        super(name);
        this.priority = true;
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
        }
    }
 }
 