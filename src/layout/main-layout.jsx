import React from "react";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { Sectionn } from "../components/section/section";
import { Footer } from "../components/footer/footer";

export const MainLayout = () => {
  return (
    <>
      <header style={{ paddingTop: "10px" }}>
        <Header />
      </header>
      <main>
        <section
          style={{
            backgroundColor: "#618c78",
            padding: "50px 0px",
          }}
        >
          <Hero />
        </section>
        <section style={{ paddingTop: "100px" }}>
          <Sectionn title={"Новинки"} text={"Все новинки"} />
        </section>

        <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Sectionn title={"Скидки"} text={"Все скидки"} isChek={true} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
