import './Frame2.css'

import ImageRoof from "/image1.jpg";
import ImageBottom from "/image2.jpg";
export const Frame2 = () => {
    return (
        <div className="image-div">
            <img src={ImageRoof} alt="ImageRoof" />
            <img src={ImageBottom} alt="ImageBottom" />
        </div>
    )
}