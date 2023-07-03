import React from "react";

function Contact() {
  return (
    <div className="container">
      <h1>
        <b>
          <u>Contact us</u>
        </b>
      </h1>
      <hr class="featurette-divider" />
      <section class="contact-us">
        <div class="row">
          <div class="contact-col">
            <div>
              <i class="fa fa-home"></i>
              <span>
                <h5>XYZ ROAD,THIS BUILDING</h5>
                <p>delhi</p>
              </span>
            </div>
            <div>
              <i class="fa fa-phone"></i>
              <span>
                <h5>+91 564412455</h5>
                <p>everyday,24*7</p>
              </span>
            </div>
            <div>
              <i class="fa fa-envelope-o"></i>
              <span>
                <h5>info@debu</h5>
                <p>email us</p>
              </span>
            </div>
          </div>
          <div class="contact-col"></div>
        </div>
      </section>
      <hr class="featurette-divider" />
      <h1>Enter your details to contact with CarZone</h1>
      <hr class="featurette-divider" />
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          ENTER YOUR NAME
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2">
          @
        </span>
      </div>

      <label for="basic-url" class="form-label">
        Enter Your email
      </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">
          https://example.com/users/
        </span>
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Enter your phone number</span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />

        <div class="input-group my-2">
          <span class="input-group-text my-2">Write queries</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
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
  );
}

export default Contact;
