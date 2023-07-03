import React from "react";
import "./App.css";
function Elec() {
  return (
    <div>
      <div className="bye">
        <div classname="container">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img
                  src="images/jaguar/l.jpg"
                  alt=""
                  width="50"
                  height="38"
                  class="d-inline-block align-text-bottom mx-3"
                />
                <span className="mb-0 h1 text-primary">Jaguar I-pace</span>
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
                  src="images/jaguar/b.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div className="tes">
                  <h1>JAGUAR I‑PACE ®</h1>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center my-5">ALL-ELECTRIC JAGUAR I‑PACE.</h1>

          <p className="text-center">
            The award-winning, all-electric performance SUV. Spacious,
            beautifully detailed and with technology seamlessly integrated.
            <br></br>
            <b>Rs.1.24 crore*</b>
          </p>

          <div class="row my-5">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/jaguar/a2.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title"> TECHNOLOGY</h4>
                  <p class="card-text">
                    Our infotainment system, Pivi Pro1, delivers all key
                    infotainment at a glance. It is inspired by, and as
                    intuitive as your smartphone.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/jaguar/a1.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title"> ELECTRIC PERFORMANCE</h4>
                  <p class="card-text">
                    I‑PACE is a true driver’s car. Its electric motors and near
                    perfect weight distribution deliver 696 Nm of instant torque
                    for sports car agility.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/jaguar/a3.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title"> PRACTICALITY AND SAFETY</h4>
                  <p class="card-text">
                    Designed for optimum safety. I-PACE includes a wealth of
                    driver assistance features to help protect you and your
                    passengers.
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
                  src="images/jaguar/a5.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title"> POWER</h4>
                  <p class="card-text">
                    I-PACE features a 90 kWh battery and is propelled by two
                    permanent magnet synchronous electric motors. The motors
                    provide 294 kW and 696 Nm of useable instant torque.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/jaguar/a4.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title">All wheel drive</h4>
                  <p class="card-text">
                    Power and torque responce is immediate.The motor adapts to
                    inputs,condition and available grip.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card">
                <img
                  class="img-fluid"
                  alt="100%x280"
                  src="images/jaguar/a6.jpg"
                />
                <div class="card-body">
                  <h4 class="card-title"> Navigation.</h4>
                  <p class="card-text">
                    Our Pivi Pro infotainment system is as familiar as your
                    smartphone. Key information such as Navigation1, Media and
                    Contacts is only ever one tap away.
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

export default Elec;
