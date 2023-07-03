import React from "react";
import "./App.css";
function Benzeqc() {
  return (
    <div>
      <div className="bye">
        <div classname="container">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="images/eqc/l1.jpg"
                  alt=""
                  width="50"
                  height="38"
                  class="d-inline-block align-text-bottom mx-3"
                />
                <span className="mb-0 h1 text-primary">Meredes-Benz EQC</span>
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
                <img src="images/eqc/b.jpg" class="d-block w-100" alt="..." />
                <div className="te">
                  <h1>Electric now has Mercedes®</h1>
                  <h2>Mercedes EQC.</h2>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center my-5">
            Everything speaks in favour of the new EQC.
          </h1>

          <p className="text-center">
            With an astonishingly long range, intelligent charging technology
            and the Mercedes-Benz driving assistance systems, the EQC gives us
            an excitingly new feeling of electric driving.<br></br>
            <b>Rs.99.50 Lakh*</b>
          </p>

          <div class="row my-5">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/eqc/ec6.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">High Electric Range</h4>
                  <p class="card-text">80 kWh battery, Range 455-471km .</p>

                  <h4 class="card-title">
                    Impressive Acceleration : 0-100 km/h in just 7.9* s
                  </h4>
                  <p class="card-text">
                    As per Nissan Internal Testing figures.Sport Mode for
                    thrilling drive experience
                  </p>
                  <h4 class="card-title">Power</h4>
                  <p class="card-text">
                    Max Power (bhp@rpm)402.30Bhp.Max Torque (nm@rpm)760Nn
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/eqc/ec1.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    Electric driving according to Mercedes-Benz safety
                    standards.
                  </h4>
                  <p class="card-text">
                    Latest generation driver assistance systems ensure a highly
                    relaxed and safe driving experience in the EQC. In case of
                    emergency they can react automatically and thus tangibly
                    relieve the strain on the driver. Innovative LED technology
                    and intelligent high-beam control turn night into day and
                    make the new EQC into an even safer companion.Optional
                    parking packages assist the driver with sensors and cameras
                    when searching for a parking space as well as when entering
                    and leaving a parking space.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/eqc/ec4.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    Navigation with Electric Intelligence Navigation with
                    Electric Intelligence offers you maximum planning security
                    en route.
                  </h4>
                  <p class="card-text">
                    Many items of information, such as a fast and convenient
                    route, current state of battery charge, weather data and
                    charging infrastructure, are interlinked. A convenient and
                    time-efficient route is then suggested to you, including
                    charging stops if necessary. Alongside conventional charging
                    stations, EQC-optimised Navigation with Electric
                    Intelligence gives preference to rapid charging stations in
                    its planning.
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
                  src="images/eqc/ec2.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    The environmental balance of the EQC.
                  </h4>
                  <p class="card-text">
                    The new EQC characterises a modern, responsible lifestyle.
                    The fact that those outside the vehicle barely hear it
                    running is also a blessing. It enables locally emission-free
                    driving, and in addition 100 component parts in total have
                    been produced from resource-saving materials.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/eqc/ec3.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    Charging the EQC is as easy as charging your smartphone.
                  </h4>
                  <p class="card-text">
                    The charging infrastructure is optimised to your individual
                    needs. Mercedes-Benz therefore offers a high degree of
                    flexibility. Conveniently and quickly at home via the
                    wallbox? En route at public charging stations? Or a charging
                    stop on the motorway at a rapid charging station? All of
                    this is possible for maximum charging convenience.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/eqc/ec5.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    {" "}
                    EQ wheel design We've rethought almost everything for the
                    EQC.
                  </h4>
                  <p class="card-text">
                    Even the wheels. These feature an EQ-specific wheel design
                    and are optionally available with blue EQ detailing,while
                    helping prevent dirt and debris from nicking and scratching
                    the finish Add value and style while helping protect the
                    sides of your vehicle
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

export default Benzeqc;
