import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Widget1 } from "./components/Widget1";
import { Widget2 } from "./components/Widget2";

function App() {
  return (
    <>
      <main className=" bg-gradient-to-b from-[#373E44] to-[#191B1F] h-full lg:h-screen">
        <div className="pt-10 xl:max-container flex gap-20">
          <div className="flex flex-col lg:flex-row gap-20 w-full px-5 items-center">
            <div className="w-full xl:w-full bg-[#616161] rounded-lg content-none h-[689px] mt-14"></div>
            <div className="">
              <Widget1></Widget1>
              <Widget2></Widget2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
