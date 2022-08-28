import Header from "./Components/Header/Header";
import "./App.css"
import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, HashRouter
} from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"
function App() {
  return (
      <HashRouter>
          <Header/>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
          </Routes>
      </HashRouter>
  );
}

export default App;
