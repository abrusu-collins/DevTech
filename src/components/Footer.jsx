let companyimg ="../img/"

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>copy;{year}</p>
    </div>
  );
}

export default Footer;
