import "./Frame8.css";


export const Frame8 = () => {
    const ThirdContainer = () => {
        return (
            <div className="element-third-container">
                <p className="number">03</p>
                <p className="search-elemet">Direct Messaging</p>
                <div className="button"></div>
                <p className="element">
                    Seamless Communication. Connect directly with sellers or buyers to ask
                    questions, negotiate, and make decisions.
                </p>
            </div>
        );
    };
    return (
        <div className="frame8-container">
            <p className="heading">WHY CHOOSE XYZ?</p>
            <div className="elemet-parent">
                <div className="element-first-container">
                    <p className="number">01</p>
                    <p className="search-elemet">Search and Filters</p>
                    <div className="button"></div>
                    <p className="element">
                        Tailored Searches to meet your needs. Find what you’re looking for
                        with precision.
                    </p>
                </div>

                <div className="element-second-container">
                    <p className="number">02</p>
                    <p className="search-elemet">Detailed Listings</p>
                    <div className="button"></div>
                    <p className="element">
                        Every Detail Matters. Sellers can list, and buyers can explore
                        properties that meet their exact specifications.
                    </p>
                </div>
                {ThirdContainer()}
                <div className="element-second-container">
                    <p className="number">04</p>
                    <p className="search-elemet">Secure Payments</p>
                    <div className="button"></div>
                    <p className="element">
                        Trust in Every Transaction. Our secure payment system ensures your
                        peace fo mind.
                    </p>
                </div>
            </div>
        </div>
    );
};
