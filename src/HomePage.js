import React from "react";
import { CtaBtn } from "./components/CtaBtn";
import { Navbar } from "./components/Navbar";
import heroImg from  './assets/hero-img.png'
export const HomePage = () => {
  return (
    <>
      <header>
        <Navbar links={["USADO", "POSTVENTA", "TEST DRIVE"]} />
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-section__content">
            <h1>ITERANDO MOTORES</h1>
            <p>
              Somos la red de concesionarias de autos con mas años en Argentina.
              Respaldado por mas de 45 años junto a las marcas líderes, que han
              visto en nosotros la responsabilidad necesaria para asociarnos en
              la búsqueda de excelentes negocios.
            </p>
            <CtaBtn className="CtaBtn" text="CONSULTANOS" />
          </div>
          <div className="hero-section-img">
            <img src={heroImg} alt="hero-img" />
          </div>
        </section>
      </main>
    </>
  );
};

