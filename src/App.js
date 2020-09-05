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
        {/*  <Contact /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
