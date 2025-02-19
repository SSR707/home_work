import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Book } from "./pages/book/book";
import { NotFound } from "./pages/notfound/notfound";
import { BookSubInfo } from "./pages/book/components/bookSubInfo";
import { BookComment } from "./pages/book/components/bookComment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="book/:id" element={<Book />}>
            <Route index element={<BookSubInfo />} />
            <Route path="comment" element={<BookComment />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
