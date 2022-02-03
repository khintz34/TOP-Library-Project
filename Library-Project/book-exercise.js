// setting library with Test data just as a starting point
let library = [
    {title: 'test Title',
     author: 'test Author',
     pages: 500,
     read: true
    }
]

//manually adding books. Eventually I will create a form that the user will fill out 
// and then use that to push into library
let book1 = new book('God', 'The Bible', '1000', 'have');
let book2 = new book('David Dunk', 'Sarcrifce', '88', 'have');
let book3 = new book('Mrs. Rogers', 'Sleeping in Class', 300, 'have not');

// Basic Variables/Counters/etc
let cellCounter = 0;
let columnCounter = 0;
let rowCounter = 0;
let size = library.length;
const libraryDiv = document.getElementById("libraryDiv");
const libraryTable = document.getElementById("libraryTable");


// Have you used this before? I was using Next.value below to iterate through but I dont think its 
//the best way 
let iterator = library.values();


// function that puts into object
function book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}


//function that adds objects into the array
function addBookToLibrary(books) {
    library.push(books);
    size = library.length;
}

// This is the main function that I am trying to use to print the Library array 
// onto the screen. 
function printArray() {
    for (let j = 0; j < library.length; j++ ) {
        
       const row = document.createElement('tr');
       const td = document.createElement('td');
       td.classList.add('testingClass');
//       WTF.innerHTML='testing???';
//       console.log(td);
       libraryTable.appendChild(td);
//        row.classList.add('rowTest');
//        const rowTest = document.querySelector('.rowTest');
//        row.innerHTML = JSON.stringify(iterator.next().value);
        console.table(library[j]);
        libraryTable.innerHTML += JSON.stringify(library[j], null, 4);
        countCells();

    }
}

function countCells() {
     if (columnCounter <= 3) {
         columnCounter++;
     } else {
         columnCounter = 1;
         rowCounter++;
     }   
     cellCounter++;  
 }

// manually calling function to add to Library
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

//calling main function
printArray();



//console.logs for testing/debugging 
console.log(JSON.stringify(library));
console.log(Object.keys(library));
console.log(size);




////////////////************************************************************** */
//BELOW THIS LINE ARE SOME OF THE THINGS I WAS TRYING. I LEFT FOR A REFERENCE TO LOOK AT. 


//const createNewBook = new book(author, title, pages, status);


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





