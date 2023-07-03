import React from "react";
import "./App.css";
function Bugatti() {
  return (
    <div>
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="images/bugatti/l.jpg"
                alt=""
                width="50"
                height="38"
                class="d-inline-block align-text-bottom mx-3"
              />
              <span className="mb-0 h1">Bugatti Veyron</span>
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
            <div class="carousel-item active">
              <img
                src="images/bugatti/b1.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="images/bugatti/b2.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img
                src="images/bugatti/b3.jpg"
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

        <div class="row my-5">
          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                class="img-fluid"
                alt="100%x280"
                src="images/bugatti/a3.jpg"
              />
              <div class="card-body">
                <h4 class="card-title">Interior</h4>
                <p class="card-text">
                  Soft leather surrounds its purist dashboard. the interior is
                  filled with flowing, organic forms. anyone experiencing a
                  bugatti chiron1 from the inside for the first time will be
                  astonished. instead of small parts and pompous waste of space,
                  the interior is dominated by defined minimalism. the french
                  luxury hyper sports car manufacturer's reduction to the
                  essentials is at the heart of its design philosophy.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                class="img-fluid"
                alt="100%x280"
                src="images/bugatti/a2.jpg"
              />
              <div class="card-body">
                <h4 class="card-title">Engine power output</h4>
                <p class="card-text">
                  According to Volkswagen Group and certified by TÜV
                  Süddeutschland, the W16 engine utilised by the Veyron has a
                  power output of 736 kW (987 hp; 1,001 PS), and generates 1,250
                  N⋅m (922 lbf⋅ft) of torque.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                class="img-fluid"
                alt="100%x280"
                src="images/bugatti/a1.jpg"
              />
              <div class="card-body">
                <h4 class="card-title">Braking</h4>
                <p class="card-text">
                  The Veyron's brakes use cross drilled, radially vented carbon
                  fibre reinforced silicon carbide (C/SiC) composite discs,
                  manufactured by SGL Carbon, which have less brake fade and
                  weigh less than standard cast iron discs
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
                  <h2>1001</h2>
                  <h5>BHP Output</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light">
                {" "}
                <div>
                  <h2>1250</h2>
                  <h5>NM Torque</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light my-2">
                <div>
                  <h2>2.5 </h2>
                  <h5>0-100 Km/h</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light my-2">
                <div>
                  <h2>5500</h2>
                  <h5>RPM Redline</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light my-2">
                <div>
                  <h2>1838</h2>
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
    </div>
  );
}

export default Bugatti;
