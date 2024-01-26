import "./mailList.css"

const MailList = () => {  
  return (
    <div className="mail__container">
      <div className="mail  mt-5  pt-4">
        <h1 className="mailTitle">Let's get in touch!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Enter Your Email" />
          <button className="btn__subcribe">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default MailList