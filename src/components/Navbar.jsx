import companyimg from "../img/devtech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="navbar" >
      <img className="nav-1" src={companyimg} alt="companyimg" />
      <ul className="nav-1">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#whychooseus">Why Choose Us</a>
        </li>
        <li>
          <a href="#portfolio">Featured work</a>
        </li>
        <li>
          <a href="#process">Our process</a>
        </li>
      </ul>
      <div className="nav-2">
        <div className="hamburger">
          <img src={companyimg} alt="companyimg" />
          <div
            onClick={(e) => {
              e.currentTarget.parentElement.nextSibling.classList.toggle(
                "hide"
              );
              e.currentTarget.classList.toggle("green");
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <ul className="hide">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#whychooseus">Why Choose Us</a>
          </li>
          <li>
            <a href="#portfolio">Featured work</a>
          </li>
          <li>
            <a href="#process">Our process</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
