import { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import { searchBooks, getBookDetails } from "../api/books";
import _ from "lodash";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favoriteBooks")) || []
  );
  const [query, setQuery] = useState("");
  const [view, setView] = useState("home");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesToShow, setPagesToShow] = useState(12);
  const booksPerPage = 9;

  const debouncedSearch = useCallback(
    _.debounce((search) => {
      searchBooks(search)
        .then((data) => setBooks(data))
        .catch((error) => {
          console.error("Error fetching books:", error);
          Swal.fire("Error fetching books", "", "error");
        });
    }, 500),
    []
  );

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  useEffect(() => {
    localStorage.setItem("favoriteBooks", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (book) => {
    if (favorites.some((fav) => fav.key === book.key)) {
      Swal.fire("Libro ya en favoritos", "", "info");
      return;
    }
    const newFavorites = [...favorites, book];
    setFavorites(newFavorites);
    Swal.fire({
      title: "¡Libro guardado como favorito!",
      text: `${book.title} ha sido guardado en tus favoritos.`,
    });
  };

  const handleRead = (bookId) => {
    getBookDetails(bookId)
      .then((data) => {
        const readUrl = data.url || `https://openlibrary.org/works/${bookId}`;
        window.open(readUrl, "_blank");
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
        Swal.fire("Error fetching book details", "", "error");
      });
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleShowAll = () => {
    setView("all");
    setCurrentPage(1);
    setPagesToShow(12);
  };

  const handleHide = () => {
    setView("home");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPages = () => {
    setPagesToShow(pagesToShow + 12);
  };

  const handleRemoveFavorite = (bookId) => {
    const newFavorites = favorites.filter(
      (book) => book.cover_edition_key !== bookId
    );
    setFavorites(newFavorites);
    Swal.fire("Libro eliminado de favoritos", "", "success");
  };

  return {
    books,
    favorites,
    query,
    view,
    currentPage,
    pagesToShow,
    booksPerPage,
    setFavorites,
    handleFavorite,
    handleRead,
    handleInputChange,
    handleShowAll,
    handleHide,
    handlePageChange,
    handleNextPages,
    handleRemoveFavorite,
  };
};
