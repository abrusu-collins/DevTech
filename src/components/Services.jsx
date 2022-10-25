import web from "../img/web.png";
import desktop from "../img/desktop.png";
import android from "../img/android.png";
import bug from "../img/bug.png";
import uiux from "../img/uiux.png";

function Services() {
  return (
    <div className="services">
      <p className="title">WHAT WE DO</p>
      <div className="main-services">
        <div className="list-of-services">
          <div className="web">
            <img src={web} alt="web-img" />
            <p className="heading">Website Development</p>
            <p>
              We create and distribute safe websites. Our team design with
              scalability in mind, utilizing modern technologies and
              battle-tested software solutions.
            </p>
          </div>
          <div className="desktop">
            <img src={desktop} alt="desktop-img" />
            <p className="heading">Desktop App Development</p>
            <p>
              We create custom desktop applications that are designed to meet
              business challenges, promote growth, and achieve your business
              goals.
            </p>
          </div>
          <div className="android">
            <img src={android} alt="android-img" />
            <p className="heading">Android App Development</p>
            <p>
              Since almost everyone on the planet owns a smartphone, it is
              advised that your business should have an android app. We have the
              right developers to help you.
            </p>
          </div>
        </div>
        <div className="list-of-services2">
          <div className="uiux">
            <img src={uiux} alt="uiux-img" />
            <p className="heading">UI/UX Improvements</p>
            <p>
              Do you want to enhance and beautify your website and strengthen
              your business? We will work with you to pinpoint the issues and
              develop a better experience for your customers.
            </p>
          </div>
          <div className="bug">
            <img src={bug} alt="bug-img" />
            <p className="heading">Bug fixing</p>
            <p>
              We will offer you end-to-end bug fix solution as well as support
              for your website. We have worked on a lot of products using a lot
              of modern development tools so we know exacty where your bug is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
