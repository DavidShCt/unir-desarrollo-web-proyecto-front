import BookCard from "./BookCard";
import "./BookList.css";

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p className="book-list__empty">No se encontraron libros.</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
}
