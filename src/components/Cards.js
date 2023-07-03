import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Cards() {
  return (
    <div>
      <div className=" container my-3">
        <div
          class="alert alert-primary alert-dismissible fade show my-3"
          role="alert"
        >
          <strong>WELCOME!!</strong>Click below to know latest news about cars
          and brands
          <div className="mx-4 my-4">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              NEWS
            </button>

            <div
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                  Backdroped with scrolling
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div className="s d-flex justify-content-center">
                  <div class="card text-white bg-danger mb-3">
                    <div class="card-header">News</div>
                    <div class="card-body">
                      <h5 class="card-title"> Maruti Suzuki</h5>
                      <p class="card-text">
                      Maruti Suzuki’s 1st Electric Car Launch In 2025 – Confirmed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="s d-flex justify-content-center">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-header">News</div>
                    <div class="card-body">
                      <h5 class="card-title"> Hyundai</h5>
                      <p class="card-text">
                      2022 Hyundai Tucson India launch today
                      </p>
                    </div>
                  </div>
                </div>
                <div className="s d-flex justify-content-center">
                  <div class="card text-white bg-success mb-3">
                    <div class="card-header">News</div>
                    <div class="card-body">
                      <h5 class="card-title">MG Hector</h5>
                      <p class="card-text">
                      2023 MG Hector spotted ahead of launch, to get huge 14-inch infotainment screen
                      </p>
                    </div>
                  </div>
                </div>
                <div className="s d-flex justify-content-center">
                  <div class="card text-white bg-warning mb-3">
                    <div class="card-header">News</div>
                    <div class="card-body">
                      <h5 class="card-title">Audi</h5>
                      <p class="card-text">
                      2022 Audi Q3 to launch in India soon, gets officially teased
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card t t-2 h-100">
              <img src="images/cimg/c2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title text-white">
                  Agera Koenigsegg{" "}
                  <span class="badge  rounded-pill bg-secondary">New</span>
                </h4>
                <p class="card-text text-dark">
                  <strong>"Rs : 12,00,00,000"</strong>
                  <br></br> The Agera features a unique 7-speed transmission
                  with an E-diff and wet clutch functionality developed in-house
                  at...
                  <br></br>
                  <small className="text-muted">Visit to know more.</small>
                </p>
                <Link class="btn btn-outline-danger" to="/ager" role="button">
                  Visit
                </Link>
              </div>

              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card t t-1 h-100">
              <img src="images/cimg/c1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title text-primary">
                  Lamborghini SIAN FKP 37{" "}
                  <span class="badge  rounded-pill bg-secondary">New</span>
                </h4>
                <p class="card-text text-dark">
                  <strong>"$2,640,000"</strong>
                  <br></br> The Sián FKP 37 is the first super sports car
                  powered by a V12 engine and hybrid technology based on
                  supercapacitors. Its powerful V12 engine, coupled with
                  electric boost, creates an unrivaled gem of engineering and
                  technology....
                  <br></br>
                  <small className="text-muted">Visit to know more.</small>
                </p>
                <Link
                  class="btn btn-outline-success"
                  to="/lambsi"
                  role="button"
                >
                  Visit
                </Link>
              </div>

              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card t t-3 h-100">
              <img src="images/cimg/c3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title text-primary">
                  Bugatti Veyron{" "}
                  <span class="badge  rounded-pill bg-secondary">New</span>
                </h4>
                <p class="card-text text-white">
                  <strong>"Rs : 11,39,00,000"</strong>
                  <br></br>The Bugatti Veyron EB 16.4 is a mid-engine sports car
                  at a top speed of 407 km/h.t was named the 2000s Car of the
                  Decade by the BBC television programme Top Gear. The standard
                  Veyron also won...
                  <br></br>
                  <small className="text-muted">Visit to know more.</small>
                </p>
                <Link
                  class="btn btn-outline-primary"
                  to="/bugatti"
                  role="button"
                >
                  Visit
                </Link>
              </div>

              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>

        <div
          class="alert alert-primary d-flex align-items-center my-3"
          role="alert"
        >
          <div>Search your car through Brands!</div>
        </div>

        <div className="container web">
          <div class="row my-3">
            <div class="col-lg-2">
              <div class="col-lg-12">
                <img
                  className="roundimg"
                  src="images/logos/l1.jpg"
                  width={140}
                  height={140}
                  alt="hh"
                />
                <h3 class="fw-normal text-dark">Mercedes</h3>

                <p>
                  <Link class="btn btn-outline-primary mx-3" to="/mercedes">
                    Vist now »
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="col-lg-12">
                <img
                  className="roundimg"
                  src="images/logos/l3.jpg"
                  width={140}
                  height={140}
                  alt="hh"
                />

                <h3 class="fw-normal text-dark mx-5">Audi</h3>

                <p>
                  <Link class="btn btn-outline-primary mx-3" to="/audi">
                    Vist now »
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="col-lg-12">
                <img
                  className="roundimg"
                  src="images/logos/l2.jpg"
                  width={140}
                  height={140}
                  alt="hh"
                />

                <h3 class="fw-normal text-dark mx-5">Tata</h3>

                <p>
                  <Link class="btn btn-outline-primary mx-3" to="/tata">
                    Vist now »
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="col-lg-12">
                <img
                  className="roundimg"
                  src="images/logos/l4.jpg"
                  width={140}
                  height={140}
                  alt="hh"
                />

                <h3 class="fw-normal text-dark">Lamborghini</h3>

                <p>
                  <Link class="btn btn-outline-primary mx-3" to="/lam">
                    Vist now »
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="col-lg-12">
                <img
                  className="roundimg"
                  src="images/logos/l5.png"
                  width={140}
                  height={140}
                  alt="hh"
                />

                <h3 class="fw-normal text-dark mx-4">Honda</h3>

                <p>
                  <Link class="btn btn-outline-primary mx-3" to="/honda">
                    Vist now »
                  </Link>
                </p>
              </div>
            </div>
            <div class="col-lg-2">
              <div class="col-lg-12">
                <img
                  className="roundimg"
                  src="images/logos/l7.png"
                  width={140}
                  height={140}
                  alt="hh"
                />

                <h3 class="fw-normal text-dark mx-5">Tesla</h3>

                <p>
                  <Link class="btn btn-outline-primary mx-3" to="/tesla">
                    Vist now »
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img
                src="images/homecaro/bghf1.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item  active">
              <img
                src="images/homecaro/ar1.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="images/homecaro/ar2.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div
          class="alert alert-primary alert-dismissible fade show my-3"
          role="alert"
        >
          <strong>Check out now!</strong>Futuristic cars only on CarZone.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>

        <div class="row mb-2 my-3">
          <div class="col-md-6 ">
            <div class="row g-0  h border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Electric</strong>
                <h3 class="mb-0 text-dark">Tesla X</h3>
                <div class="mb-1 text-muted text-dark">Nov 12</div>
                <p class="card-text mb-auto text-dark">
                With an astonishingly long range, intelligent charging technology and the Mercedes-Benz driving assistance systems, the X gives us an excitingly new feeling of electric driving.
Rs.2.01 crore*
                </p>
                <Link to="/teslax" class="stretched-link">
                  Continue reading
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  className="card-base"
                  src="images/teslax/i11.jpg"
                  width={250}
                  height={250}
                  alt="hh"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="row g-0 h-1 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Electric</strong>
                <h3 class="mb-0 text-light">Jaguar I-pace</h3>
                <div class="mb-1 text-muted text-light">Nov 11</div>
                <p class="mb-auto text-light">
                The award-winning, all-electric performance SUV. Spacious, beautifully detailed and with technology seamlessly integrated.
Rs.1.24 crore*
                </p>
                <Link to="/elec" class="stretched-link">
                  Continue reading
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  className="card-base"
                  src="images/jaguar/j21.jpg"
                  width={250}
                  height={250}
                  alt="hh"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-6 ">
            <div class="row g-0 h-2 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Electric</strong>
                <h3 class="mb-0 text-light">Mercedes-Benz EQC</h3>
                <div class="mb-1 text-muted text-light">Nov 12</div>
                <p class="card-text mb-auto text-light">
                With an astonishingly long range, intelligent charging technology and the Mercedes-Benz driving assistance systems, the EQC gives us an excitingly new feeling of electric driving.
Rs.99.50 Lakh*
                </p>
                <Link to="/benzeqc" class="stretched-link">
                  Continue reading
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  className="card-base"
                  src="images/eqc/e2.jpg"
                  width={250}
                  height={250}
                  alt="hh"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="row g-0 h-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-white">Electric</strong>
                <h3 class="mb-0 text-dark">Audi e-tron</h3>
                <div class="mb-1 text-muted text-white">Nov 11</div>
                <p class="mb-auto text-dark">
                Immerse yourself in the exciting world of electromobility with the Audi e-tron. With up to 484 kilometers of range², our first all-electric SUV is your sporty and safe companion that's suitable for everyday driving in a new era.
Rs.1.01 Crore*
                </p>
                <Link to="/audietron" class="stretched-link text-dark">
                  Continue reading
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  className="card-base"
                  src="images/etron/e3.jpg"
                  width={250}
                  height={250}
                  alt="hh"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2 my-3">
          <div class="col-md-6 ">
            <div class="row g-0  h border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Electric</strong>
                <h3 class="mb-0 text-dark">Nissan Leaf</h3>
                <div class="mb-1 text-muted text-dark">Nov 12</div>
                <p class="card-text mb-auto text-dark">
                With a whole new look, a proven track record (over two billion EV miles strong in the U.S. alone), and some of our most advanced driver assistance and safety features, the refreshed 2023 Nissan LEAF is driving proof – now is the time to go all electric.
Rs.30.00 Lakh*
                </p>
                <Link to="/nissan" class="stretched-link">
                  Continue reading
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  className="card-base"
                  src="images/nissan/n2.jpg"
                  width={250}
                  height={250}
                  alt="hh"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="row g-0 h-1 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">Electric</strong>
                <h3 class="mb-0 text-light">Hyundai Kona</h3>
                <div class="mb-1 text-muted text-light">Nov 11</div>
                <p class="mb-auto text-light">
                Versatile and powerful, the KONA Electric will be the first All-Electric SUV in India. Its power packed performance provides a thrilling driving experience with high acceleration over long distances. KONA Electric is here to change the way people think about going electric.
Rs.24.50 Lakh*
                </p>
                <Link to="/hundai" class="stretched-link">
                  Continue reading
                </Link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  className="card-base"
                  src="images/hyundai/h2.jpg"
                  width={250}
                  height={250}
                  alt="hh"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="opera">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <div className="test1">
                <img
                  src="images/hgallery/g52.jpg"
                  class=" image w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
              </div>
              <div className="test2">
                <img
                  src="images/hgallery/g2.jpg"
                  class="image w-100 shadow-1-strong rounded mb-4"
                  alt="Wintry Mountain Landscape"
                />
              </div>
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
              <div className="test3">
                <img
                  src="images/hgallery/g3.jpg"
                  class="image w-100 shadow-1-strong rounded mb-4"
                  alt="Mountains in the Clouds"
                />
              </div>
              <div className="test4">
                <img
                  src="images/hgallery/car6.jpg"
                  class="image w-100 shadow-1-strong rounded mb-4"
                  alt="Boat on Calm Water"
                />
              </div>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
              <div className="test5">
                <img
                  src="images/hgallery/g12.jpg"
                  class="image w-100 shadow-1-strong rounded mb-4"
                  alt="Waves at Sea"
                />
              </div>
              <div className="test6">
                <img
                  src="images/hgallery/g4.jpg"
                  class="image w-100 shadow-1-strong rounded mb-4"
                  alt="Yosemite National Park"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cards;
