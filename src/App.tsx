import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Counter } from "./components/Counter";
import { Heading } from "./components/Heading";
import { BooksListQuery } from "./components/BooksListQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
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
        <BooksListQuery />
        <BooksListQuery />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
