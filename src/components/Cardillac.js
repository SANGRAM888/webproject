import React from "react";
import "./App.css";
function Cardillac() {
  return (
    <div className="container">
      <section class="cardetail-infohead-sec fix">
        <div class="container">
          <div class="container-inner">
            <div class="nameprices-crtfedmodelkmsfuel">
              <div class="name-prices">
                <h5>
                  <strong>1931 Cadillac V12</strong>
                </h5>
                <h6 class="price-emi">
                  <span class="price">Rs: 1,35,00,000</span>
                  <br></br>
                  <span class="emiprice">
                    EMI Starts @ <span class="amt">Rs: 2,29,414.95</span>
                  </span>
                </h6>
              </div>
              <div class="certified-modelkmsfuel hide-767">
                <ul>
                  <li>
                    <span class="key">Reg. Year : </span>
                    <span class="val">2018</span>
                  </li>
                  <li>
                    <span class="key">KMS : </span>
                    <span class="val">20000</span>
                  </li>
                  <li>
                    <span class="key">Fuel Type : </span>
                    <span class="val">Petrol</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="featurette-divider" />

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="button"
          class="btn btn-danger  me-md-2 my-3"
          data-bs-toggle="modal"
          data-bs-target="#regupModal"
        >
          Register this Car
        </button>
      </div>

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
        <div class="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img
              class="d-block w-100 shadow-1-strong rounded img-fluid"
              src="images/cardi/a1.jpg"
            />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <img
              class="d-block w-100 shadow-1-strong rounded img-fluid"
              src="images/cardi/a3.jpg"
            />
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <img
              class="d-block w-100 shadow-1-strong rounded img-fluid"
              src="images/cardi/a4.jpg"
            />
          </button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/cardi/a1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Red</h5>
              
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="images/cardi/a3.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Red and Fawn</h5>
              
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="images/cardi/a4.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Fawn</h5>
            
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

      <section class="cardetails-cntnt-sec hide-767">
        <div class="container-op">
          <div class="cntnt-items">
            <div class="cntnt-item summary">
              <h6>Car Summary</h6>
              <ul class="cardetail-summary-list">
                <li>
                  <span class="icon q1" />
                  <span class="cntnt">
                    Vehicle Type <strong>Convertible</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q2"></span>
                  <span class="cntnt">
                    Registration Year <strong>2018</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q3"></span>
                  <span class="cntnt">
                    Engine <strong>6030 CC</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q4"></span>
                  <span class="cntnt">
                    Transmission <strong>3-Speed Manual </strong>
                  </span>
                </li>
                <li>
                  <span class="icon q5"></span>
                  <span class="cntnt">
                    Ownership <strong>2nd</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q6"></span>
                  <span class="cntnt">
                    Doors <strong>2</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q7"></span>
                  <span class="cntnt">
                    Drive <strong>RWD</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q8"></span>
                  <span class="cntnt">
                    Seating Capacity <strong>2</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q9"></span>
                  <span class="cntnt">
                    Manufacturing Year <strong>1931</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q10"></span>
                  <span class="cntnt">
                    Fuel <strong>Petrol</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q11"></span>
                  <span class="cntnt">
                    Kms done <strong>20000</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q12"></span>
                  <span class="cntnt">
                    Exterior Color <strong>Red &amp; fawn</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="specs">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            Click here for specifications
          </button>
        </div>
        <div
          class="offcanvas offcanvas-bottom"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Specifications
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small">
            <div class="cntnt-item summary">
              <h6>Car Summary</h6>
              <ul class="cardetail-summary-list">
                <li>
                  <span class="icon q1" />
                  <span class="cntnt">
                    Vehicle Type <strong>Convt.</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q2"></span>
                  <span class="cntnt">
                    Reg. Year <strong>2018</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q3"></span>
                  <span class="cntnt">
                    Engine <strong>6030 CC</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q4"></span>
                  <span class="cntnt">
                    Trans. <strong>3-Speed Manual </strong>
                  </span>
                </li>
                <li>
                  <span class="icon q5"></span>
                  <span class="cntnt">
                    Ownership <strong>2nd</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q6"></span>
                  <span class="cntnt">
                    Doors <strong>2</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q7"></span>
                  <span class="cntnt">
                    Drive <strong>RWD</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q8"></span>
                  <span class="cntnt">
                    Seating Capacity <strong>2</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q9"></span>
                  <span class="cntnt">
                    Mfc. Year <strong>1931</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q10"></span>
                  <span class="cntnt">
                    Fuel <strong>Petrol</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q11"></span>
                  <span class="cntnt">
                    Kms done <strong>20000</strong>
                  </span>
                </li>
                <li>
                  <span class="icon q12"></span>
                  <span class="cntnt">
                    Exterior Color <strong>Red &amp; fawn</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="opera">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="test1">
              <img
               src="images/cardi/a2.jpg"
                class=" image w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>
            <div className="test2">
              <img
               src="images/cardi/s2.jpg"
                class="image w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <div className="test3">
              <img
                src="images/cardi/s1.jpg"
                class="image w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
            </div>
            <div className="test4">
              <img
               src="images/cardi/a5.jpg"
                class="image w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <div className="test5">
              <img
                src="images/cardi/a7.jpg"
                class="image w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
            </div>
            <div className="test6">
              <img
                src="images/cardi/s3.jpg"
                class="image w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </section>

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

export default Cardillac;
