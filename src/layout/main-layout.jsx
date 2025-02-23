import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

export const MainLayout = () => {
  return (
    <Stack height={"100vh"} justifyContent={"space-between"}>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </Stack>
  );
};
