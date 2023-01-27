let myLibrary = [];
const submitButton = docuemnt.getElementById("submit");

function Book(title, author, pages, read) {
    this.title = Title;
    this.author = Author;
    this.pages = Pages;
    this.read = Read;
};

//function to add books to liibrary array
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    //link to a function to display array (or card with books)
};

function updateDisplay() {
    const library = document.querySelector(".library")

    //create element and add book from list
    myLibrary.forEach((myLibrary) => {
        
    });
};

submitButton.addEventLister("click", e => {
    e.preventDefault();
    addBookToLibrary();
    updateDisplay();
});