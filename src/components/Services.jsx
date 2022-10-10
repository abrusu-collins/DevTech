import programmerimg from "../img/programmer.jpg";
function Services() {
  return (
    <div className="services">
      <p className="title">WHAT WE DO</p>
      <div className="main-services">
        <img src={programmerimg} alt="programmerimg" />
        <div className="list-of-services">
          <div>Website Development</div>
          <div>Android App Development</div>
          <div>Desktop App Development</div>
          <div>Bug Fixing</div>
          <div>UI/UX Improvement</div>

        </div>
      </div>
    </div>
  );
}

export default Services;
