import React from "react";
import Banner from "../../Components/Banner";
import Sobre from "../../Components/Sobre";
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
    </div>
  );
}
export default Home;