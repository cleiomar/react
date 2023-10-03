import Botao from "./Botao";
import Swal from 'sweetalert2';

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

  /*const handleClick2 = (text: string) => {
    alert(text);
  }*/

  const SwalDialog = (titulo: string) => {
    Swal.fire({
      title: 'Atenção',
      text: "Deseja comprar o livro?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Comprar',      
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
          title: 'Comprado!',
          html: 'Transação do livro: <strong>'+ titulo + '<br></strong> foi Efetuada com Sucesso',
          icon: 'success',
          confirmButtonColor: '#0d6efd',
          confirmButtonText: 'OK'
        })
      }
    })
  }

  return (
    <>
      {books.map((book) => (
          <div key={book.title} className='col-md-4 pt-5 text-center'>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.genre}</p>
            <img src={book.image} />

          <div className='p-5 d-grid gap-2'>
            <Botao
              click={() => SwalDialog(book.title)} // book.year error
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
