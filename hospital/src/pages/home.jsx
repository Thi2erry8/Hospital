import Header from "../copoments/header";
import pic1 from "../assets/images/header_pic.jpg";
import ser1 from "../assets/images/doctor.svg";
import ser2 from "../assets/images/ambulance.svg";
import ser3 from "../assets/images/partage.svg";
import Urgence from "../assets/images/Urgence_mineurs.jpg"

function Home(){

     const services =[
          {id:1,
           icon:ser1,
           texte_1:"Des soins professionnels",
           texte_2:"Les clients de LOTUS bénéficient de l’expertise de plusieurs professionnels de la santé"
          },
          {id:2,
           icon:ser3,
           texte_1:"Un soutien personnalisé.",
           texte_2:"Grâce à notre technologie, nous aidons à transformer l’expérience des soins de santé."
          },
          {id:3,
           icon:ser2,
           texte_1:"Un accès rapide",
           texte_2:"Notre réseau de cliniques met l’accent sur des soins adaptés à chaque patient."
          }
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

                 {/* services */}
                 <section className="w-full min-h-screen flex flex-col gap-12 items-center justify-center">
                            { services.map((service) =>(
                              <div key={service.id} className="flex flex-row h-1/4 w-8/10 gap-2 shadow-lg shadow-sky-200 p-2 rounded">
                                    <div className="flex items-center w-4/10 justify-center">
                                          <img className="h-[60px]" src={service.icon} alt="service logo" />
                                    </div>
                                    <div className="flex flex-col gap-2 text-sky-900">
                                          <p className="font-semibold">{service.texte_1}</p>
                                          <p className="">{service.texte_2}</p>
                                    </div>
                              </div>
                            ))}
                 </section>

                 {/* Urgences */} 
                 <section className="w-full min-h-screen flex flex-col-reverse px-2 gap-2 items-center justify-center">
                           <div className=" flex flex-col items-start justify-center text-sky-900 gap-2">
                                
                                 <h2 className="text-2xl font-semibold">Urgence Mineur</h2>
                                
                                 <p className=" "> La Clinique LOTUS, affiliée à la AIC, offre des consultations sans rendez-vous aux patients 
                                    sans médecin de famille. Les inscriptions se font en ligne via coordonnées (e-mail , Whattsapp etc...) 
                                    la veille pour un rendez-vous le lendemain. 
                                    Ce service est entièrement gratuit pour les patients couverts par la AIC. 
                                 </p>

                           </div> 
                          
                           <div className="">
                                  <img src={Urgence} alt="" />
                           </div>
                 </section>

                 {/* Support */} 
                 <section className="w-full min-h-screen flex flex-col-reverse px-2 gap-2 items-center justify-center">
                           <div className=" flex flex-col items-start justify-center text-sky-900 gap-2">
                                
                                 <h2 className="text-2xl font-semibold">24/7 Support </h2>
                                
                                 <p className=" "> La Clinique LOTUS se met a votre disposition pour vous offrir une assistance  
                                    a tout heure pour un support immédiat et des questions 
                                    Nous nous Dedions a offrir le meilleur soutient que possible 
                                 </p>
                                  
                                 <div className="">
                                       <button>

                                       </button>

                                       <button>
                                          
                                       </button>
                                 </div>
                           </div> 
                          
                           <div className="">
                                  <img src={Urgence} alt="" />
                           </div>
                 </section>
          </main>
     </>)  
}
export default Home