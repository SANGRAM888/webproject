import React from 'react'
import "./App.css";
function Honda() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="images/honda/l.jpg"
              alt=""
              width="50"
              height="38"
              class="d-inline-block align-text-bottom mx-3"
            />
            <span className="mb-0 h1">Honda</span>
          </a>
        </div>
      </nav>
      <hr class="featurette-divider" />

      <img src="images/honda/b.jpg" class="img-fluid" alt="..." />
      <div className="container">
        <div
          id="carouselExampleCaptions"
          class="carousel slide my-3"
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
              <div class="row">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c1.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title">It's more than Inovation.</h4>
                      <p class="card-text">It's a Honda.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c2.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Stylish. Just like you.</h4>
                      <p class="card-text">The all-new Honda SUV 2022.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c3.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Made to win the day.</h4>
                      <p class="card-text">The Honda.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c4.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title">
                        Takes you to the most beautiful places . Connects you
                        worldwide.
                      </h4>
                      <p class="card-text">The Honda city.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/mercedes/c6.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Reimagine Instant Ownership.</h4>
                      <p class="card-text">Learn more of honda</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c7.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title">My honda. My Service.</h4>
                      <p class="card-text">Quality service from the best.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c8.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title">Own a car</h4>
                      <p class="card-text">
                        Find your dream car with Honda cars.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c5.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title"> Honda me</h4>
                      <p class="card-text">
                        Experience what your honda can really do - with honda me.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <img
                      class="img-fluid"
                      alt="100%x280"
                      src="images/honda/c6.jpg"
                    />
                    <div class="card-body">
                      <h4 class="card-title"> Help when you need it.</h4>
                      <p class="card-text">
                       Honda helps you everywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

        <div class="container marketing">
          <hr class="featurette-divider" />

          <div class="row-x featurette">
            <div class="col-md-7 ">
              <h2 class="featurette-heading">
                The Honda City.{" "}
                <span class="text-muted py-5">
                  <br /> Rs.11.21 Lakh - 15.10 Lakh*.
                </span>
              </h2>

              <p class="lead">
                Key Specs .
                <ul>
                  <li>Mileage : (upto)24.11 kmpl</li>
                  <li>Engine : (upto)1499 cc</li>
                  <li> Transmission : Automatic/Manual</li>
                  <li> BHP : 119.31</li>
                  <li>Seats : 5 </li> 
                </ul>
              </p>

              <button
                type="button"
                class="btn btn-success my-3"
                data-bs-toggle="modal"
                data-bs-target="#regupModal"
              >
                Reserve this Car
              </button>

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
                        Reservation Form
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
                          <label
                            for="coexampleInputPassword2"
                            class="form-label"
                          >
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
                    <div class="modal-footer">
                      Thank you for visiting CarZone
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <img
                src="images/honda/a1.jpg"
                alt=""
                width="500"
                height="500"
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              />
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row-x featurette">
            <div class="col-md-7 order-md-2 ">
              <h2 class="featurette-heading">
                The Honda Amaze.{" "}
                <span class="text-muted py-5">
                  <br />
                  Rs.6.56 - 11.39 Lakh*.
                </span>
              </h2>

              <p class="lead">
                Key Specs.
                <ul>
                <li>Mileage : (upto)24.11 kmpl</li>
                  <li>Engine : (upto)1499 cc</li>
                  <li> Transmission : Automatic/Manual</li>
                  <li> BHP : 97.31</li>
                  <li>Seats : 5 </li> 
                </ul>
              </p>

              <button
                type="button"
                class="btn btn-success my-3"
                data-bs-toggle="modal"
                data-bs-target="#regupModal"
              >
                Reserve this Car
              </button>

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
                        Reservation Form
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
                          <label
                            for="coexampleInputPassword2"
                            class="form-label"
                          >
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
                    <div class="modal-footer">
                      Thank you for visiting CarZone
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <img
                src="images/honda/a2.jpg"
                alt=""
                width="500"
                height="500"
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              />
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row-x featurette">
            <div class="col-md-7 ">
              <h2 class="featurette-heading">
                The Honda Jazz.{" "}
                <span class="text-muted py-5">
                  <br /> Rs.7.90 - 10.21 Lakh*.
                </span>
              </h2>

              <p class="lead">
                Key Specs .
                <ul>
                  <li>Mileage : (upto)17.1 kmpl</li>
                  <li>Engine : (upto)1199 cc</li>
                  <li> Transmission : Automatic/Manual</li>
                  <li> BHP : 88.53</li>
                   <li> Airbags : yes</li>
                </ul>
              </p>

              <button
                type="button"
                class="btn btn-success my-3"
                data-bs-toggle="modal"
                data-bs-target="#regupModal"
              >
                Reserve this Car
              </button>

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
                        Reservation Form
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
                          <label
                            for="coexampleInputPassword2"
                            class="form-label"
                          >
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
                    <div class="modal-footer">
                      Thank you for visiting CarZone
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <img
                src="images/honda/a3.jpg"
                alt=""
                width="500"
                height="500"
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              />
            </div>
          </div>

          <hr class="featurette-divider" />
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
  )
}

export default Honda
