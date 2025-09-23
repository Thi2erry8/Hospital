import logo from "../assets/images/logo.png";

function Header(){
   
    return(
        <>
           <header className="w-full bg-amber-50 h-[70px] fixed px-4 py-1 z-10 flex flex-row items-center justify-between">  
                    <div className="h-full"> 
                                     <img src={logo} className="h-full" alt="" />
                    </div>  
                    <nav className="flex flex-row items-center justify-between">
                          <p>Nos services</p>
                          <p>A propos de nous</p>
                          <p></p>
                          <p>Prendre Rendez-vous</p>
                    </nav>    
                    <div className=" h-full text-slate-500">
                          <i className="ri-menu-line"></i>
                    </div> 
           </header>
        </>
    )
}
export default Header