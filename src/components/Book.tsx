import Botao from "./Botao";
import Swal from 'sweetalert2';
import { useState } from 'react'


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

  const [valor, setValor] = useState(0);

  const handleClickPreview = () => {
    if (valor > 0) {
      setValor(valor - 1)
    }
  }

  const handleClickNext = () => {
    if (valor < 10) {
      setValor(valor + 1)
    }
  }

  const SwalDialog = (titulo: string, imagem: string) => {
    Swal.fire({
      title: 'Atenção',
      html: "<b>Deseja comprar o livro?</b><br><img src='" + imagem + "' />",
      //icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Comprar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire({
          title: 'Perfeito!',
          html: 'Transação do livro: <strong>' + titulo + '<br></strong> foi Efetuada com Sucesso',
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

          <div className='pb-3 pt-3 buttonClick gap-3'>
            <button className='btn btn-primary btn-qnt' onClick={handleClickPreview}>-</button>
            <span className="span-qnt"> {valor} </span>
            <button className='btn btn-primary btn-qnt' onClick={handleClickNext}>+</button>
          </div>
          <div className='p-5 pt-0 d-grid gap-2'>
            <Botao
              click={() => SwalDialog(book.title, book.image)}
              tipo='btn btn-primary'
            >
              <strong>COMPRAR</strong>
            </Botao>
          </div>
        </div>
      ))}
    </>
  )
}

export default Book
