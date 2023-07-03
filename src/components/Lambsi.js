import React from "react";
import "./App.css";
function Lambsi() {
  return (
    <div>
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="images/lambsi/l.jpg"
                alt=""
                width="50"
                height="38"
                class="d-inline-block align-text-bottom mx-3"
              />
              <span className="mb-0 h1">Lamborghini Sian FKP 37</span>
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
              <img src="images/lambsi/b1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <img src="images/lambsi/b2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item active">
              <img src="images/lambsi/b3.jpg" class="d-block w-100" alt="..." />
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
        <h1 className="text-center my-5">SIAN FKP 37 . AHEAD OF IT'S TIME.</h1>

        <h3 className="text-center">
          <br></br>
          <b>$ 3.5 million*</b>
        </h3>

        <div class="row my-5">
          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                class="img-fluid"
                alt="100%x280"
                src="images/lambsi/a1.jpg"
              />
              <div class="card-body">
                <h4 class="card-title"> EXTERIOR</h4>
                <p class="card-text">
                  The Design DNA of Lamborghini is taken to its peak levels:
                  inspired by the Countach, the Sián FKP 37 has sharp lines,
                  aerodynamic elegance and an unmistakable silhouette. Its
                  totally carbon fiber body leaves you breathless. The
                  electrochromic roof and moving surfaces controlled by smart
                  materials are sculpted by innovative lines. The Terzo
                  Millennio-inspired headlights leave behind an indelible
                  luminous signature that will shape future Lamborghini design.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                class="img-fluid"
                alt="100%x280"
                src="images/lambsi/a5.jpg"
              />
              <div class="card-body">
                <h4 class="card-title"> AD PERSONAM </h4>
                <p class="card-text">
                  The car has been designed to offer the widest possible range
                  of customizations: from the exterior, which can be configured
                  in fully exposed carbon fiber, with custom colors, shaded
                  paintwork and specific liveries; to the interior, with special
                  trim and an infinite number of combinations of colors and
                  materials. An innovative “touch and feel” leather is also
                  available, specially developed for the Sián FKP 37, which is
                  extremely pleasant to the touch.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card">
              <img
                class="img-fluid"
                alt="100%x280"
                src="images/lambsi/a3.jpg"
              />
              <div class="card-body">
                <h4 class="card-title"> INTERIOR </h4>
                <p class="card-text">
                  Inside the Lamborghini Sián FKP 37, luxurious Italian
                  craftsmanship meets state-of-the-art technology with a cabin
                  designed to provide a driving experience that combines
                  adrenaline-charged acceleration with utmost comfort.
                  Additionally, the passenger compartment features recurring
                  design elements that reflect classic Lamborghini style,
                  including Y-shaped features and hexagonal shapes, rendered to
                  perfection with meticulous attention to every detail.
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
                  <h2>4400 </h2>
                  <h5>NM Torque</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light my-2">
                <div>
                  <h2>2.8 </h2>
                  <h5>0-100 Km/h</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light my-2">
                <div>
                  <h2>9500 </h2>
                  <h5>RPM Redline</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light my-2">
                <div>
                  <h2>1635 </h2>
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

export default Lambsi;
