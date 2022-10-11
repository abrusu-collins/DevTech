import companyimg from "../img/devtech.png";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <img src={companyimg} alt="companyimg" />
      <p>&copy; {year}</p>
    </div>
  );
}

export default Footer;
