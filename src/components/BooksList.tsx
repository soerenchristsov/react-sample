import { useEffect, useState } from "react";

async function fetchBooksFromBackend() {
  const response = await fetch(
    "http://localhost:4004/odata/v4/catalog/ListOfBooks",
  );

  const body = await response.json();

  return body.value;
}

function Loader() {
  return <div>Loading...</div>;
}

function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    console.log("loading");
    setLoading(true);
    const books = await fetchBooksFromBackend();
    setBooks(books);
    setLoading(false);
  }

  useEffect(() => {
    console.log("useEffect is called");
    load();
  }, []);

  return {
    books,
    loading,
  };
}

export function BooksList() {
  const { books, loading } = useBooks();
  return (
    <>
      {loading && <Loader />}
      {books.map((book) => (
        <h1 key={book.ID}>{book.title}</h1>
      ))}
    </>
  );
}
