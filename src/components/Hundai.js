import React from "react";
import "./App.css";
function Hundai() {
  return (
    <div>
      <div className="bye">
        <div classname="container">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="images/hyundai/logo.jpg"
                  alt=""
                  width="50"
                  height="38"
                  class="d-inline-block align-text-bottom mx-3"
                />
                <span className="mb-0 h1">Hyundai Kona</span>
              </a>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  class="btn btn-info  me-md-2 my-3"
                  data-bs-toggle="modal"
                  data-bs-target="#regupModal"
                >
                  Register this Car
                </button>
              </div>
            </div>
          </nav>

          <div
            class="modal fade"
            id="regupModal"
            tabindex="-1"
            aria-labelledby="regupLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="regupLabel">
                    Registration Form
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="coexampleInputEmail1" class="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="coexampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword2" class="form-label">
                        Phone number
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword2"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="coexampleInputPassword2" class="form-label">
                        Location
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="coexampleInputPassword1"
                      />
                    </div>
                    <div class="mb-3 form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck2"
                      />
                      <label class="form-check-label" for="exampleCheck2">
                        Check in
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
                <div class="modal-footer">Thank you for visiting CarZone</div>
              </div>
            </div>
          </div>

          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="images/hyundai/h3.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <h1 className="text-center my-5">
            Experience Indias First All-Electric SUV
          </h1>
          <p className="text-center">
            Versatile and powerful, the KONA Electric will be the first
            All-Electric SUV in India. Its power packed performance provides a
            thrilling driving experience with high acceleration over long
            distances. KONA Electric is here to change the way people think
            about going electric.<br></br>
            <b>Rs.24.50 Lakh*</b>
          </p>

          <div class="row my-5">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/hyundai/h9.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">High Electric Range</h4>
                  <p class="card-text">
                    With 452* km (per full charge, *as certified by ARAI)
                  </p>

                  <h4 class="card-title">
                    Impressive Acceleration : 0-100 km/h in just 9.7* s
                  </h4>
                  <p class="card-text">
                    As per Hyundai Internal Testing figures.Sport Mode for
                    thrilling drive experience
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/hyundai/h12.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Power</h4>
                  <p class="card-text">
                    Let’s take a look at what’s powering the Kona Electric
                    first. Under that conventional hood is a not so conventional
                    permanent magnet synchronous electric motor that makes a
                    very healthy 134bhp and a massive 395Nm of torque. You also
                    get driving modes to choose from namely Eco+, Eco, Comfort
                    and Sport.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/hyundai/h6.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">7-inch touchscreen</h4>
                  <p class="card-text">
                    The other party piece is the 7-inch touchscreen infotainment
                    system that comes with a barrage of connectivity features
                    including all the energy flow and battery information. You
                    also get an electric sun roof, front heated and ventilated
                    seats which are power adjustable, start stop button,
                    wireless charging for the phone and more.While the front
                    seats are comfortable with adequate support, the same cannot
                    be said about the rear.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/hyundai/h8.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Speed</h4>
                  <p class="card-text">
                    Hyundai claims a 0-100 kmph time of 9.7 seconds and that’s
                    quicker than most large sedans and quick hatches. And there
                    is no drop even after crossing 100 kmph as the speedo surges
                    past 150 kmph effortlessly. It’s only after a 150 kmph that
                    the Kona feels that it has reached its limits. For an
                    electric city commuter those are fantastic numbers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/hyundai/h5.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Six Airbags</h4>
                  <p class="card-text">
                    Six airbags reveal Hyundai's uncompromising approach to
                    safety engineering. Dual front airbags, front seat side-
                    impact and side curtain airbags work together with the seat
                    belts to take the safety of the vehicle to an un-parallel
                    level.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/hyundai/h4.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Distinctive and individual</h4>
                  <p class="card-text">
                    KONA Electric’s distinctive design language continues
                    throughout the spacious cabin. Complemented by a choice of
                    high quality materials and advanced technology, the premium
                    interior delivers an exceptionally comfortable drive for
                    everyone on board.
                  </p>
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
    </div>
  );
}

export default Hundai;
