import { useQuery } from "@tanstack/react-query";

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
      {books.map((book) => (
        <h1 key={book.ID}>{book.title}</h1>
      ))}
    </>
  );
}
