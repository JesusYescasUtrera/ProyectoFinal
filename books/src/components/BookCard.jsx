import React from 'react';

const BookCard = ({ book, handleRead, handleFavorite }) => (
    <div key={book.key} className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
            <img src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'placeholder-image-url'} className="card-img-top" alt={book.title} style={{ height: '150px', objectFit: 'cover' }} />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{book.title}</h5>
                <div className="btn-group-custom">
                    <button className="btn btn-info-custom" onClick={() => handleRead(book.edition_key[0])}>Leer</button>
                    <button className="btn btn-primary-custom" onClick={() => handleFavorite(book)}>Favorito</button>
                </div>
            </div>
        </div>
    </div>
);

export default BookCard;
