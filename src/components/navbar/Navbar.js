import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo1 from "./eeernbg.png";
import cart from "./cart.png";
import "./navbar.scss";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };
  render() {
    return (
      <div>
        <nav className={this.state.show ? "active" : "hidden"}>
          <div className="navbar-container">
            <NavLink to="/">
              {" "}
              <img src={logo1} className="App-logo1" alt="logo" />{" "}
            </NavLink>

            <ul>
              <li>
                <NavLink to="/"> HOME </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> PRODUCTS </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> HOW TO USE </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> ABOUT </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> SHIPPING </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> BLOG </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> CONTACTS </NavLink>
              </li>
            </ul>
            <img src={cart} className="cart-navbar" alt="logo" />
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);

/* import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./navbar.scss";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 70;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll");
  };
  render() {
    return (
      <div>
        <nav
          className={this.state.scrolled ? "navigation scrolled" : "navigation"}
        >
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/about"> About </NavLink>
            </li>
            <li>
              <NavLink to="/"> Contact </NavLink>
            </li>
            <li>
              <NavLink to="/"> Contact </NavLink>
            </li>
            <li>
              <NavLink to="/"> Contact </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
 */
