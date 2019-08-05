import React, { Component } from "react";

const NavBar = () => {
    return (
        <nav className="bg-white h-16 shadow">
            <div className="container mx-auto flex items-center justify-between h-16">
                <div className="flex-1 bg-red-500 h-auto hidden lg:flex md:flex">
                    Left
                </div>
                <div className="flex-1 h-auto text-left md:text-center  lg:text-center px-5 ">
                    <span className="text-2xl text-blue-800 font-bold">
                        Khan Academy
                    </span>
                </div>
                <div className="flex-1 h-auto">
                    <div className="hidden lg:flex md:flex justify-end">
                        <div className="w-20 px-2">
                            <span className="text-blue-700 text-lg font-semibold">
                                Donate
                            </span>
                        </div>
                        <div className="w-20 px-2">
                            <span className="text-blue-700 text-lg font-semibold">
                                Login
                            </span>
                        </div>
                        <div className="w-auto px-2">
                            <span className="text-blue-700 text-lg font-semibold">
                                Sign Up
                            </span>
                        </div>
                    </div>
                    <div className="lg:hidden md:hidden flex justify-end items-center">
                        <div className="justify-center items-center align-center h-auto pt-3">
                            <svg
                                height="32px"
                                id="Layer_1"
                                version="1.1"
                                viewBox="0 0 50 50"
                                width="32px"
                                space="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
