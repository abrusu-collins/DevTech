import heroimg from "../img/hero-img.png";

function Hero() {
  return (
    <div className="main-hero" id="home">
      <div className="hero">
        <div className="hero-left">
          <p className="tag-line">We create world class digital products.</p>
          <p className="descibe">
            DevTech is a sofware development agency in Accra, Ghana. We help you
            own quality and affordable digital products easily. We develop
            <span> Websites</span>, <span>Android Apps</span>, and
            <span> Desktop Apps</span>. We also do <span>bug fixing</span> and
            <span>UI/UX improvements</span>.
          </p>
          <p className="discuss">Let's discuss your project.</p>
          <a href="mailto:snillochemingson@gmail.com">Talk To Us Now</a>
        </div>
        <div className="hero-right">
          <img src={heroimg} alt="heroimg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
