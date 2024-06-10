import React from 'react';

const SearchBar = ({ query, handleInputChange, handleShowAll, handleHide }) => (
    <div className="input-group mb-3">
        <input
            type="text"
            className="form-control"
            placeholder="Buscar un libro..."
            value={query}
            onChange={handleInputChange}
        />
        <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleShowAll}>Mostrar y Buscar</button>
            <button className="btn btn-primary" onClick={handleHide}>Ocultar</button>
        </div>
    </div>
);

export default SearchBar;
