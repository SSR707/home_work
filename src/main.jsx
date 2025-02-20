import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TodoContext } from "./context/todo_contex.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TodoContext>
      <App />
    </TodoContext>
  </BrowserRouter>
);
