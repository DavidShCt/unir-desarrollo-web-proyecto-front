// src/pages/Rental.jsx
import { useEffect, useState } from "react";
import { books } from "../data/books";
import "./Rental.css";

export default function Rental() {
  const [rentedBooks, setRentedBooks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("alquileres")) || [];
    const rentalsWithBook = stored.map((r) => ({
      ...r,
      book: books.find((b) => b.id === r.bookId),
    }));
    setRentedBooks(rentalsWithBook);
  }, []);

  const handleExtend = (bookId) => {
    const updated = rentedBooks.map((r) =>
      r.bookId === bookId
        ? {
            ...r,
            fechaFin: new Date(new Date(r.fechaFin).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          }
        : r
    );
    localStorage.setItem("alquileres", JSON.stringify(updated));
    setRentedBooks(updated);
  };

  return (
    <div className="rental">
      <h2 className="rental__title">Mis Alquileres</h2>
      {rentedBooks.length === 0 ? (
        <p>No has alquilado libros aún.</p>
      ) : (
        rentedBooks.map((r) => (
          <div key={r.bookId} className="rental__item">
            <div className="rental__info">
              <img
                src={r.book?.imagen}
                alt={r.book?.nombre}
                className="rental__thumbnail"
              />
              <div className="rental__details">
                <h3 className="rental__book-title">{r.book?.nombre}</h3>
                <p><strong>Inicio:</strong> {new Date(r.fechaInicio).toLocaleDateString()}</p>
                <p><strong>Fin:</strong> {new Date(r.fechaFin).toLocaleDateString()}</p>
                <button className="rental__btn" onClick={() => handleExtend(r.bookId)}>
                  Extender 7 días
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
