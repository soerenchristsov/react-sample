import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export function BookDetail() {
  const params = useParams();

  const { data } = useBook(params.id!);

  return (
    <div>
      <h1>{data?.title}</h1>
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
