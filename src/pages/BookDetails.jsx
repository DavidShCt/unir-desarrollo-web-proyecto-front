import { useParams, useNavigate } from "react-router-dom";
import { books } from "../data/books";
import { useState } from "react";
import "./BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));
  const [isRented, setIsRented] = useState(false);

  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  const handleRent = () => {
    // Simular guardar en localStorage
    const stored = JSON.parse(localStorage.getItem("alquileres")) || [];
    const newRent = {
      bookId: book.id,
      fechaInicio: new Date().toISOString(),
      fechaFin: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 días
    };
    localStorage.setItem("alquileres", JSON.stringify([...stored, newRent]));
    setIsRented(true);
  };

  return (
    <div className="page">
      <img className="book-details__image" src={book.imagen} alt={book.nombre} />
      <div className="book-details__info">
        <h2 className="book-details__title">{book.nombre}</h2>
        <p><strong>Autor:</strong> {book.autor}</p>
        <p><strong>Año:</strong> {book.año}</p>
        <p><strong>ISBN-13:</strong> {book.isbn13}</p>
        <p><strong>Idioma:</strong> {book.idioma}</p>
        <p><strong>Sinopsis:</strong> {book.sinopsis}</p>
        <p><strong>Críticas:</strong> {book.criticas.join(", ")}</p>

        {isRented ? (
          <p className="book-details__status">✅ Libro alquilado</p>
        ) : (
          <button className="book-details__rent-btn" onClick={handleRent}>
            Alquilar por 7 días
          </button>
        )}

        <button onClick={() => navigate(-1)} className="book-details__back-btn">← Volver</button>
      </div>
    </div>
  );
}
