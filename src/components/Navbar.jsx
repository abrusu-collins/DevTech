import companyimg from "../img/devtech.png";

function Navbar() {
  return (
    <div className="navbar" id="home">
      <img src={companyimg} alt="companyimg" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#tvinw">Services</a>
        </li>
        <li>
          <a href="#fans">Why Choose Us</a>
        </li>
        <li>
          <a href="#pics">Featured work</a>
        </li>
        <li>
          <a href="#pics">Our process</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
