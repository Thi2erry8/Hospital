import logo from  "../assets/images/logo.png";

function Footer(){
       return(
         <footer className="flex flex-col bg-sky-50 max-h-screen gap-10 py-5 px-5 mt-10">
                  <div className="">
                         <img width='80px' src={logo} alt="" />
                  </div>

                  <div className=" flex flex-col gap-2 text-sky-900">
                        <li>
                            <p>Sante de la femme</p>
                        </li>
                        
                        <li>
                              <p>Sante de la femme</p>
                        </li>
                       
                        <li>
                             <p>Sante de la femme</p>
                        </li>
                        
                        <li>
                             <p>Sante de la femme</p>
                        </li>
                  </div>

                  <div className="flex flex-row gap-4">
                         <i className="text-2xl text-sky-900 ri-facebook-line"></i>
                         <i className="text-2xl text-sky-900 ri-instagram-line"></i>
                         <i className="text-2xl text-sky-900 ri-twitter-fill"></i>
                  </div>
         </footer>
       )
} 
export default Footer