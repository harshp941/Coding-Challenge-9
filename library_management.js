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
