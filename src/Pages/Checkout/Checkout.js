import React from "react";

const Checkout = () => {
  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Booking Information</h1>
        <form>
          <div className="input-field">
            <label htmlFor="name">Your Name</label>
            <div className="input-wrapper">
              <input type="text" name="email" id="email" required />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="email">Your Email</label>
            <div className="input-wrapper">
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="Address">Address</label>
            <div className="input-wrapper">
              <input type="text" name="Address" id="Address" required />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-wrapper">
              <input type="number" name="phone" id="phone" required />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Proceed Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
