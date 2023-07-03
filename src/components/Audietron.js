import React from "react";
import "./App.css";
function Audietron() {
  return (
    <div>
      <div className="bye">
        <div classname="container">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="images/etron/l.jpg"
                  alt=""
                  width="50"
                  height="38"
                  class="d-inline-block align-text-bottom mx-3"
                />
                <span className="mb-0 h1 text-primary">Audi e-tron</span>
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
                  src="images/etron/bg1.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div className="textt-xx">
                  <h1>Audi e-tron®</h1>
                  <h2>Space for Progress.</h2>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center my-5">
            The Audi e-tron.<br></br>Help to shape the future.
          </h1>

          <p className="text-center">
            Immerse yourself in the exciting world of electromobility with the
            Audi e-tron. With up to 484 kilometers of range², our first
            all-electric SUV is your sporty and safe companion that's suitable
            for everyday driving in a new era.<br></br>
            <b>Rs.1.01 Crore*</b>
          </p>

          <div class="row my-5">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/etron/a11.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">High Electric Range</h4>
                  <p class="card-text">71kwh battery, 214 hp, 121 MPGe .</p>

                  <h4 class="card-title">
                    Impressive Acceleration : 0-60 km/h in just 4.3* s
                  </h4>
                  <p class="card-text">
                    As per Audi Internal Testing figures.Sport Mode for
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
                  src="images/etron/a2.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Engineered to go the distance</h4>
                  <p class="card-text">
                    Whether for a weekend trip or a longer trip - with a maximum
                    range of up to 484 kilometers², the Audi e-tron is eminently
                    suitable for long journeys. The large high-voltage battery
                    and an intelligent recuperation system do their part.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/etron/a9.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">
                    NissanConnect® 8" touch-screen display
                  </h4>
                  <p class="card-text">
                    The touch screens feature haptic and audio feedback,
                    creating a clean and streamlined interior environment while
                    still placing control of the e-tron’s vehicle systems and
                    infotainment literally at the driver’s fingertips. Combined
                    with the voice command and multi-function steering wheel,
                    the driver remains in complete control while still remaining
                    completely focused on the road ahead.
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
                  src="images/etron/a1.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">Get in and feel good</h4>
                  <p class="card-text">
                    The contemporary, flowing design continues in the Audi
                    e-tron’s interior; it's sweeping dashboard adding to the
                    feeling of space and housing the two large MMI touch screens
                    and the Audi virtual cockpit.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/etron/a4.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">First class in the second row too</h4>
                  <p class="card-text">
                    In the rear, up to three people can enjoy the large space
                    available for the Audi e-tron. Alternatively, you can use
                    the functionality of the SUV: When the seat is folded down,
                    the maximum storage volume is up to 1,725 liters.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/etron/a3.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">More than meets the eye</h4>
                  <p class="card-text">
                    The Audi e-tron offers lightweight alloy wheels available in
                    50.8 centimeter which translate into lower consumption and
                    optimized aerodynamics.
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

export default Audietron;
