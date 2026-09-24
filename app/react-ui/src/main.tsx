import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import About from "./pages/About.tsx";
import { BookDetail } from "./pages/BookDetail.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./components/layout/MainLayout.tsx";
import { CreateBook } from "./pages/CreateBook.tsx";
import { ServerData } from "./pages/ServerData.tsx";
import Components from "./pages/Components.tsx";

const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ServerData />} />
            <Route path="components" element={<Components />} />
            <Route path="about" element={<About />} />
            <Route path="create" element={<CreateBook />} />

            <Route path="books/:id" element={<BookDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
