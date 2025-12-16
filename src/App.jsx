// Global CSS
import "./index.css";

// Components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FrontEndProjects from "./Components/FrontEndProjects";
import Footer from "./Components/Footer";
import GraphicProjetcs from "./Components/GraphicProjetcs";
// import Reviews from "./Components/Reviews";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/dev">
          <FrontEndProjects />
        </Route>
        <Route exact path="/graphic">
          <GraphicProjetcs />
        </Route>
        {/* <Route exact path="/reviews">
          <Reviews />
        </Route> */}
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
