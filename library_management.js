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
        return this.books.filter(book => book.isAvailable).length;
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
        let findBook = this.borrowedBooks.find(b => b === book);
        if (findBook) {
            book.isAvailable = true;
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book)
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

// Task 6 Create and Manage Sections and Patrons
const fiction = new Section("Fiction");
const nonfiction = new Section("Non Fiction");

const book1 = new Book("1984", "George Orwell", "123456789");
const book2 = new Book("Brave New World", "Aldous Huxley", "987654321");
const book3 = new Book("The Cat in the Hat", "Dr.Seuss", "543216789");

fiction.addBook(book1);
fiction.addBook(book2);
nonfiction.addBook(book3);

const patron1 = new Patron("Gabe");
const vipPatron = new VIPPatron("Tom");

patron1.borrowBook(book1); // Gabe borrows 1984
vipPatron.borrowBook(book2); // Tom (VIP) borrows Brave New World

patron1.returnBook(book1); // Gabe returns 1984

console.log(`Available books in Fiction: ${fiction.calculateTotalBooksAvailable()}`);
console.log(`Available books in Non-Fiction: ${nonfiction.calculateTotalBooksAvailable()}`);