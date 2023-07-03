import React from "react";
import "./App.css";
function Ager() {
  return (
    <div className="container">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="images/ager/l.jpg"
              alt=""
              width="50"
              height="38"
              class="d-inline-block align-text-bottom mx-3"
            />
            <span className="mb-0 h1">Agera Koenigsegg</span>
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
          <div class="carousel-item ">
            <img src="images/ager/b1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src="images/ager/b2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item active">
            <img src="images/ager/b3.jpg" class="d-block w-100" alt="..." />
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
      <h1 className="text-center my-5">
        ROAD LEGAL TRACK LEGEND.FASTEST EVER MADE.
      </h1>

      <h3 className="text-center">
        <br></br>
        <b>Rs.12.24 crore*</b>
      </h3>

      <div class="row my-5">
        <div class="col-md-4 mb-3">
          <div class="card">
            <img class="img-fluid" alt="100%x280" src="images/ager/a1.jpg" />
            <div class="card-body">
              <h4 class="card-title">IN-HOUSE INNOVATIONS</h4>
              <p class="card-text">
                Staying ahead of the curve in a very competitive e-mobility
                landscape in true Koenigsegg fashion, we are offering our
                ground-breaking components to visionary clientele. Sharing this
                technology enables Koenigsegg to have a positive impact on CO2
                reduction.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <img class="img-fluid" alt="100%x280" src="images/ager/a3.jpg" />
            <div class="card-body">
              <h4 class="card-title">WHY WE DO WHAT WE DO</h4>
              <p class="card-text">
                Every single detail of a Koenigsegg car is measured against our
                continuing goal: to enhance vehicle performance.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card">
            <img class="img-fluid" alt="100%x280" src="images/ager/a4.jpg" />
            <div class="card-body">
              <h4 class="card-title">SPECIAL INTERIOR WITH POWER</h4>
              <p class="card-text">
                The Agera R made its debut at the March 2011 Geneva Motor Show
                with a Speed Racer livery, and special Michelin tyres. It can
                accelerate from 0–100 km/h (0–62 mph) in 2.8 seconds and attain
                a theoretical top speed of 439 km/h (273 mph).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container  overflow-hidden text-center">
        <h2 class="pb-2 border-bottom">Specifications</h2>
        <div class="row gy-3">
          <div class="col-6">
            <div class="p-3 border bg-light">
              {" "}
              <div>
                <h2>960 </h2>
                <h5>BHP Output</h5>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light">
              {" "}
              <div>
                <h2>1100 </h2>
                <h5>NM Torque</h5>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light my-2">
              <div>
                <h2>3.0 </h2>
                <h5>0-100 Km/h</h5>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light my-2">
              <div>
                <h2>7500 </h2>
                <h5>RPM Redline</h5>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light my-2">
              <div>
                <h2>1435 </h2>
                <h5>KG Curb weight</h5>
              </div>
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
  );
}

export default Ager;
