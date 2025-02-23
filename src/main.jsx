import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/theam.js";
import './style/font.css'
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
