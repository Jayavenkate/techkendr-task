import { Button, styled } from "@mui/material";
import "./Frame9.css";
import { Arrow } from "../../data";
export const Frame9 = () => {
  const ButtonFram9 = styled(Button)({
    backgroundColor: "#3A7DFF",
    color: "#fff",
    padding: "16px",
    borderRadius: "40px",
    width: "323px",
    height: "58px",
    cursor: "pointer",
    display: "flex",
    gap: "10px",
    margin: "20px auto",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#3A7DFF",
    },
  });
  return (
    <div className="frame9-container">
      <div>
        <p className="pelement">
          YOUR <span className="span-element">TRUSTED</span> PARTNER IN THE
          FUTURE
          <span className="span-element"> OF HOUSING</span>
        </p>
        <p className="description">
          Our partnerships with governments and local banks ensure that our
          housing prices are affordable enough for our target market.
        </p>
        <ButtonFram9>Join Our Community Today{Arrow} </ButtonFram9>
      </div>
    </div>
  );
};
