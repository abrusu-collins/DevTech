import web from "../img/web.png";
function Services() {
  return (
    <div className="services">
      <p className="title">WHAT WE DO</p>
      <div className="main-services">
        <div className="list-of-services">
          <div className="web">
            <img src={web} alt="" />
            <p className="heading">Website Development</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              incidunt corrupti dolore quisquam laudantium. Dolorem corporis
              magni quos nesciunt hic nobis fugiat, pariatur minima ea eos eum
              deserunt nihil totam!
            </p>
          </div>
          <div className="android">Android App Development</div>
          <div className="desktop">Desktop App Development</div>
          <div className="bug">Bug Fixing</div>
          <div className="uiux">UI/UX Improvement</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
