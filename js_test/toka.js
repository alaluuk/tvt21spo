const booklist=["PHP Basics", "C++ ","JavaScript code"];

const book={
    getAllBooks(){
        console.log(booklist);
        //SELECT * FROM book
    },
    addBook(bookName){
        console.log("Book "+bookName+ " lisättiin");
        //INSERT INTO book ...
    }
}

book.getAllBooks();
book.addBook("Seitsemän veljestä");