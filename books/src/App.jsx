import React, { useState } from 'react';
import { useBooks } from './hooks/useBooks';
import Bookshelf from './components/Bookshelf';
import SuggestionsModal from './components/SuggestionsModal';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import Pagination from './components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  const {
    books,
    favorites,
    query,
    view,
    currentPage,
    pagesToShow,
    booksPerPage,
    handleFavorite,
    handleRead,
    handleInputChange,
    handleShowAll,
    handleHide,
    handlePageChange,
    handleNextPages,
    handleRemoveFavorite,
  } = useBooks();

  const [showSuggestionsModal, setShowSuggestionsModal] = useState(false);

  const renderContent = () => {
    if (view === 'home') {
      return null;
    } else {
      const indexOfLastBook = currentPage * booksPerPage;
      const indexOfFirstBook = indexOfLastBook - booksPerPage;
      const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

      const totalPageCount = Math.ceil(books.length / booksPerPage);
      const pages = [];
      for (let i = 1; i <= totalPageCount; i++) {
        if (i <= pagesToShow) {
          pages.push(i);
        }
      }

      return (
        <>
          <div className="row">
            {currentBooks.map(book => (
              <BookCard
                key={book.key}
                book={book}
                handleRead={handleRead}
                handleFavorite={handleFavorite}
              />
            ))}
          </div>
          {view === 'all' && (
            <Pagination
              currentPage={currentPage}
              pages={pages}
              handlePageChange={handlePageChange}
              handleNextPages={handleNextPages}
              pagesToShow={pagesToShow}
              totalPageCount={totalPageCount}
            />
          )}
        </>
      );
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="gradient-text">Explorador de Libros</h1>
        <SearchBar
          query={query}
          handleInputChange={handleInputChange}
          handleShowAll={handleShowAll}
          handleHide={handleHide}
        />
        <Bookshelf books={favorites} onRead={handleRead} onRemove={handleRemoveFavorite} />
        {renderContent()}
      </div>
      <footer className="footer">
        <p>&copy; 2024 Explorador de Libros. Todos los derechos reservados.</p>
      </footer>
      <button
        className="btn btn-creator-info"
        style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}
        onClick={() => setShowSuggestionsModal(true)}
      >
        Sugerencias
      </button>
      <SuggestionsModal show={showSuggestionsModal} onHide={() => setShowSuggestionsModal(false)} />
    </>
  );
}

export default App;
