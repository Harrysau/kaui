import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/home.css";

const Home = () => {
  const [state, setState] = useState({
    color: ["#C6FFDD", "#FBD786", "#f7797d"]
  });
  const changeBgColor = colors => {
    console.log(colors);
    setState({ color: colors });
  };
  return (
    <div className="m-0 p-0">
      <Helmet
        bodyAttributes={{
          style: `background-image : linear-gradient(to top right,${
            state.color
          })`
        }}
      />
      <div>
        <div className="container mx-auto shadow-xl border-solid border-black rounded-lg home-height mt-20 w-3/4">
          <button
            onClick={() => changeBgColor(["#6190E8", "#A7BFE8"])}
            className="block uppercase mx-auto shadow-lg bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded-full h-20 w-20 flex items-center justify-center my-5"
          >
            Click Me
          </button>
          <button
            onClick={() => changeBgColor(["#A770EF", "#CF8BF3", "#FDB99B"])}
            className="block uppercase mx-auto shadow bg-red-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded my-5"
          >
            Click Me
          </button>
          <button
            onClick={() => changeBgColor(["#021b79", "#0575E6"])}
            className="block uppercase mx-auto shadow bg-blue-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded my-5"
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
