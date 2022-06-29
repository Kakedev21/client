import React from "react";

const BookingPage = () => {
  return (
    <div className="bookingPage">
      <div className="booking-container">
        <div className="bookin-form">
          <h3>
            The site has 3 entry points and has different routes according to
            your chosen entry <br /> Important note: Only areas are available
            you viewed on the available area page
          </h3>
          <form>
            <h3>Kindly Fill up the form:</h3>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Address" />
            <input type="number" placeholder="Contact No." />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="No. of Companions" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
