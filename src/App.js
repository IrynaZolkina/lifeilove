import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home-page/Home";

import "./App.css";
import About from "./pages/about-page/About";
import Contact from "./pages/contact-page/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
