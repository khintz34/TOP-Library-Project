let library = [];
let tempAuthor = '';
let tempTitle = '';
let tempPages = '';
let tempStatus = '';
let cellCounter = 0;
let columnCounter = 0;
let rowCounter = 0;
let size = library.length;
let errorMessage = document.querySelector('.errorMessage');
let isItBlank = false;
let errorBlanks = 'CANNOT HAVE BLANK INPUT VALUES';
let errorDuplicates = 'THIS TITLE ALREADY EXISTS IN LIBRARY';
const libraryTable = document.getElementById("library-table");
let tableRows = libraryTable.getElementsByTagName('tr');
let rowCount = tableRows.length;

//DEFAULT
let book1 = new book("Random Author", "Random Book", "100", 'No');

function book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}
  
function addBookToLibrary(books) {
    library.push(books);
    size = library.length;
}
  
function createTable() {
    for (let i = 0; i < library.length; i++) {
      const tr = document.createElement("tr");
      tr.classList.add('tableRow');
      const book = library[i];
      const columnHeaders = Object.keys(book);
  
      for (let j = 0; j < columnHeaders.length + 1; j++) {
            const key = columnHeaders[j];
            const td = document.createElement("td");
          if (j === 4) {
            const deleteButton = document.createElement('input');
                  deleteButton.type = 'button';
                  deleteButton.classList.add('deleteButton');
                  deleteButton.classList.add('buttonRound');
                  deleteButton.value = 'DELETE BOOK';
                  deleteButton.onclick =  function(ev) {
                      deleteBook(ev); }
            td.appendChild(deleteButton);
            tr.appendChild(td);
          } else if (j === 3 ) {
                const statusButton = document.createElement('input')
                      statusButton.type = 'button';
                      statusButton.classList.add('statusButton');
                      statusButton.classList.add('buttonRound');
                      if (book[key] === 'Yes') {
                          statusButton.classList.remove('redRead');
                          statusButton.classList.add('greenRead');
                          statusButton.value = 'READ';
                      } else {
                        statusButton.classList.remove('greenRead');
                        statusButton.classList.add('redRead');
                        statusButton.value = 'NOT READ';
                      }
                td.appendChild(statusButton);
                tr.appendChild(td); 
                statusButton.onclick = function () {
                    if (statusButton.value === 'READ') {
                        statusButton.classList.add('redRead');
                        statusButton.classList.remove('greenRead');
                        statusButton.value = 'NOT READ'
                    } else {
                        statusButton.classList.add('greenRead');
                        statusButton.classList.remove('redRead');
                        statusButton.value = 'READ'
                    }
                };
          }
          else {
              if(j === 0 || j === 1) {
                td.classList.add('tableElementLarge'); 
              } else {
                td.classList.add('tableElementSmall');
              }
            td.innerText = book[key]; 
            td.classList.add('tableElement');
            tr.appendChild(td);
          }       
      }
      libraryTable.appendChild(tr);
    }
}

const submitBtn = document.querySelector('.submitBtn');
const titleInput = document.querySelector('.titleInput');
const authorInput = document.querySelector('.authorInput');
const pagesInput = document.querySelector('.pagesInput');
const statusInput = document.getElementsByName('status');
  
submitBtn.onclick = function() {
      tempAuthor = authorInput.value;
      tempTitle = titleInput.value;
      tempPages = pagesInput.value;
      
      findCheckedRadio();
      
      testForBlanks();

      if (isItBlank === true) {
          return;
      }

      for (let n = 0; n < library.length; n++) {
          if (library[n].author === tempAuthor && library[n].title === tempTitle) {
              errorMessage.innerHTML = errorDuplicates;
              errorMessage.style.display = 'block';
              return
          }
      }

      addBookToLibrary(new book(tempAuthor, tempTitle, tempPages, tempStatus));

      clearTable();

      createTable();

      clearInputs();

      resetStatusInput();
};

function findCheckedRadio() {
    for(let k = 0; k < statusInput.length; k++) {
      if(statusInput[k].checked) {
          tempStatus = statusInput[k].value;
      }
    }
}

function clearTable() {
    tableRows = libraryTable.getElementsByTagName('tr');
    rowCount = tableRows.length;

 for (let x = rowCount - 1; x > 0; x--) {
     libraryTable.removeChild(tableRows[x]);
 }
}

 
function testForBlanks() {

    if (statusInput[0].checked === false && statusInput[1].checked === false ) {
        errorMessage.style.display='block';
        isItBlank = true;
    } else if (authorInput.value === '' || titleInput.value === '' ||
            pagesInput.value === '') {
              errorMessage.innerHTML = errorBlanks;
              errorMessage.style.display='block';
              isItBlank = true;
      } else {
          errorMessage.style.display='none';
          isItBlank = false;
      }
}

function clearInputs() {
    authorInput.value = '';
    titleInput.value = '';
    pagesInput.value = '';
}

function deleteBook(ev) {
    let parentValue = ev.target.parentElement;
    let indexParent = parentValue.parentElement.rowIndex;
    let indexValue = indexParent - 1;
    library.splice(indexValue, 1);

    clearTable();

    createTable();
}

function resetStatusInput() {
    for(let l = 0; l < statusInput.length; l++) {
        statusInput[l].checked = false;
    }
}
   
window.onload = function() {
    addBookToLibrary(book1);
    createTable(); 
};
  
  