import androidimg from "../img/android.gif";
import websiteimg from "../img/website.gif";
import desktopimg from "../img/desktop.gif";
import bugimg from "../img/bug.gif";
import uiuximg from "../img/uiux.gif";

function Services() {
  return (
    <div className="services">
      <p className="title">OUR SERVICES</p>
      <div className="listofservices">
        <div className="web">
          <div className="service-name">
            <p className="number">01</p>
            <p>Website Development</p>
          </div>
          <img src={websiteimg} alt="websiteimg" />
        </div>
        <div className="website">
          <img src={androidimg} alt="" />
          <div className="service-name">
            <p className="number">02</p>
            <p>Android Apps</p>
          </div>
        </div>
        <div className="desktop">
          <div className="service-name">
            <p className="number">03</p>
            <p>Desktop Apps</p>
          </div>
          <img src={desktopimg} alt="desktopimg" />
        </div>
        <div className="bug">
          <img src={bugimg} alt="bugimg" />
          <div className="service-name">
            <p className="number">04</p>
            <p>Bug Fixing</p>
          </div>
        </div>
        <div className="uiux">
          <div className="service-name">
            <p className="number">05</p>
            <p>UI/UX Improvements</p>
          </div>
          <img src={uiuximg} alt="uiuximg" />
        </div>
      </div>
    </div>
  );
}

export default Services;
