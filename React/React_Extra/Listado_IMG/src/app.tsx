

import { AppRutas } from "@/core";
import { Link } from "react-router-dom";


export const App = () => {

  return <AppRutas/>
  
};




export const Home = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link to="/list">Users</Link>
      </div>
    </>
  )
}

// CUSTMO HOOK
