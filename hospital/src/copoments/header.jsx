import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom"

function Header(){
   const [open , setOpen] = useState(false);
   const [show , setShow] = useState(false);

    return(
        <>
           <header className="w-full bg-sky-50 h-[70px] fixed px-4 py-1 z-10 flex flex-row items-center justify-between">  
                    <div className="h-full"> 
                                     <img src={logo} className="h-full" alt="" />
                    </div>  
                    <nav className={`flex flex-col ${show ?"scale-y-100" :"scale-y-0"} origin-top duration-200 items-start justify-between gap-4 fixed p-1.5 shadow-lg bg-sky-50 top-19`}>
                          <p className="text-lg text-sky-900 cursor-pointer font-semibold hover:text-sky-500 transition duration-700 ease-in-out">Home</p>
                          <button className="text-lg text-sky-900 cursor-pointer font-semibold  focus:text-sky-500 transition duration-700 ease-in-out group relative"
                          onClick={() => setOpen(!open)}>Nos services 
                              <i className={`inline-block ${ open ? "transform rotate-180 " : " "}  duration-500 ease-in-out ri-arrow-down-s-fill`}></i>
                              <ul className={`w-3xs bg-sky-50 items-start flex flex-col absolute top-full left-0 p-3 mt-1 shadow-md 
                              ${open ? "scale-y-100" : "scale-y-0 hidden"} origin-top duration-200`}>
                                    <li className="hover:text-sky-500"><a href="">Sante de la femme</a></li>
                                    <li className="hover:text-sky-500"><a href="">Sante mental</a></li>
                                    <li className="hover:text-sky-500"><a href="">Home</a></li> 
                              </ul>
                          </button>
                          <p className="text-lg text-sky-900 cursor-pointer font-semibold hover:text-sky-500 transition duration-700 ease-in-out"> <Link to="/blog">A propos de nous</Link></p>
                          <p className="text-lg text-sky-900 cursor-pointer font-semibold hover:text-sky-500 transition duration-700 ease-in-out">Prendre Rendez-vous</p>
                    </nav>    
                    <button className="flex items-center h-full text-2xl text-sky-500"
                    onClick={() => setShow(!show)}>
                          <i className={` ${show ?"ri-close-line":"ri-menu-line"} `}></i>
                    </button> 
           </header>
        </>
    )
}
export default Header