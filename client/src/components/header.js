import React, { Component } from "react";
import Image from "react-graceful-image";
import Navbar from './navbar';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <Image
          src="https://theinspiredhome.imgix.net/images/Loaded-Mediterranean-Street-Fries-2-2_171003_140630.jpg?fit=clip&ixlib=php-1.1.0&q=80&w=750"
          width="832"
          height="550"
          alt="My awesome image"
        />
      </div>
    );
  }
}

export default Header;
