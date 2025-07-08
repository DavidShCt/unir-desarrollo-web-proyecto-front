import { useMemo } from "react";

export default function useFilteredBooks(query, books) {
  return useMemo(() => {
    if (!query) return books;

    const lowerQuery = query.toLowerCase();

    return books.filter((book) =>
      [book.nombre, book.autor, book.isbn10, book.isbn13, book.categoria, book.descripcion, book.idioma]
        .some(field =>
          field.toLowerCase().includes(lowerQuery)
        )
    );
  }, [query, books]);
}
