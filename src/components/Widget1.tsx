import React, { useState } from "react";

type serviceType = {
  id: number;
  title: string;
};

const services: serviceType[] = [
  {
    id: 1,
    title: "About Me",
  },
  {
    id: 2,
    title: "Experiences",
  },
  { id: 3, title: "Recommended" },
];
export const Widget1 = () => {
  const [selectedService, setSelectedService] = useState<serviceType>({
    id: 1,
    title: "About me",
  });
  return (
    <div className="xl:w-[720px] gap-5 bg-[#363C43] drop-shadow-2xl  px-3.5 py-4 mt-14 text-xl leading-5 text-center rounded-xl text-zinc-900 text-opacity-80 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col gap-8">
        <div className="flex gap-5 ">
          <div className="py-2">
            <img
              src="public/questionmark.png"
              width={24}
              height={24}
              alt="icon"
            />
          </div>
          <ul className="flex text-white justify-between py-2 px-4 bg-[#171717]  w-full gap-10 items-center rounded-3xl max-sm:flex-col">
            {services.map((service) => (
              <li
                key={service.title}
                className={`flex-auto rounded-xl py-2 max-md:px-5 ${
                  selectedService && selectedService.title === service.title
                    ? "bg-[#28292F] scale-[110%] shadow-xl shadow-gray-950 text-white transition-transform duration-100"
                    : "transform 0.3s ease"
                }`}
              >
                <button
                  onClick={() => setSelectedService(service)}
                  className=""
                >
                  {service.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 mb-5">
          <div className="py-6 w-24">
            <img src="public/boxicon.png" width={24} height={24} alt="icon" />
          </div>
          <h2 className="flex flex-col text-start  justify-start items-start  text-zinc-500">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.{" "}
            <span className="mt-4">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </span>
          </h2>
          <div className="py-6 w-24">
            <img
              src="public/questionmark.png"
              width={24}
              height={24}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
