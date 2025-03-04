import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./page/home/home";
import { AddUsers } from "./page/addUsers/addUsers";
import { UpdateUsers } from "./page/editUsers/editUsers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/addusers" element={<AddUsers />} />
          <Route path="/updateUser/:id" element={<UpdateUsers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
