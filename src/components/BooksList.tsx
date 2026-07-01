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
  const [error, setError] = useState("");

  async function load() {
    try {
      setError("");
      setLoading(true);
      const books = await fetchBooksFromBackend();
      setBooks(books);
      setLoading(false);
    } catch (err) {
      setError("Something went wrong");
    }
  }

  useEffect(() => {
    console.log("useEffect is called");
    load();
  }, []);

  return {
    books,
    loading,
    error,
  };
}

export function BooksList() {
  const { books, loading, error } = useBooks();
  return (
    <>
      {error && <div>{error}</div>}
      {loading && <Loader />}
      {books.map((book) => (
        <h1 key={book.ID}>{book.title}</h1>
      ))}
    </>
  );
}
