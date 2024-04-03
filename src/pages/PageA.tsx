import React, { FC, useEffect } from "react";
import ReactGA from "react-ga";
import planet from "../assets/images/planetb.png";

export const PageA: FC = () => {
  const PageA = () => {
    useEffect(() => {
      ReactGA.pageview("/PageA");
    }, []);

    // ...
  };

  return (
    <>
      <div className="overflow-y-hidden">
        <section className="z-10 h-svh relative flex items-center justify-start">
          <div className="overflow-hidden z-20 w-[75%] h-[120%] absolute bg-tertiary-orange opacity-75 left-[-42%] rounded-full"></div>
          <img className="w-5/12 h-auto z-30" src={planet} alt="Planet" />
          <section className="z-50 flex flex-col h-2/6 w-3/6 justify-center">
            <h1 className=" mt-2 mb-auto text-center">
              <p className="block text-2xl">welcome to</p>
              <p className="font-bold text-4xl uppercase text-primary-orange">
                webObserve!{" "}
              </p>
            </h1>
            <p className="text-center mb-auto text-lg font-serif">
              Venture beyond Earth and reach for the stars.
            </p>
            <div className="flex flex-row gap-8 ml-auto mr-auto">
              <button
                className="bg-primary-orange text-white py-2 px-2.5 font-sans font-bold"
                onClick={() => {
                  console.log("Clicked 1");
                }}
              >
                Begin your journey
              </button>
              <button
                className="text-black py-2 px-2.5 font-sans font-medium border-b-4 border-primary-orange"
                onClick={() => {
                  console.log("Clicked 2");
                }}
              >
                Create an account
              </button>
            </div>
          </section>
        </section>
        <footer className="px-2.5 py-5 relative z-40 bg-secondary-orange flex justify-center">
          <p className="text-white">©2024webObserve</p>
        </footer>
      </div>
    </>
  );
};
export default PageA;
