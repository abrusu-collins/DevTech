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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              incidunt corrupti dolore quisquam laudantium. Dolorem corporis
              magni quos nesciunt hic nobis fugiat, pariatur minima ea eos eum
              deserunt nihil totam!
            </p>
          </div>
          <div className="desktop">
            <img src={desktop} alt="desktop-img" />
            <p className="heading">Website Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              incidunt corrupti dolore quisquam laudantium. Dolorem corporis
              magni quos nesciunt hic nobis fugiat, pariatur minima ea eos eum
              deserunt nihil totam!
            </p>
          </div>
          <div className="android">
            <img src={android} alt="android-img" />
            <p className="heading">Website Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              incidunt corrupti dolore quisquam laudantium. Dolorem corporis
              magni quos nesciunt hic nobis fugiat, pariatur minima ea eos eum
              deserunt nihil totam!
            </p>
          </div>
          <div className="uiux">
            <img src={uiux} alt="uiux-img" />
            <p className="heading">Website Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              incidunt corrupti dolore quisquam laudantium. Dolorem corporis
              magni quos nesciunt hic nobis fugiat, pariatur minima ea eos eum
              deserunt nihil totam!
            </p>
          </div>
          <div className="bug">
            <img src={bug} alt="bug-img" />
            <p className="heading">Website Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              incidunt corrupti dolore quisquam laudantium. Dolorem corporis
              magni quos nesciunt hic nobis fugiat, pariatur minima ea eos eum
              deserunt nihil totam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
