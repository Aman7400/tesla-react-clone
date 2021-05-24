import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import Section from "./pages/Section";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/model/:section" exact component={Section} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
