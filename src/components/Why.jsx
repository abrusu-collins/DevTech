import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faSackDollar,
  faGlobe,
  faCode,
  faFaceSmileWink,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Why() {
  return (
    <div className="why">
      <p className="title">WHY CHOOOSE US</p>
      <div className="reasons">
        <div className="fast">
          <FontAwesomeIcon icon={faBolt} color="#0da34e" />
          <p className="reason-big">Super Fast Delivery</p>
          <p className="explain">
            After getting the order from a customer, we start work as soon as
            possible without wasting time. We know how it feels to wait so we
            won't keep you waiting.
          </p>
        </div>

        <div className="fast">
          <FontAwesomeIcon icon={faGlobe} color="#0da34e" />
          <p className="reason-big">World Class product</p>
          <p className="explain"></p>
        </div>

        <div className="fast">
          <FontAwesomeIcon icon={faCode} color="#0da34e" />
          <p className="reason-big">Top Notch Engineers</p>
          <p className="explain"></p>
        </div>

        <div className="fast">
          <FontAwesomeIcon icon={faSackDollar} color="#0da34e" />
          <p className="reason-big">Affordable Prices</p>
          <p className="explain"></p>
        </div>

        <div className="fast">
          <FontAwesomeIcon icon={faThumbsUp} color="#0da34e" />
          <p className="reason-big">Digital Success</p>
          <p className="explain"></p>
        </div>

        <div className="fast">
          <FontAwesomeIcon icon={faFaceSmileWink} color="#0da34e" />
          <p className="reason-big">Client Happiness</p>
          <p className="explain"></p>
        </div>
      </div>
    </div>
  );
}

export default Why;
