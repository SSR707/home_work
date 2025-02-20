import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { AddTasks } from "./pages/addTask/addTask";
import { Tasks } from "./pages/tasks/tasks";
import { EditTasks } from "./pages/editTask/editTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Tasks />} />
          <Route path="addtask" element={<AddTasks />} />
          <Route path="editTask/:id" element={<EditTasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
