import blackogif from "../img/blacko.gif";
import hotelvivigif from "../img/hotel-vivi.gif";
import edemgif from "../img/edem.gif";

function Works() {
  return (
    <div className="works">
      <p className="works_title">FEATURED WORK</p>
      <div className="flex2_gifs">
        <div className="blacko">
          <div className="gif">
            <img src={blackogif} alt="blackogif" />
          </div>
          <div className="about">
            <p>Website for Blacko(Musician)</p>
            <a href="">Visit Website</a>
          </div>
        </div>
        <div className="edem">
          <img src={edemgif} alt="edemgif" />
          <div className="about">
            <p>Website for Edem Creatives(Graphic Designer)</p>
            <a href="">Visit Website</a>
          </div>
        </div>
      </div>
      <div className="hotel_gif">
        <div className="hotel-vivi">
          <img src={hotelvivigif} alt="hotelvivigif" />
          <div className="about">
            <p>Website for Hotelvivi(Hotel)</p>
            <a href="https://hotelvivi.netlify.app/" target="blank">Visit Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
