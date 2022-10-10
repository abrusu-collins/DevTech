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
          <p className="reason-big">World Class products</p>
          <p className="explain">
            We don't just creat any product, we create world class products. We
            don't do mediocre work, we make sure that any product that comes out
            of the DevTech Lab is quality.
          </p>
        </div>

        <div className="notch">
          <FontAwesomeIcon icon={faCode} color="#0da34e" />
          <p className="reason-big">Top Notch Engineers</p>
          <p className="explain">
            We have Experienced designers and Engineers who work day in day out
            to build top notch products. They work together to bring your ideas
            to life.
          </p>
        </div>

        <div className="afford">
          <FontAwesomeIcon icon={faSackDollar} color="#0da34e" />
          <p className="reason-big">Affordable Prices</p>
          <p className="explain">
            We give you value for your money. We create digital product at
            affordablbe prices for everybody. We are a value focused company so
            we don't put money first, we mainly focus on the impact we are
            creating in the world.
          </p>
        </div>

        <div className="success">
          <FontAwesomeIcon icon={faThumbsUp} color="#0da34e" />
          <p className="reason-big">Digital Success</p>
          <p className="explain"> We help your business/ company succed digitally.</p>
        </div>

        <div className="happy">
          <FontAwesomeIcon icon={faFaceSmileWink} color="#0da34e" />
          <p className="reason-big">Client Happiness</p>
          <p className="explain">
            We put the customers first and make sure they always get what they
            want. We create digital products that our clients fall in love with.
            We make sure our clients are 200% happy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
