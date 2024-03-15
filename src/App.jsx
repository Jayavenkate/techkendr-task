import "./App.css";
import { FrameOne } from "./component/Frame1/Frameone";
import { Frame10 } from "./component/Frame10/Frame10";
import { Frame2 } from "./component/Frame2/Frame2";
import { Frame3 } from "./component/Frame3/Frame3";
import { Frame4 } from "./component/Frame4/Frame4";
import { Frame5 } from "./component/Frame5/Frame5";
import { Frame6 } from "./component/Frame6/Frame6";
import { Frame7 } from "./component/Frame7/Frame7";
import { Frame8 } from "./component/Frame8/Frame8";
import { Frame9 } from "./component/Frame9/Frame9";
import { NavBar } from "./component/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <FrameOne />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9/>
      <Frame10/>
    </>
  );
}

export default App;
