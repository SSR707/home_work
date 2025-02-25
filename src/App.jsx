import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { AddUsers } from "./page/addUser";
import { Users } from "./page/users";
import { UpdateUsers } from "./page/userEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Users />} />
          <Route path="/addusers" element={<AddUsers />} />
          <Route path="/updateUser/:id" element={<UpdateUsers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
