import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {darkMode, toggleDarkMode} = useContext(ThemeContext)

    const toggleMenu =()=>setIsMenuOpen(!isMenuOpen)
  return (
    <div className={`fixed z-40 top-0 w-full h-[4rem] md:h-[5rem] flex items-center justify-between px-3 md:px-6 border-b shadow-2xl border-gray-300 ${darkMode? "text-white bg-black":"text-black bg-white"}`}>
        <div className="text-3xl font-bold">
            <Link to='/'>
                <img src="/Amit.png" alt="" className="md:h-[5rem] h-[3rem] w-[3rem] object-contain"/>
            </Link>
        </div>
        <div className="flex space-x-10 items-center">
            <div className="hidden md:flex space-x-8 text-[18px]">
                <NavLink to='/' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>Home</NavLink>
                <NavLink to='/about' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>About</NavLink>
                <NavLink to='/portfolio' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>Portfolio</NavLink>
                <NavLink to='/contact' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>Contact</NavLink>
            </div>
            <div className="flex space-x-4 items-center">
                <button onClick={toggleDarkMode} className={`text-2xl rounded-full p-2 ${!darkMode?"bg-slate-300":"bg-slate-800"}`}>{darkMode ? <CiLight/>:<MdDarkMode/>}</button>
                <button onClick={toggleMenu} className="md:hidden text-2xl">{isMenuOpen ? <RxCross1/>:<RxHamburgerMenu/>}</button>
            </div>
        </div>
        {isMenuOpen && 
            <div className={`absolute top-[4rem] left-0 w-full md:hidden flex items-center flex-col p-6 space-y-4 ${darkMode? "text-white bg-black":"text-black bg-white"}`}>
                <NavLink to='/' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>Home</NavLink>
                <NavLink to='/about' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>About</NavLink>
                <NavLink to='/portfolio' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>Portfolio</NavLink>
                <NavLink to='/contact' className={({isActive})=>(isActive? "text-orange-500 scale-110": "")}>Contact</NavLink>
            </div>
        }
    </div>
  )
}

export default Header