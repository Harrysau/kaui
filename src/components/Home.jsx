import React from "react";
import { Helmet } from "react-helmet";
import "../assets/css/home.css";

const Home = () => {
    return (
        <div className="m-0 p-0">
            <Helmet
                bodyAttributes={{
                    style:
                        "background-image : linear-gradient(to top right, #C6FFDD, #FBD786, #f7797d)"
                }}
            />
            <div className="container mx-auto shadow-xl border-solid border-black rounded-lg home-height mt-20 w-3/4">
                <div className="absolute bg-gray-700 w-3/4 opacity-25 home-height rounded-lg" />
                <div className="absolute  w-3/4 rounded-lg text-center">
                    Homepage
                </div>
            </div>
        </div>
    );
};

export default Home;
