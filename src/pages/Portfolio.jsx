import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Projectdata from "../api/Projectdata.json";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Projectdata);
  }, []);
  console.log(data);

  return (
    <div
      className={`pt-[5rem] px-3 md:px-6 min-h-screen w-full pb-[2rem] ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="md:text-4xl text-2xl text-orange-400 font-bold underline mt-5">My Works</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {data.map((item) => {
          const { id, name, about, image, link } = item;
          return (
            <div key={id} className="flip-card w-64 h-80 mx-auto my-5">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                <div className={`flip-card-front absolute w-full h-full backface-hidden flex flex-col items-center justify-center bg-red-200 ${darkMode?"text-white":"text-black"} shadow-lg rounded-lg p-5`}>
                  <h1 className="text-xl font-semibold mb-2">{name}</h1>
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-orange-500 text-white shadow-lg rounded-lg p-5">
                  <h2 className="text-sm mb-2">{about}</h2>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline mt-2"
                  >
                    Click here
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
