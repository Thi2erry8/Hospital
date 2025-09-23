import logo from "../assets/images/logo.png";

function Header(){
   
    return(
        <>
           <header className="w-full bg-sky-50 h-[70px] fixed px-4 py-1 z-10 flex flex-row items-center justify-between">  
                    <div className="h-full"> 
                                     <img src={logo} className="h-full" alt="" />
                    </div>  
                    <nav className="flex flex-row items-center justify-between gap-4">
                          <p className="text-lg text-sky-900 cursor-pointer font-semibold hover:text-sky-500 transition duration-700 ease-in-out">Home</p>
                          <p className="text-lg text-sky-900 cursor-pointer font-semibold hover:text-sky-500 transition duration-700 ease-in-out">Nos services <i className="ri-arrow-down-s-fill"></i></p>
                          <p className="text-lg text-sky-900 cursor-pointer font-semibold hover:text-sky-500 transition duration-700 ease-in-out">A propos de nous</p>
                          <p className="text-lg text-sky-900 cursor-pointer font-semibold hover:text-sky-500 transition duration-700 ease-in-out">Prendre Rendez-vous</p>
                    </nav>    
                    <div className="flex items-center h-full text-2xl text-sky-500">
                          <i className="ri-menu-line"></i>
                    </div> 
           </header>
        </>
    )
}
export default Header