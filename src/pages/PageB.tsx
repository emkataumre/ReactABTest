import { FC } from "react";
import planet from "../assets/images/planet.png";

export const PageB: FC = () => {
  return (
    <>
      <header className="flex justify-end bg-transparent px-2.5 py-5 bg-slate-200 w-full">
        <button className="bg-primary-blue text-white px-2 py-1 font-sans font-bold">
          Create an account
        </button>
      </header>
      <div className="overflow-y-hidden">
        <section className="z-10 h-svh relative flex items-center justify-start">
          <div className="overflow-hidden z-20 w-[75%] h-[120%] absolute bg-tertiary-blue left-[-42%] rounded-full"></div>
          <img className="w-5/12 h-auto z-30" src={planet} alt="Planet" />
          <section className="z-50 flex flex-col h-2/6 w-3/6 justify-center">
            <h1 className=" mt-2 mb-auto text-center">
              <p className="block text-2xl">welcome to</p>
              <p className="font-bold text-4xl uppercase text-primary-blue">
                webObserve!{" "}
              </p>
            </h1>
            <p className="text-center mb-auto text-lg font-serif">
              Venture beyond Earth and reach for the stars.
            </p>
            <button className="bg-primary-blue ml-auto mr-auto text-white py-2 px-2.5 font-sans font-bold">
              Take the first step
            </button>
          </section>
        </section>
        <footer className="px-2.5 py-5 relative z-40 bg-secondary-blue flex justify-center">
          <p className="">©2024webObserve</p>
        </footer>
      </div>
    </>
  );
};
