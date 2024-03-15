import "./Frame5.css";
import PropertyImage from "/image4.jpg";
export const Frame5 = () => {
  return (
    <div className="property-contaimer">
      <div className="propery-div">
        <p className="home-element">Showcase Your Property</p>
        <p className="description-element">
          List your property with ease. Fill in detailed forms to highlight
          every feature, attracting the perfect buyer directly.
        </p>
        <a href="Learn More" className="link">
          Learn More
        </a>
      </div>
      <img src={PropertyImage} alt="HomeImage" />
    </div>
  );
};
