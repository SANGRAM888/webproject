import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Home from "./Home";
import About from "./About";
import Audi from "./Audi";
import Contact from "./Contact";
import Mercedes from "./Mercedes";
import Cardillac from "./Cardillac";
import Markv from "./Markv";
import Rolls from "./Rolls";
import Bent from "./Bent";
import Mayb from "./Mayb";
import Bmwsports from "./Bmwsports";
import Rghst from "./Rghst";
import Teslax from "./Teslax";
import Lam from "./Lam";
import Tesla from "./Tesla";
import Honda from "./Honda";
import Ford from "./Ford";
import Tata from "./Tata";
import Audietron from "./Audietron";
import Benzeqc from "./Benzeqc";
import Elec from "./Elec";
import Ferraric from "./Ferraric";
import Bmwm5 from "./Bmwm5";
import Mcl from "./Mcl";
import Pors from "./Pors";
import Ager from "./Ager";
import Lambsi from "./Lambsi";
import Bugatti from "./Bugatti";
import Hundai from "./Hundai";
import Nissan from "./Nissan";



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className=" container">
     <Navbar2 />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/audi" element={<Audi />}></Route>
          <Route exact path="/mercedes" element={<Mercedes />}></Route>
          <Route exact path="/lam" element={<Lam />}></Route>
          <Route exact path="/tesla" element={<Tesla />}></Route>
          <Route exact path="/honda" element={<Honda />}></Route>
          <Route exact path="/ford" element={<Ford />}></Route>
          <Route exact path="/tata" element={<Tata />}></Route>

          <Route exact path="/ferraric" element={<Ferraric />}></Route>
          <Route exact path="/pors" element={<Pors />}></Route>
          <Route exact path="/mcl" element={<Mcl/>}></Route>
          <Route exact path="/bmwm5" element={<Bmwm5 />}></Route>

          <Route exact path="/cardillac" element={<Cardillac />}></Route>
          <Route exact path="/markv" element={<Markv />}></Route>
          <Route exact path="/rolls" element={<Rolls />}></Route>
          <Route exact path="/bent" element={<Bent />}></Route>
          <Route exact path="/mayb" element={<Mayb />}></Route>
          <Route exact path="/bmwsports" element={<Bmwsports />}></Route>
          <Route exact path="/rghst" element={<Rghst />}></Route>

          <Route exact path="/teslax" element={<Teslax />}></Route>
          <Route exact path="/audietron" element={<Audietron />}></Route>
          <Route exact path="/benzeqc" element={<Benzeqc />}></Route>
          <Route exact path="/elec" element={<Elec />}></Route>
          <Route exact path="/nissan" element={<Nissan />}></Route>
          <Route exact path="/hundai" element={<Hundai />}></Route>

          <Route exact path="/ager" element={<Ager />}></Route>
          <Route exact path="/lambsi" element={<Lambsi />}></Route>
          <Route exact path="/bugatti" element={<Bugatti />}></Route>
          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
