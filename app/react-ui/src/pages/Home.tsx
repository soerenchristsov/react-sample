import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Counter } from "../components/common/Counter";
import { Heading } from "../components/Heading";
import { BooksListQuery } from "../components/BooksListQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Home() {
  console.log("Hello form the logs");
  // This is a comment in javascript

  const name = "Sören";

  const headings = [
    { text: "Hello World", size: 50 },
    { text: name, size: 100, important: true },
    { text: `Hello ${name}`, size: 50 },
  ];
  /*
  const texts = headings.map(function(h) {
    return h.text;
  })
  */
  const texts = headings.map((h) => h.text);
  console.log(headings);
  console.log(texts);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Heading text="Home" />
        {headings.map((h, index) => (
          <Heading
            key={index}
            text={h.text}
            size={h.size}
            important={h.important}
          />
        ))}

        <Counter />
        {/*<BooksList />
        <BooksList />
        <BooksList />
        <BooksList />*/}
        <BooksListQuery />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Home;
