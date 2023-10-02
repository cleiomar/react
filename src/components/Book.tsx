type BookProps = {
    book: {
        title: string;
        author: string;
        year: number;
        genre: string;
        image: string;
        isFavorite: boolean;
    }
}

function Book({book}: BookProps) {
  return (  
    <>
    <h2 className="book-css">{book.title}</h2>
    <p className="book-css">{book.author}</p>
    <p className="book-css book-genre">{book.year}</p>
    <p className="book-css">{book.genre}</p>
    <img src={book.image} className="book-img"/>
    {book.isFavorite && <span>✅</span>}
    </>
  )
}

export default Book
