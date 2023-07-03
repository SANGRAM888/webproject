import React from "react";
import "./App.css";
function Nissan() {
  return (
    <div>
      <div className="bye">
        <div classname="container">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="images/nissan/n.jpg"
                  alt=""
                  width="50"
                  height="38"
                  class="d-inline-block align-text-bottom mx-3"
                />
                <span className="mb-0 h1 text-primary">Nissan Leaf</span>
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
                  src="images/nissan/n1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div className="text-xx">
                  <h1>Refreshed 2023 Nissan LEAF®</h1>
                  <h2>Zero gas. All thrill.</h2>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center my-5">
            Nissan LEAF 100% electric vehicle
          </h1>
          <h2 className="text-center">
            Over two billion miles driven, and it’s never looked better
          </h2>

          <p className="text-center">
            With a whole new look, a proven track record (over two billion EV
            miles strong in the U.S. alone), and some of our most advanced
            driver assistance and safety features, the refreshed 2023 Nissan
            LEAF is driving proof – now is the time to go all electric.<br></br>
            <b>Rs.30.00 Lakh*</b>
          </p>

          <div class="row my-5">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/nissan/n6.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">High Electric Range</h4>
                  <p class="card-text">60 kWh battery, 214 hp, 121 MPGe .</p>

                  <h4 class="card-title">
                    Impressive Acceleration : 0-100 km/h in just 7.9* s
                  </h4>
                  <p class="card-text">
                    As per Nissan Internal Testing figures.Sport Mode for
                    thrilling drive experience
                  </p>
                  <h4 class="card-title">Charging</h4>
                  <p class="card-text">
                    Most convenient — 240-V Home and public charging.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/nissan/n51.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Torque</h4>
                  <p class="card-text">
                    Let’s take a look at what’s powering the Leaf Electric
                    first.100% torque off the line Unleash the full power of the
                    Nissan LEAF’s drivetrain every time you hit the accelerator
                    for a rush of instant electric performance.The Nissan LEAF
                    is just as much fun through the twists and turns. The
                    floor-mounted battery pack creates a low center of gravity
                    for a great ride and smooth handling, helping the Nissan
                    LEAF corner with reduced body roll.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/nissan/n52.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    NissanConnect® 8" touch-screen display
                  </h4>
                  <p class="card-text">
                    Nissan LEAF’s large, legible, customizable touch-screen
                    display puts your world at your fingertips. You can
                    custom-design the screens like a tablet, putting the items
                    where you want them, and you can also create shortcuts to
                    other screens. Software and map updates made over Wi-Fi help
                    keep your available Nissan Door to Door Navigation System
                    up-to-date.
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
                  src="images/nissan/n53.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    A connected, confident, and exciting ride
                  </h4>
                  <p class="card-text">
                    Imagine getting an assist, being able to see and sense more
                    around you, and having a little magic behind the scenes
                    helping you drive with extra finesse and precision. It all
                    adds up to more confidence — giving you the freedom to
                    embrace the pure joy of being behind the wheel.
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
                    Six airbags reveal Nissan"s uncompromising approach to
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
                  src="images/nissan/n55.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Splash Guards </h4>
                  <p class="card-text">
                    Save your Nissan LEAF from an unwelcomed mud bath Contoured
                    to match wheel openings, while helping prevent dirt and
                    debris from nicking and scratching the finish Add value and
                    style while helping protect the sides of your vehicle
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

export default Nissan;
