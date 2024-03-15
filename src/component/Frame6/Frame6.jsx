import "./Frame6.css";
import ContactImage from "/image5.jpg";
export const Frame6 = () => {
    return (
        <div className="div-contaimer">
            <img src={ContactImage} alt="HomeImage" />
            <div className="element-div">
                <p className="home-element">Connect and Communicate</p>
                <p className="description-element">
                    Our platform facilitates direct communication between buyer and
                    seller, making negotiations transparent and straightforward.
                </p>
                <a href="Learn More" className="link">
                    Learn More
                </a>
            </div>
        </div>
    );
};
