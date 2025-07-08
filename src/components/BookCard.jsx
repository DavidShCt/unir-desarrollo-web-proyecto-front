import { Link } from "react-router-dom";
import "./BookCard.css";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.imagen} alt={book.nombre} className="book-card__image" />
      <div className="book-card__info">
        <h3 className="book-card__title">{book.nombre}</h3>
        <p className="book-card__author">Autor: {book.autor}</p>
        <p className="book-card__isbn">ISBN: {book.isbn13}</p>
        <p className="book-card__year">Año: {book.año}</p>

        <Link to={`/libro/${book.id}`} className="book-card__link">
          Ver detalles →
        </Link>
      </div>
    </div>
  );
}
