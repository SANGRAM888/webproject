import React from "react";
import "./App.css";
function Teslax() {
  return (
    <div>
      <div className="bye">
        <div classname="container">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="images/teslax/l.jpg"
                  alt=""
                  width="50"
                  height="38"
                  class="d-inline-block align-text-bottom mx-3"
                />
                <span className="mb-0 h1 text-primary">Tesla Model X</span>
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
                  src="images/teslax/b.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div className="tes">
                  <h1>Model X ®</h1>
                  <h2>Plaid.</h2>
                </div>
                <div className="tes1">
                  <h2>333 mi </h2>
                  <h5>Range (EPA est.)</h5>
                </div>
                <div className="tes2">
                  <h2>2.5 s</h2>
                  <h5>0-60 mph*</h5>
                </div>
                <div className="tes3">
                  <h2>1,020 hp</h2>
                  <h5>Peak Power</h5>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center my-5">New Model X.</h1>

          <p className="text-center">
            With an astonishingly long range, intelligent charging technology
            and the Mercedes-Benz driving assistance systems, the X gives us an
            excitingly new feeling of electric driving.<br></br>
            <b>Rs.2.01 crore*</b>
          </p>

          <div class="row my-5">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/teslax/a6.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">High Electric Range</h4>
                  <p class="card-text">80 kWh battery, Range 455-471km .</p>

                  <h4 class="card-title">9.9 s 1/4 mile 2.5 s 0-60 mph*</h4>
                  <p class="card-text">
                    As per Tesla Internal Testing figures.
                  </p>
                  <h4 class="card-title">Power</h4>
                  <p class="card-text">1,020 hp Peak power</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/teslax/a1.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Wireless Gaming</h4>
                  <p class="card-text">
                    Up to 10 teraflops of processing power enables in-car gaming
                    on-par with today’s newest consoles. Wireless controller
                    compatibility lets you game from any seat.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/teslax/a2.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Stay Connected</h4>
                  <p class="card-text">
                    Multi-device Bluetooth, wireless and USB-C charging for
                    every passenger, with enough power to fast-charge your
                    tablets and laptop.
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
                  src="images/teslax/a3.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Your Best Audio System</h4>
                  <p class="card-text">
                    A 22-speaker, 960-watt audio system with Active Road Noise
                    Reduction offers the best listening experience wherever you
                    are.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/teslax/a7.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Built for Safety</h4>
                  <p class="card-text">
                    Model X is built from the ground up as an electric vehicle,
                    with a high-strength architecture and floor-mounted battery
                    pack for incredible occupant protection and low rollover
                    risk. Every Model X includes Tesla’s latest active safety
                    features, such as Automatic Emergency Braking, at no extra
                    cost.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/teslax/a5.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title"> New Wheels and Tires.</h4>
                  <p class="card-text">
                    New performance tires deliver better handling and ride
                    quality with lower rolling resistance and are paired with
                    new aerodynamic wheels for an updated look.
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

export default Teslax;
