import Header from "../copoments/header";
import pic1 from "../assets/images/header_pic.jpg";

function Home(){
     return(<>
          <Header/>
          
          <main className="pt-[70px]">
                 {/* hero */}
                 <section className="relative w-full min-h-screen flex flex-col items-center">
                           <div className="absolute w-full h-full hidden">
                                 <img className="" src={pic1} alt="" />
                           </div>
                           <div className="">
                                 <p className=""></p>
                                 <p className=""></p>
                           </div>

                 </section>
          </main>
     </>)  
}
export default Home