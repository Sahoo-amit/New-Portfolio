import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`pt-[4rem] ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } w-full min-h-screen px-4 md:px-10`}
    >
      <div className="flex items-center justify-between flex-col md:flex-row-reverse mt-10 space-y-8">
        <img
          src="/profile.png"
          alt="Amit Profile"
          className="h-60 w-60 md:h-80 md:w-80 object-cover rounded-full shadow-lg bg-gray-900"
        />
        <p className="max-w-4xl">
          Currently pursuing{" "}
          <b>
            <i>Master of Computer Applications</i>
          </b>{" "}
          (MCA) with a focus on <b className="text-blue-500">web development</b>
          , there is a deep-seated passion for creating innovative web
          solutions. The journey in technology has been one of continuous
          learning and growth. <br /><br />
          Throughout the academic career, practical experience has been
          prioritized alongside theoretical studies. A notable highlight
          includes a <b className="text-blue-500">3-month internship</b>{" "}
          specializing in the <b className="text-blue-500">MERN stack</b>
          (MongoDB, Express.js, React, and Node.js). This opportunity allowed
          for hands-on involvement in real-world projects, providing a
          comprehensive understanding of building modern, scalable web
          applications. <br /><br /> During this internship, significant skills were
          developed in both front-end and back-end development. Proficiency was
          achieved in JavaScript, React, Node.js, and MongoDB, along with
          expertise in using Tailwind CSS to design responsive and visually
          appealing user interfaces. The experience also emphasized the
          importance of teamwork, agile methodologies, and effective
          communication, all of which have contributed to a well-rounded skill
          set. The current skill set includes: <br /> {" "}
          <b className="text-blue-500">JavaScript</b> : Writing clean,
          efficient code for dynamic web applications. <br />
          <b className="text-blue-500">React</b> : Building interactive UIs
          and managing application state. <br />
          <b className="text-blue-500">Tailwind CSS</b> : Designing
          responsive and visually appealing web interfaces. <br />
          <b className="text-blue-500">Node.js</b> : Developing scalable
          server-side applications. <br />
          <b className="text-blue-500">MongoDB</b> : Managing databases and
          ensuring data integrity.
        </p>
      </div>
      <div className="mt-4 pb-8">
        <h1 className="md:text-3xl text-2xl text-orange-400 font-bold underline">SKILLS</h1>
        <ul className="grid grid-cols-2 md:grid-cols-1 mt-1">
          <li>JavaScript</li>
          <li>React js</li>
          <li>Next js</li>
          <li>react query</li>
          <li>Redux</li>
          <li>Tailwind</li>
          <li>Python</li>
          <li>Java</li>
          <li>Node js</li>
          <li>Mongo DB</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
