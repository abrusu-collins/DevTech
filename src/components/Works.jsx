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
            <p>Website for Blacko</p>
            <a href="">Visit Website</a>
          </div>
        </div>
        <div className="hotel-vivi">
          <img src={hotelvivigif} alt="hotelvivigif" />
          <div className="about">
            <p>Website for Blacko</p>
            <a href="">Visit Website</a>
          </div>
        </div>
      </div>
      <div className="edem_gif">
        <div className="edem">
          <img src={edemgif} alt="edemgif" />
          <div className="about">
            <p>Website for Blacko</p>
            <a href="">Visit Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
