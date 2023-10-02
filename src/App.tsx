import './App.css'
import Book from './components/Book';

const book1 = {
  title: "O Senhor dos Anéis",
  author: "J.R.R. Tolkien",
  year: 1954,
  genre: "Fantasia",
  image: "https://a-static.mlcdn.com.br/1500x1500/livro-a-sociedade-do-anel-capa-os-aneis-de-poder/magazineluiza/235381700/435e208634bd6a1344a4065ba0da771c.jpg",
  isFavorite: true,
};

function App() {
  return (
    <>
      <Book
        book={book1}
      />
    </>
  )
}

export default App
