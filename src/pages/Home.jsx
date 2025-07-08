import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import { books } from "../data/books";
import useFilteredBooks from "../hooks/useFilteredBooks";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const filteredBooks = useFilteredBooks(query, books);

  return (
    <main className="home">
      <SearchBar query={query} setQuery={setQuery} />
      <BookList books={filteredBooks} />
    </main>
  );
}
