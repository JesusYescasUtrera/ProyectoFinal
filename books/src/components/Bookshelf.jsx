import React, { useState } from 'react';
import '../styles/Bookshelf.css';

const Bookshelf = ({ books, onRead, onRemove }) => {
    const [showBookshelf, setShowBookshelf] = useState(false);

    const toggleBookshelf = () => {
        setShowBookshelf(!showBookshelf);
    };

    return (
        <div className="bookshelf-container">
            <button className="btn btn-secondary-custom" onClick={toggleBookshelf}>
                {showBookshelf ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
            </button>
            {showBookshelf && (
                <div className="bookshelf">
                    <h2>Tu Estantería</h2>
                    <div className="row">
                        {books.map(book => (
                            <div key={book.cover_edition_key} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                <div className="card h-100">
                                    <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} className="card-img-top" alt={book.title} />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h5 className="card-title">{book.title}</h5>
                                        <div className="btn-group-custom">
                                            <button className="btn btn-info-custom" onClick={() => onRead(book.cover_edition_key)}>Leer</button>
                                            <button className="btn btn-danger" onClick={() => onRemove(book.cover_edition_key)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bookshelf;
