import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home/home";
import { Product } from "./pages/product/product";
import { Haracteristic } from "./pages/product/pages/haracteresti";
import { Rs } from "./pages/product/pages/rs";
import { Otziv } from "./pages/product/pages/otziv";
import { AddOtziv } from "./pages/product/pages/addotziv";
import { NotFound } from "./pages/notfound/notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />}>
            <Route index element={<Haracteristic />} />
            <Route path="rs" element={<Rs />} />
            <Route path="otziv" element={<Otziv />} />
            <Route path="addotziv" element={<AddOtziv />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
