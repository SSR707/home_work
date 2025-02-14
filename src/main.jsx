import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";
import "./components/header/header.css";
import "./components/hero/hero.css";
import "./components/info/info.css";
import "./components/ruknlar/ruknlar.css";
import "./components/new_book/new_book.css";
import "./components/audio_book/audio_book.css";
import "./components/footer/footer.css";

createRoot(document.getElementById("root")).render(<App />);
