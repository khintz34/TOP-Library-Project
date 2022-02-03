let library = [
    {title: 'test Title',
     author: 'test Author',
     pages: 500,
     read: true
}
];
let book1 = new book('God', 'The Bible', '1000', 'have');
let book2 = new book('Kevin', 'Year Three', '52', 'have');
let book3 = new book('John Grisham', 'Waiting Game', 300, 'have not');
let cellCounter = 0;
let columnCounter = 0;
let rowCounter = 0;
const libraryDiv = document.getElementById("libraryDiv");
const libraryTable = document.getElementById("libraryTable");
let iterator = library.values();



function book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return(`${title} by ${author} is ${pages} pages long and I ${status} read this book.`)
    }
}

//const createNewBook = new book(author, title, pages, status);


function printArray() {
    for (let j = 0; j < library.length; j++ ) {
        
//        const row = document.createElement('div');
//        row.classList.add('rowTest');
//        const rowTest = document.querySelector('.rowTest');
//        row.innerHTML = JSON.stringify(iterator.next().value);
//        console.log(row);
        console.table(library[j]);
        libraryTable.innerHTML += JSON.stringify(library[j], null, 4);
//        console.log(rowTest);
//        libraryTable.appenndChild(row);
        
//        document.getElementById('libraryTable').innerHTML = JSON.stringify(library);

        rowCounter++;
    }
}


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
console.log(JSON.stringify(library));
printArray();


let size = library.length;
console.log(size);



function addBookToLibrary(books) {
    library.push(books);
}

//makeGrid(size);
// //make grid 
// function makeGrid(size) {

// libraryTable.style.gridTemplateColumns = `repeat(4, 200px`
// libraryTable.style.gridTemplateRows = `repeat(${size}, 50px)`

// for (let i = 0; i < size * 4; i++) {
//     const gridCell = document.createElement('div')
//     libraryTable.appendChild(gridCell)
//     gridCell.style.borderStyle = 'solid';
//     gridCell.style.borderColor = 'black';
//     gridCell.classList.add('gridCell');
    
//     countCells();
// //   gridCell.classList.add(`cell${cellCounter}`);
// //   const cellTest = document.querySelector(`.cell${cellCounter}`);
// //   console.log(`cell${cellCounter}`);   
//      gridCell.innerHTML=library;   
// }
// }

// function countCells() {
//     if (columnCounter <= 3) {
//         columnCounter++;
//     } else {
//         columnCounter = 1;
//         rowCounter++;
//     }   
//     cellCounter++;  
// }



