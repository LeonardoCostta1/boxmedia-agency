import React from "react";
import Banner from "../../Components/Banner";
import Sobre from "../../Components/Sobre";
import Services from "../../Components/Services";
import Clients from "../../Components/Clients";
import Works from "../../Components/Works";
import Price from "../../Components/Price";
function Home() {
  return (
    <div>
      <Banner />
      <Clients />
      <Price />
      <Sobre />
      <Works />
      <Services />
    </div>
  );
}

export default Home;
