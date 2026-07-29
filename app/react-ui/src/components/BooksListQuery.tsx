import { useQuery } from "@tanstack/react-query";
import "./BooksListQuery.css";

async function fetchBooksFromBackend() {
  const response = await fetch("/odata/v4/catalog/ListOfBooks");

  const body = await response.json();

  return body.value;
}

function Loader() {
  return <div>Loading...</div>;
}

function useBooks() {
  return useQuery({
    queryKey: ["books"],
    initialData: [],
    queryFn: fetchBooksFromBackend,
  });
}

export function BooksListQuery() {
  const { data: books, isPending, error, isError } = useBooks();
  return (
    <>
      {isError && <div>{error.message}</div>}
      {isPending && <Loader />}

      <table className="booksTable">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BooksListItem key={book.ID} book={book} />
          ))}
        </tbody>
      </table>
    </>
  );
}

function BooksListItem({ book }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.stock}</td>
      <td>
        {book.price}
        {book.currency}
      </td>
      <td>
        <a href={`/books/${book.ID}`}>Show</a>
      </td>
    </tr>
  );
}
