import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/SuggestionsModal.css'; // Importa el nuevo archivo CSS

const SuggestionsModal = ({ show, onHide }) => (
    <Modal show={show} onHide={onHide} className="suggestions-modal">
        <Modal.Header closeButton>
            <Modal.Title>Páginas para Más Libros Gratis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li><a href="https://www.gutenberg.org/" target="_blank" rel="noopener noreferrer">Project Gutenberg</a> - Libros clásicos gratuitos.</li>
                <li><a href="https://openlibrary.org/" target="_blank" rel="noopener noreferrer">Open Library</a> - Libros de la Biblioteca de Internet Archive.</li>
                <li><a href="https://manybooks.net/" target="_blank" rel="noopener noreferrer">ManyBooks</a> - Miles de libros gratuitos en varios formatos.</li>
                <li><a href="https://www.smashwords.com/" target="_blank" rel="noopener noreferrer">Smashwords</a> - Libros auto-publicados gratuitos.</li>
                <li><a href="https://www.freetechbooks.com/" target="_blank" rel="noopener noreferrer">FreeTechBooks</a> - Libros de informática y programación gratuitos.</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide} className="btn-close"></Button>
        </Modal.Footer>
    </Modal>
);

export default SuggestionsModal;
