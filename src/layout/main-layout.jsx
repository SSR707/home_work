import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=" pt-[21px] border-b-2 border-[#f0f0f0]">
        <Header />
      </header>
      <main className=" flex-grow">
        <Outlet />
      </main>
      <footer className=" pt-[93px]">
        <Footer />
      </footer>
    </div>
  );
};
