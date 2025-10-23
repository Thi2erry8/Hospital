import pic1 from "../assets/images/header_pic.jpg";
import Header from "../copoments/header";
import Footer from "../copoments/footer";
import { useState } from "react";


export default function Tarif(){


  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(penIndex === index ? null : index);
  };
  
    return (
    <>
<Header></Header>
    <main className=" pt-[70px]">
                 <section className="relative h-[40vh] w-full flex flex-col items-center justify-center bg-sky-200">
                           <div className="absolute z-[-1] w-full h-full hidden">
                                 <img className="" src={pic1} alt="" />
                           </div>
                           <div className=" text-sky-900 px-3 w-full h-fit">
                                 <h1 className="text-4xl font-bold mb-4">
                                      Tarif
                                 </h1>
                           </div>

            </section>
           
            <section className="min-h-screen gap-4 w-screen flex flex-col  pt-3">
                      <div className="flex flex-col text-lg gap-2 w-full text-sky-900 px-2">
                             <p>
                                  La Clinique de santé M offre des services spécialisés en santé mentale pour les enfants, les adolescents et les adultes. Notre équipe interdisciplinaire, 
                                  composée de psychologues, neuropsychologues, infirmières praticiennes spécialisées en santé mentale (IPSSM) et médecins, 
                                  propose une approche humaine et rigoureuse.
                             </p>

                             <p>
                                  Notre objectif : offrir un accès rapide à des services en santé mentale de qualité, pour permettre 
                                  une prise en charge précoce, un meilleur suivi et un bien-être durable.
                             </p>

                             <p>
                                 Consultez la section tarifs pour tous les détails sur nos évaluations en TDAH et santé mentale.
                             </p>
                      </div>

                      <div className="flex flex-col gap-5 w-full  text-sky-900">
                             {/* {services.map((service) => (
                               <Option id={service.id} title={service.title} desc={service.desc} openId={openId} toggle={toggle}/>
                             ))

                             } */}

                                 {/* Élément 1 */}
                       <div className=" p-3">
                            <button onClick={() => handleToggle(0)}
                                    className="flex justify-between w-full text-left font-semibold text-sky-900">
                                    <span>Biopsie de l'endomètre</span>
                                    <i className={`ri-arrow-down-line transition duration-200 ${openIndex === 0 ? "rotate-180" : ""}`}></i>
                           </button>

                          <div className={`flex flex-col mt-3  transition duration-200 overflow-hidden ${openIndex ===0 ? "max-h-fit gap-3":"max-h-0 opacity-0"}`}>
                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Frais d'inscription 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              5000Gdes
                                         </p>

                                  </div>
                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Frais d'abonnement annuel 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              1500Gdes
                                         </p>

                                  </div>
                                  
                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait individuel - Prise en charge simple 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              12500Gdes
                                         </p>

                                  </div>

                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait familial - Prise en charge familiale 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              10000Gdes
                                         </p>

                                  </div>

                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait pédiatrique - 4 consultations 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              7500Gdes
                                         </p>

                                  </div>

                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait pédiatrique - 8 consultations 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              12500Gdes
                                         </p>

                                  </div>

                          </div>
                             </div>


                  <div className=" p-3">
                           <button onClick={() => handleToggle(1)}
                                   className="flex justify-between w-full text-left font-semibold text-sky-900">
                                   <span>Échographie pelvienne</span>
                                   <i className={`ri-arrow-down-line transition duration-200 ${openIndex === 1 ? "rotate-180" : ""}`}></i>
                          </button>

                          <div className={`flex flex-col mt-3 transition duration-200 overflow-hidden ${openIndex ===1 ? "max-h-fit gap-3":"max-h-0 opacity-0"}`}>
                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Frais d'inscription 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              5000Gdes
                                         </p>

                                  </div>
                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Frais d'abonnement annuel 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              1500Gdes
                                         </p>

                                  </div>
                                  
                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait individuel - Prise en charge simple 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              12500Gdes
                                         </p>

                                  </div>

                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait familial - Prise en charge familiale 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              10000Gdes
                                         </p>

                                  </div>

                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait pédiatrique - 4 consultations 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              7500Gdes
                                         </p>

                                  </div>

                                  <div className=" flex flex-row justify-between items-center">
                                          <p className="mt-2 text-sky-900">
                                             Forfait pédiatrique - 8 consultations 
                                         </p>
                                         <p className="mt-2 text-sky-900">
                                              12500Gdes
                                         </p>

                                  </div>

                          </div>

                         </div>
          

                      </div>
            </section>
    </main>
    <Footer></Footer>
    </>
  )
}
