import { useNavigate, useParams } from "react-router-dom"
import Projectdata from "../api/Projectdata.json";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Details = () => {
    const {id} = useParams()
    const navigation = useNavigate()
    const {darkMode} = useContext(ThemeContext)
    const project = Projectdata.find((item) => item.id === parseInt(id))
    console.log(project);
    if (!project) {
        return <div>Project not found</div>
      }
    const handleNavigation = () => {
        navigation('/portfolio');
      };
  return (
    <div className={`pt-[5rem] px-4 md:px-6 flex items-center ${darkMode? "bg-black text-white":"bg-white text-black"} justify-between mx-auto flex-col md:flex-row max-w-3xl`}>
      <div className="mt-20">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <img src={project.image} alt={project.name} className="mt-4 w-full h-auto" />
        <p className="mt-4">{project.about}</p>
        <button onClick={handleNavigation}>Go to back</button>
      </div>
      <div>
        <iframe src={project.link} className="mt-20 h-[500px] w-[350px]"></iframe>
      </div>
    </div>
  )
}

export default Details