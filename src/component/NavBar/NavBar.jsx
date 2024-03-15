import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
export const NavBar = () => {
  //styled component
  const AppBarColor = styled(AppBar)({
    backgroundColor: "#fff",
    boxShadow: "none",
    flexGrow: 1,
  });
  const BoxDiv = styled(Box)({
    backgroundColor: "#071A45",
    borderRadius: "80px",
    width: "483px",
    height: "66px",

    display: "flex",
    flexDirection: "row",
    padding: "0px 10px",

    justifyContent: "space-around",
  });
  const BoxButton = styled(Button)({
    color: "#C9C6C2",
    fontSize: "16px",
    fontWeight: 400,

    fontFamily: "Lato",
    lineHeight: "18px",
    textTransform: "none",
    cursor: "pointer",
  });
  const BoxSignButton = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "24px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const SignUpButton = styled(Button)({
    borderRadius: "40px",
    border: "1px solid #071A45",
    padding: "16px",
    color: "#071A45",
    fontSize: "20px",
    fontWeight: 400,
    textTransform: "none",
    fontFamily: "Lato",
    lineHeight: "26px",
    cursor: "pointer",
  });
  const SignInButton = styled(Button)({
    borderRadius: "40px",
    backgroundColor: "#3A7DFF",
    padding: "16px",
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: 400,
    textTransform: "none",
    cursor: "pointer",
    fontFamily: "Lato",
    lineHeight: "26px",
    "&:hover": {
      backgroundColor: "#3A7DFF",
    },
  });

  const MenuBox = styled(IconButton)(({ theme }) => ({
    display: "none",
    color: "#071A45",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  }));
  //values
  const navitem = ["Home", "About Us", "Property", "Services", "Contact"];
  return (
    <Box sx={{ height: "48px", padding: "10px" }}>
      <AppBarColor position="fixed">
        <Toolbar size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
          <Typography sx={{ flexGrow: 1 }}>
            <span className="head-1">XYZ </span>
            <span className="head-2">INDUSTRIES</span>
          </Typography>
          <MenuBox>
            <MenuIcon />
          </MenuBox>
          <Box sx={{ flexGrow: 1, display: { md: "flex", xs: "none" } }}>
            <BoxDiv>
              {navitem.map((item) => (
                <BoxButton key={item}>{item}</BoxButton>
              ))}
            </BoxDiv>
          </Box>
          <BoxSignButton>
            <SignUpButton className="signup-common">Sign Up</SignUpButton>
            <SignInButton className="signup-common">Sign In</SignInButton>
          </BoxSignButton>
        </Toolbar>
      </AppBarColor>
    </Box>
  );
};
