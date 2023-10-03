import Botao from "./Botao";

type BookProps = {
  books: {
    title: string;
    author: string;
    year: number;
    genre: string;
    image: string;
  }[]
}

function Book({ books }: BookProps) {

  const handleClick2 = (text: string) => {
    alert(text);
  }

  return (
    <>
      {books.map((book) => (
        <div key={book.title} className='col-md-4 p-5 text-center'>
          <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.genre}</p>
            <img src={book.image} />
          </div>

          <div className='p-5 d-grid gap-2'>
            <Botao
              click={() => handleClick2(book.author)} // book.year error
              tipo='btn btn-primary'
            >
              <strong>{book.title}</strong>
            </Botao>
          </div>
        </div>
      ))}
    </>
  )
}

export default Book
