import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";

export function BookDetail() {
  const params = useParams();

  const { data } = useBook(params.id!);

  return (
    <div style={{ maxWidth: "420px", margin: "0 auto", textAlign: "left" }}>
      <NavLink to="/">&larr; Back to books</NavLink>
      <div className="card" style={{ marginTop: "16px" }}>
        <h1 style={{ fontSize: "32px", margin: "0 0 8px" }}>{data?.title}</h1>
        {data?.author && <p>by {data.author}</p>}
      </div>
    </div>
  );
}

async function fetchBookFromBackend(id: string) {
  const response = await fetch(`/odata/v4/catalog/ListOfBooks(${id})`);
  const body = await response.json();

  return body;
}

function useBook(id: string) {
  return useQuery({
    queryKey: ["books", id],
    initialData: [],
    queryFn: () => fetchBookFromBackend(id),
  });
}
