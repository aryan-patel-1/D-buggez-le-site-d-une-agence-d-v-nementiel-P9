
import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const EventCard = ({
  imageSrc = "/path/to/default/image.jpg",
  imageAlt = "Image par défaut",
  date = new Date(),
  title = "Événement sans titre", 
  label = "Événement",
  small = false,
  ...props
}) => (
    <div
      data-testid="card-testid"
      className={`EventCard${small ? " EventCard--small" : ""}`}
      {...props}
    >
      <div className="EventCard__imageContainer">
        <img 
          data-testid="card-image-testid" 
          src={imageSrc} 
          alt={imageAlt} 
        />
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month">{getMonth(date)}</div>
      </div>
    </div>
  );

EventCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  small: PropTypes.bool,
  label: PropTypes.string,
};

EventCard.defaultProps = {
  imageSrc: "/path/to/default/image.jpg",
  imageAlt: "Image par défaut",
  title: "Événement sans titre",
  label: "Événement",
  small: false,
  date: () => new Date()
}

export default EventCard;
