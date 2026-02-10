import { FC } from "react";
import lemonLogo from "../public/1.webp";
import "./styles.scss"

const App: FC = () => {
  return <>
    <h2>
      {
        process.env.NODE_ENV === "development" ?
          <>
            {process.env.DES}
          </> :
          <>
            {process.env.PRO}
          </>


      }
    </h2>
    <img src={lemonLogo} alt="" />
  </>;
};

export default App;
