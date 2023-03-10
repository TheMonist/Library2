let myLibrary = [];
let submitButton = document.getElementById("btn-submit");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//function to add books to liibrary array
function addBookToLibrary() {
    let titleData = document.getElementById("title").value;
    let authorData = document.getElementById("author").value;
    let pageData = document.getElementById("pages").value;
    let readData = document.getElementById("read").checked;

     //Handles the toggle switch data
    if (readData.checked) {
        readData.value = true;
    } else {
        readData.value = false;
    };

    let book = new Book(titleData, authorData, pageData, readData);
    myLibrary.push(book);
    updateDisplay();
};

function updateDisplay() {
    let library = document.querySelector(".library");
    //to clear the display
    library.innerHTML = "";

    //create element and add book from list
    myLibrary.forEach((book) => {
        let books = document.createElement("div");
        books.classList.add("book", "card", "mx-2", "mt-3");
        books.style.width = "18rem";
        library.appendChild(books);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "bg-info");
        books.appendChild(cardBody);

        let titleInfo = document.createElement("h5");
        titleInfo.classList.add("card-title");
        titleInfo.textContent = book.title;
        cardBody.appendChild(titleInfo);

        let authorInfo = document.createElement("p");
        authorInfo.classList.add("class-text");
        authorInfo.textContent = `Author: ${book.author}`;
        cardBody.appendChild(authorInfo);

        let pageInfo = document.createElement("p");
        pageInfo.classList.add("card-text");
        pageInfo.textContent = `Pages: ${book.pages}`;
        cardBody.appendChild(pageInfo);

        let formDiv = document.createElement("div");
        formDiv.classList.add("form-check", "form-switch");
        cardBody.appendChild(formDiv);

        let readInput = document.createElement("input");
        readInput.classList.add("form-check-input");
        readInput.type = "checkbox";
        formDiv.appendChild(readInput);
        
        let readLabel = document.createElement("label");
        readLabel.classList.add("form-check-label");
        readLabel.textContent = "Read";
        formDiv.appendChild(readLabel);

        let removeButton = document.createElement("button");
        removeButton.classList.add("btn", "btn-danger", "btn-sm")
        removeButton.textContent = "Remove Book";
        cardBody.appendChild(removeButton);

        removeButton.addEventListener("click", (e) => removeBook(e));
        
    });
};

function removeBook(event) {
    let targetBook = event.currentTarget.parentNode.parentNode.parentNode.dataset.bookID;
    let index = myLibrary.findIndex(book => book.id == targetBook);
    myLibrary.splice(index, 1);
    updateDisplay();
};

function updateRead(event) {
    let targetBook = event.currentTarget.parentNode.parentNode.parentNode.dataset.bookID;
    let index = myLibrary.findIndex(book => book.id == targetBook);
    myLibrary.splice(index, 1);
    myLibrary[index].read = !myLibrary[index].read;
};

submitButton.addEventListener("click", e => {
    e.preventDefault();
    addBookToLibrary();
    updateDisplay();
});