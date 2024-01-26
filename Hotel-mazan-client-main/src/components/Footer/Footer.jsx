import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="fottCol-left">
              <h4 className="fott-left-title">About Hotel</h4>
              <p className="fott-left-para">Welcome to the best five-star deluxe hotel in Bangalore.We invite you to book your escape with us, discover the perfect blend of elegance and comfort</p>
              <button className="fottbtn">English <i className="fa-solid fa-globe language"></i></button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="rightContainer">
              <div className="explore">
                <h4 className="fott-left-title">Explore</h4>
                <ul className="ul">
                  <li className="li">Home</li>
                  <li className="li">Rooms & Suits</li>
                  <li className="li">Restaurant</li>
                  <li className="li">All destinations</li>
      
                  <li className="li">Guest houses</li>
                </ul>
              </div>
              <div className="contact">
                <h4 className="fott-left-title">Contact</h4>
                 <i className="fa-solid fa-right-long"></i>Bangalore,Karnataka 
                <div className="phn">
                  <p className="phn-num"><i className="fa-solid fa-phone"></i>+91 9889566530</p>
                  <p className="phn-num"><i className="fa-solid fa-envelope env"></i>hotelBooking@gmail.com</p>
                  <div className="d-flex text-white">
                    <i className="fa-brands fa-instagram text-white fs-3"></i>
                    <i className="fa-brands fa-twitter text-white ms-3 fs-3"></i>
                    <i className="fa-brands fa-youtube text-white ms-3 fs-3"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <small className="copy-contianer">© Copyright 2023 by <span className="text-white">Hotel Booking.</span></small>
      </div>
    </div>
  );
};

export default Footer;
