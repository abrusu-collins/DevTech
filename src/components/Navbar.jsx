import companyimg from "../img/devtech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar">
      <img className="nav-1" src={companyimg} alt="companyimg" />
      <ul className="nav-1">
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
      <div className="nav-2">
        <div className="hamburger">
          <img src={companyimg} alt="companyimg" />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
