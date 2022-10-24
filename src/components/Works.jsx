import blackogif from "../img/blacko.gif";
import hotelvivigif from "../img/hotel-vivi.gif";
import edemgif from "../img/edem.gif";



function Works() {
    return (
        <div className="works">
            <p className="title">FEATURED WORK</p>
            <div className="work_gifs">
                <div className="blacko">
                    <div className="gif">
                        <img src={blackogif} alt="blackogif" />
                    </div>
                    <div className="about"></div>
                </div>
                <div className="hotel-vivi">
                    <img src={hotelvivigif} alt="" />
                </div>
                <div className="edem">
                    <img src={edemgif} alt="edemgif" />
                </div>
            </div>
        </div>
      );
}

export default Works;