import React from "react";

function About() {
  return (
    <div>
      <div className="container">
        <section
          data-track-component="pagecontent"
          data-type-tab="height"
          class="marginBottom20 shadow24  carSummary readMoreLess"
          data-read-more="moveTop"
        >
          <p class="gs_readmore marginBottom20 mx-5">
            <hr class="featurette-divider" />
            <h1>About CarZone</h1>
            <hr class="featurette-divider" />
            <p>
              CarZone.com is India's leading car search venture that helps users
              buy cars that are right for them. Its website and app carry rich
              automotive content such as expert reviews, detailed specs and
              prices, comparisons as well as videos and pictures of all car
              brands and models available in India. The company has tie-ups with
              many auto manufacturers, more than 4000 car dealers and numerous
              financial institutions to facilitate the purchase of vehicles.
            </p>
            <p>
              CarZone.com has launched many innovative features to ensure that
              users get an immersive experience of the car model before visiting
              a dealer showroom. These include a Feel The Car tool that gives
              360-degree interior/exterior views with sounds of the car and
              explanations of features with videos; search and comparison by
              make, model, price, features; and live offers and promotions in
              all cities. The platform also has used car classifieds wherein
              users can upload their cars for sale.
            </p>
            <p>
              Besides the above consumer product features, CarZone.com provides
              a rich array of tech-enabled tools to OE manufacturers and car
              dealers. These include apps for dealer sales executives to manage
              leads, cloud services for tracking sales performance, call tracker
              solution, digital marketing support, virtual online showroom and
              outsourced lead management operational process for taking
              consumers from enquiry to sale.
            </p>
            <p>
              Our vision is to construct a complete ecosystem for consumers and
              car manufacturers, dealers and related businesses such that
              consumers have easy and complete access to not only buying and
              selling cars, but also manage their entire ownership experience,
              be it accessories, tyres, batteries, insurance or roadside
              assistance.
            </p>
            <p>
              The company has expanded to Southeast Asia . It also has a
              presence in the UAE.
            </p>
            <p>
              To diversify our product offerings we have ventured into car
              insurance business.
            </p>
            <hr class="featurette-divider" />
            <h2>Investors and shareholders</h2>
            <hr class="featurette-divider" />
            <p>
              CarZone.com, which went live in 2008, was set up by a bunch of
              young, enthusiastic IIT graduates. Its investors include Google
              Capital, Tybourne Capital, Hillhouse Capital, Sequoia Capital,
              HDFC Bank, Ratan Tata and Times Internet.
            </p>
          </p>
        </section>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Our Vision
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                Our vision is to construct a complete ecosystem for consumers
                and car manufacturers, dealers and related businesses such that
                consumers have easy and complete access to not only buying and
                selling cars, but also manage their entire ownership experience,
                be it accessories, tyres, batteries, insurance or roadside
                assistance.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                CarZone.com
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                CarZone.com is India's leading car search venture that helps
                users buy cars that are right for them. Its website and app
                carry rich automotive content such as expert reviews, detailed
                specs and prices, comparisons as well as videos and pictures of
                all car brands and models available in India. The company has
                tie-ups with many auto manufacturers, more than 4000 car dealers
                and numerous financial institutions to facilitate the purchase
                of vehicles.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Our acheivements
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                CarZone.com has launched many innovative features to ensure that
                users get an immersive experience of the car model before
                visiting a dealer showroom. These include a Feel The Car tool
                that gives 360-degree interior/exterior views with sounds of the
                car and explanations of features with videos; search and
                comparison by make, model, price, features; and live offers and
                promotions in all cities.
              </div>
            </div>
          </div>
        </div>
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

export default About;
