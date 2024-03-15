import "./Frame4.css";
import HomeImage from "/image3.jpg";
export const Frame4 = () => {
  return (
    <div className="div-contaimer">
      <img src={HomeImage} alt="HomeImage" />
      <div className="element-div">
        <p className="home-element">Discover Your Perfect Home</p>
        <p className="description-element">
          Use our advanced filters to narrow down your search. Specify
          everything from location to amenities, ensuring you find the property
          that feels right.
        </p>
        <a href="Learn More" className="link">
          Learn More
        </a>
      </div>
    </div>
  );
};
