import React from "react";
import deaddiction from "./Image/de-addiction.jpg";
import doctor from "./Image/doctor.jpg"
import ThreeDSlider from "./ThreeDSlider";

const Home = () => {
  return (
    <div >
      <div className="w-full py-1 px-14">
        {/* Heading */}
        <h1 className="text-[50px] text-right text-[#2A2A72] mb-6">
          De-Addiction Anonymous
        </h1>

        <div className="mx-auto flex flex-col md:flex-row items-center gap-1">
          {/* Left Side - Image */}
          <div className="flex-1">
            <img
              src={deaddiction}
              alt="De-addiction group"
              className="w-full h-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col">
            <p className="text-gray-700 text-right mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            {/* Button aligned right */}
            <div className="flex justify-end">
              <button className="bg-[#2A2A72] text-[14px] text-white px-5 py-2 rounded-md  transition">
                Join Online Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
       

       <div className="w-full mt-12 py-12 px-14 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Content */}
        <div className="flex-1">
          <h1 className="text-[50px] text-left text-[#2A2A72] mb-6">
            Explore the Doctors
          </h1>

          <p className="text-[#3C3C3C] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </p>

          <h4 className="font-semibold text-[#3C3C3C] mb-3">Doctors in high demand</h4>

          {/* Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Methamp",
              "Weed",
              "Inhalants Acidic",
              "Ganja",
              "Alcoholics",
              "MDMA",
              "Cannabinoids",
              "Crocodile",
              "Ganja",
              "Methamp",
              "Weed",
              "Ganja",
            ].map((item, index) => (
              <span
                key={index}
                className="bg-[#707070] text-white text-[10px] px-4 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-[#3C3C3C] mb-6 ">
            Printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            Ipsum.
          </p>

          <button className="bg-[#2A2A72]  text-[14px] text-white px-6 py-2 rounded-md  transition">
            Get Started
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img src={doctor} alt="doctor illustration" className="w-full h-auto" />
        </div>
      </div>
    </div>
    <ThreeDSlider/>
    </div>
  );
};

export default Home;
