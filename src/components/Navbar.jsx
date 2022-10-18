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
          <a href="#tvinw">Accomodation</a>
        </li>
        <li>
          <a href="#fans">Photos & Videos</a>
        </li>
        <li>
          <a href="#pics">Offers</a>
        </li>
        <li>
          <a href="#pics">Facilities & Amenities</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
