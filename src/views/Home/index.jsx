import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useSpring, animated, useTemplate } from "react-spring";
import { template } from "react-spring/renderprops";
import "../../assets/css/home.css";

const Home = () => {
  const [state, setState] = useState({
    color: ["#C6FFDD", "#FBD786", "#f7797d"],
    clicked: false
  });
  const changeBgColor = colors => {
    console.log(colors);
    setState({ color: colors, clicked: !state.clicked });
  };
  const props = useSpring({
    opacity: 1,
    transform: state.clicked
      ? template`rotate3d(0,1,0,0deg) scale(2)`
      : template`rotate3d(0,1,0,180deg) scale(1)`,
    from: { opacity: 0, transform: "scale(1)" }
  });
  return (
    <div className="m-0 p-0">
      <div className="absolute bg-gray-200 cuson opacity-25 w-full h-screen" />
      <Helmet
        bodyAttributes={{
          style: `background-image : linear-gradient(to top right,${
            state.color
          })`
        }}
      />
      <div className="z-10">
        <div className="w-full home-height mt-40 w-3/4">
          <animated.button
            style={props}
            onClick={() => changeBgColor(["#6190E8", "#A7BFE8"])}
            className="block uppercase mx-auto shadow-lg bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded-full h-20 w-20 flex items-center justify-center my-auto"
          >
            Click Me
          </animated.button>
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
