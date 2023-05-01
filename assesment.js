// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];
// function getAvailableBooks(books){
//     let p = []
//     for(let i = 0;i=books.length;i++){
//         if (p in books === books ){
//             return p
//         }
        
//     }
//    console.log (p [i])
// }

// getAvailableBooks(books)

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(authorName){
    let x = []
    for (i = 0; i< authorName.length;i++){
    if(authorName.author().push[i]){
        return x
    }
}
console.log(x([i]))
}
getBooksByAuthor(authorName)

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(books){
    let y = [];
    sum = 0;
    if (books.add()){
        sum +=y
    }
    return
    
}
// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.