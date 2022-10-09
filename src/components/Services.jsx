import androidimg from "../img/android.gif";
import websiteimg from "../img/website.gif";

function Services() {
  return (
    <div className="services">
      <p className="title">OUR SERVICES</p>
      <div className="listofservices">
        <div className="web">
          <p className="number">01</p>
          <p>Website Development</p>
          <img src={websiteimg} alt="websiteimg" />
        </div>
        <div className="website">
          <p className="number">02</p>
          <p>Android Apps</p>
          <img src={androidimg} alt="" />
        </div>
        <div className="desktop">
          <p className="number">03</p>
          <p>Desktop Apps</p>
          <img src="" alt="" />
        </div>
        <div className="bug">
          <p className="number">04</p>
          <p>Bug Fixing</p>
          <img src="" alt="" />
        </div>
        <div className="uiux">
          <p className="number">05</p>
          <p>UI/UX Improvements</p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Services;
