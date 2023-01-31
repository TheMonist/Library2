let myLibrary = [];
const submitButton = document.getElementById("submit");

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
    //to clear the display
    library.innerHTML = "";

    //create element and add book from list
    myLibrary.forEach((book) => {
        const book = document.createElement("div");
        book.classList.add("book", "card", "mx-2", "mt-3");
        book.style.width = "18rem";
        book.append(library);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.append(card);

        const titleInfo = document.createElement("h5");
        titleInfo.classList.add("card-title");
        titleInfo.textContent = book.title;
        titleInfo.append(cardBody);

        const authorInfo = document.createElement("p");
        authorInfo.classList.add("class-text");
        authorInfo.textContent = book.author;
        authorInfo.append(cardBody);

        const pageInfo = document.createElement("p");
        pageInfo.classList.add("card-text");
        pageInfo.textContent = book.pages;
        pageInfo.append(cardBody);

        const formDiv = document.createElement("div");
        formDiv.classList.add("form-check", "form-switch");
        formDiv.append(cardBody);

        const readInput = document.createElement("input");
        readInput.classList.add("form-check-input");
        readInput.append(formDiv);
        
        const readLabel = document.createElement("label");
        readLabel.classList.add("form-check-label");
        readLabel.type ="checkbox";
        if (book.read) readLabel = true;
        readLabel.textContent = "Read";
        readLabel.append(formDiv);

        const removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger", "btn-sm")
        removeButton.textContent = "Remove Book";
        removeButton.append(cardBody);

        removeButton.addEventListener("click", (e) => removeBook(e));

    });
};

submitButton.addEventListener("click", e => {
    e.preventDefault();
    addBookToLibrary();
    updateDisplay();
});

function removeBook(event) {
    let targetBook = event.currentTarget.parentNode.parentNode.parentNode.dataset.bookID;
    let index = myLibrary.findIndex(book => book.id == targetBook);
    myLibrary.splice(index, 1);
    updateDisplay();
}

function updateRead(event) {
    let targetBook = event.currentTarget.parentNode.parentNode.parentNode.dataset.bookID;
    let index = myLibrary.findIndex(book => book.id == targetBook);
    myLibrary.splice(index, 1);
    myLibrary[index].read = !myLibrary[index].read;
}