import { Button, styled } from "@mui/material";
import "./Frameone.css";
import { Arrow } from "../../data";
import { useEffect } from "react";
import WebFont from "webfontloader";

export const FrameOne = () => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Lato:400,700'] // specify weights you need
          }
        });
      }, []);
    //styledcomponet 
    const ButtonHome = styled(Button)({
        backgroundColor: "#3A7DFF",
        color: "#fff",
        padding: "16px, 16px, 16px, 24px",
        borderRadius: "40px",
        width: "224px",
        height: "58px",
        cursor: "pointer",
        display:"flex",
        gap:"10px",
        textTransform:"none",
        "&:hover": {
            backgroundColor: "#3A7DFF",
        },
    });
    
    return (
        <div className="box-container">
            <p className="typography">CONNECTING DREAMS TO REALITY</p>
            <span className="span-typograpy">YOUR PREMIER</span>
            <p className="typography">REAL ESTATE MARKETPLACE</p>
            <p className="description">Where every search ends with a home</p>
            <div className="button-div">
                <ButtonHome>Find Your Home {Arrow} </ButtonHome>
                <ButtonHome>List Your Property {Arrow}</ButtonHome>
            </div>
        </div>
    );
};
