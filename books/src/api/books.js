import axios from "axios";

export const searchBooks = async (query) => {
  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${query}`
  );
  return response.data.docs;
};

export const getBookDetails = async (bookId) => {
  const response = await axios.get(
    `https://openlibrary.org/api/books?bibkeys=OLID:${bookId}&jscmd=data&format=json`
  );
  return response.data[`OLID:${bookId}`];
};

export const getAllBooks = async () => {
  const response = await axios.get(`https://openlibrary.org/search.json?q=the`);
  return response.data.docs;
};
