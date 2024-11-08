import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="flex px-3 md:px-6 h-screen relative w-full justify-center flex-col items-center text-white pt-[4rem] text-center">
      <div>
        <h1 className="md:text-6xl text-5xl font-bold text-blue-500 mb-2">
          Hello, I'm <br className="md:hidden" />{" "}
          <span className="text-pink-600 text-6xl mt-5">Amit Sahoo</span>
        </h1>
        <h2 className="md:text-5xl text-3xl mt-4 font-semibold text-orange-600">
          {text}
          <Cursor />
        </h2>
      </div>
      <div className="flex mt-8 md:mt-10 space-x-6 text-3xl">
          <Link to="http://www.linkedin.com/in/amit-sah00" target="blank">
            <FaLinkedin className={`${darkMode? "text-white":"text-black"}`}/>
          </Link>
          <Link to="https://github.com/Sahoo-amit" target="blank">
            <FaGithub className={`${darkMode? "text-white":"text-black"}`}/>
          </Link>
          <Link to="https://www.instagram.com/sah00_amit" target="blank">
            <FaInstagram className={`${darkMode? "text-white":"text-black"}`}/>
          </Link>
        </div>
        <button
          className={`rounded-full mt-7 px-6 py-2 bg-yellow-500`}
        >
          <Link to="/Amit sahoo.pdf" target="blank">
            Download Resume
          </Link>
        </button>
    </div>
  );
};

export default Home;
