import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import { BookDetail } from "./pages/BookDetail.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="books/:id" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
