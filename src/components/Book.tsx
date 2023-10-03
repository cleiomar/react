type BookProps = {
    books: {
        title: string;
        author: string;
        year: number;
        genre: string;
        image: string;
    }[]
}

function Book({books}: BookProps) {
  return (  
    <>
        {books.map((book) => (
          <div key={book.title} className='col-md-4 p-5'>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.year}</p>
              <p>{book.genre}</p>
              <img src={book.image}/>
          </div>
        ))}
    </>
  )
}

export default Book
