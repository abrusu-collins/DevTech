import programmerimg from "../img/programmer.jpg";
function Services() {
  return (
    <div className="services">
      <p className="title">WHAT WE DO</p>
      <div className="main-services">
        <img src={programmerimg} alt="programmerimg" />
        <div className="list-of-services">
          <div>Website Design</div>
          <div>Website Design</div>
          <div>Website Design</div>
          <div>Website Design</div>
          <div>Website Design</div>

        </div>
      </div>
    </div>
  );
}

export default Services;
