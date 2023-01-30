let myLibrary = [];
const submitButton = docuemnt.getElementById("submit");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//function to add books to liibrary array
function addBookToLibrary() {
    const titleData = document.getElementById("title").value;
    const authorData = document.getElementById("author").value;
    const pageData = document.getElementById("pages").value;
    const readData = document.getElementById("read").checked;

    let book = new Book(titleData, authorData, pageData, readData);
    myLibrary.push(book);
    updateDisplay();
};

function updateDisplay() {
    const library = document.querySelector(".library");

    //create element and add book from list
    myLibrary.forEach((myLibrarys) => {
        const book = document.createElement("div");
        book.classList.add("book", "card", "mx-2", "mt-3");
        book.style.width = "18rem";
        //book.data
        //library.appendChild(book);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const titleInfo = document.createElement("h5");
        titleInfo.classList.add("card-title");
        //titleInfo.textContent = theBook.title;

        const authorInfo = document.createElement("p");
        authorInfo.classList.add("class-text");
        //authorInfo.textContent = theBook.author;

        const pageInfo = document.createElement("p");
        pageInfo.classList.add("card-text");
        //pageInfo.textConent = theBook.pages;

        const formDiv = document.createElement("div");
        formDiv.classList.add("form-check", "form-switch");

        const readInput = document.createElement("input");
        readInput.classList.add("form-check-input");
        
        const readLabel = document.createElement("label");
        readLabel.classList.add("form-check-label");
        readLabel.textContent = "Read";

        const removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-primary", "btn-sm")
        removeButton.textContent = "Remove Book";
        //don't forget to append the button to parent (and other elements)

        removeButton.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary () {
            //function to remove book
        }

    });
};

submitButton.addEventLister("click", e => {
    e.preventDefault();
    addBookToLibrary();
    updateDisplay();
});