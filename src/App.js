import Header from "./Components/Header/Header";
import "./App.css"
import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"
function App() {
  return (
      <Router>
          <Header/>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
          </Routes>
      </Router>
  );
}

export default App;
