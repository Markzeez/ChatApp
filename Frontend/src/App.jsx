import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Page404 from "../src/Pages/PageNotFound"


function App() {
 
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Register />} />
        <Route index path={"/home"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
