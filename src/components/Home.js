import React from "react";
import Cards from "./Cards";

import "./App.css";

function Home() {
  return (
    <div className="Home">
      <div className="container">
     

      <section class="header-x">
    
      <div class="text-x">
        <div className="hoverx">
        
      </div>
      </div>
    </section>

        <Cards />

        <footer className="container py-5">
         
          <section className="footer">
            <p>Do follow us on social media platfroms.</p>
            <div class="icons">
              <i class="fa fa-facebook"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-twitter"></i>
            </div>
            <p>
              made by <i class="fa fa-heart-o"></i> DEBU
            </p>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default Home;
