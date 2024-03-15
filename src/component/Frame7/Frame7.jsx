import "./Frame7.css";
import SecureImage from "/image6.jpg";
export const Frame7 = () => {
  return (
    <div className="Secure-contaimer">
      <div className="propery-div">
        <p className="home-element">Seal the Deal Securely</p>
        <p className="description-element">
          Advance payments made safe. Secure your agreement with confidence, and
          step closer to your dream property.
        </p>
        <a href="Learn More" className="link">
          Learn More
        </a>
      </div>
      <img src={SecureImage} alt="HomeImage" />
    </div>
  );
};
