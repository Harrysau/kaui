import React, { Component } from "react";
import NavButton from "../commons/NavButton";

class NavBar extends Component {
  state = {
    leftNavClicked: false,
    rightNavClicked: false
  };
  handleLeftNavToggle = () => {
    this.setState({ leftNavClicked: !this.state.leftNavClicked });
  };
  handleRightNavToggle = () => {
    this.setState({ rightNavClicked: !this.state.rightNavClicked });
  };
  render() {
    return (
      <nav className="bg-transparent fixed top-0 w-full h-20 shadow font-sans ">
        <div className="container mx-auto flex items-center justify-between h-20">
          <div className="flex-1 h-auto">
            {/* Left Element */}
            <div className="hidden lg:flex md:flex justify-start">
              <div className="w-20 px-2">
                <span className="text-white text-lg font-semibold">Option</span>
              </div>
              <div className="w-20 px-2">
                <span className="text-white text-lg font-semibold">Option</span>
              </div>
              <div className="w-auto px-2">
                <span className="text-white text-lg font-semibold">Option</span>
              </div>
            </div>
            <div className="lg:hidden md:hidden flex justify-start items-center ml-3">
              <div className="justify-center items-center align-center h-auto pt-3">
                <NavButton navClick={this.handleLeftNavToggle} />
              </div>
            </div>
          </div>

          {/* Middle Elements */}
          <div className="flex-1 h-auto text-center md:text-center lg:text-center px-5 ">
            <span className="text-3xl text-white font-base">LOGO</span>
          </div>

          {/* Right Elements */}
          <div className="flex-1 h-auto">
            <div className="hidden lg:flex md:flex justify-end">
              <div className="w-20 px-2">
                <span className="text-white text-lg font-semibold">Option</span>
              </div>
              <div className="w-20 px-2">
                <span className="text-white text-lg font-semibold">Option</span>
              </div>
              <div className="w-auto px-2">
                <span className="text-white text-lg font-semibold">Option</span>
              </div>
            </div>
            <div className="lg:hidden md:hidden flex justify-end items-center">
              <div className="justify-center items-center align-center h-auto pt-3">
                <NavButton navClick={this.handleRightNavToggle} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
