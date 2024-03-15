import { Button, TextField, styled } from "@mui/material";
import "./Frame10.css";
import { Arrow, Facebook, Instagram, Twitter, Youtube } from "../../data";
import { useState } from "react";
import axios from "axios";
export const Frame10 = () => {
    //styledcomponet
    const ButtonFooter = styled(Button)({
        color: "#FFFFFF",
        padding: "16px, 16px, 16px, 24px",
        borderRadius: "40px",
        width: "168px",
        height: "58px",
        cursor: "pointer",
        display: "flex",
        gap: "10px",
        border: "1px solid #FFFFFF",
        fontFamily: "Lato",
        fontSize: "20px",
        lineHeight: "26px",
    });

    const FooterBUtton = styled(Button)({
        color: "#FFFFFF",
        width: "300px",
        backgroundColor: "#3A7DFF",
        borderRadius: "8px",
        textTransform: "none",
        height: "52px",
    });
    const Links = [
        "About Us",
        "Blog",
        "Testimonials",
        "Terms and Conditions",
        "Privacy Policy",
        "Site Map",
    ];
    const Customer = ["Feedback", "Report a Problem", "Request a Call Back"];

    //usestate
    const [email, setEmail] = useState("");

    const handleClick = async () => {
        try {
            const response = await axios.post("http://localhost:4000/create", {
                email,
            });
            setEmail("");
            console.log(response.data);
        } catch (err) {
            console.log("Error", err);
        }
    };
    return (
        <div className="parent-container">
            <div className="footer-container">
                <div>
                    <p>
                        <span className="head1-footer">XYZ </span>
                        <span className="head2-footer">INDUSTRIES</span>
                    </p>
                    <p className="footer-description">
                        XYZ Industries: Where real estate dreams meet seamless transactions,
                        transforming aspirations into achievements.
                    </p>
                    <ButtonFooter>EXPLORE{Arrow} </ButtonFooter>
                </div>
                <div>
                    <p className="quicklink">Quick Links</p>
                    <p>
                        {Links.map((item) => (
                            <div key={item} className="item-links">
                                {item}
                            </div>
                        ))}
                    </p>
                </div>
                <div>
                    <p className="quicklink">Customer Supports</p>
                    <p>
                        {Customer.map((item) => (
                            <div key={item} className="item-links">
                                {item}
                            </div>
                        ))}
                    </p>
                </div>
                <div>
                    <p className="quicklink">Subscribe Us</p>
                    <p className="item-links">Subscribe to our weekly newsletter</p>
                    <div className="input-button">
                        <TextField
                            type="text"
                            placeholder="Email Id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px" }}
                        />
                        <FooterBUtton
                            variant="contained"
                            type="submit "
                            onClick={handleClick}
                        >
                            Subscribe
                        </FooterBUtton>
                    </div>
                </div>
            </div>
            <div className="horizontal-container">
                <hr />
                <div className="icons-contaoiner">
                    <div className="icons icon-con">
                        {Youtube}
                        {Twitter}
                        {Instagram}
                        {Facebook}
                    </div>
                    <div className="icons icon-con">
                        <div className="icons">
                            <p className="icon-p">Terms</p>
                            <div
                                style={{ borderLeft: "2px solid white", height: "10px" }}
                            ></div>
                            <p className="icon-p">Privacy</p>
                        </div>
                        <div>&copy;2024 XYZ</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
