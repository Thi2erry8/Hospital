import Header from "../copoments/header";
import pic1 from "../assets/images/header_pic.jpg";

function Home(){

     const services =[
          {icon:"",
           texte_1:"",
           texte_2:""
          },
          {icon:"",
           texte_1:"",
           texte_2:""},
          {icon:"",
           texte_1:"",
           texte_2:""}
     ]

     return(<>
          <Header/>
          
          <main className=" pt-[70px]">
                 {/* hero */}
                 <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-sky-50">
                           <div className="absolute z-[-1] w-full h-full hidden">
                                 <img className="" src={pic1} alt="" />
                           </div>
                           <div className=" text-sky-900 px-3 w-full h-full">
                                 <h1 className="text-4xl font-bold mb-4">
                                      Des soins penses pour vous <br /> et votre famille
                                 </h1>
                                 <p className="text-lg font-semibold">
                                     Une alternative unique qui combine accessibilité, services publics et privés,<br /> 
                                     avec des tarifs compétitifs pour répondre aux besoins de chacun.
                                 </p>
                           </div>

                 </section>
                 <section className="">

                 </section>
          </main>
     </>)  
}
export default Home