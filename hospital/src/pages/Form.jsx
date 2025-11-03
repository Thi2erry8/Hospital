import React from 'react'
import { useState } from "react";
import Header from "../copoments/header";
import Footer from "../copoments/footer";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
import "moment/locale/fr";
export default function Form() {
  
  const [appointment, setAppointment] = useState(null);

  const isValidDate = (current) => {
    const day = current.day();
    const isSunday = day === 0; // Dimanche
    const isPastDate = current.isBefore(moment().startOf('day'));
    
    // Autoriser seulement du lundi (1) au samedi (6)
    return !isSunday && !isPastDate && day >= 1 && day <= 6;
  };

  // Restreindre les heures de travail (9h-17h)
  const isValidTime = (current) => {
    const hour = current.hour();
    return hour >= 9 && hour <= 17; // De 9h à 17h
  };

  const handleDateChange = (date) => {
    if (moment.isMoment(date)) {
      setAppointment(date);
    }
  };



  function Submit(e) {
  e.preventDefault(); 
  const formEle = document.querySelector("form");
  const formDatab = new FormData(formEle);

  fetch("https://script.google.com/macros/s/AKfycbwFq1FxXPgUD5XVDqpIoiEajNnkef3OX9duixu0sss1asIJz-X-wwnS_ByYhyuTrK48/exec", 
    {
    method: "POST",
    mode: "no-cors",
    body: formDatab
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      alert("✅ Données envoyées avec succès !");
    })
    .catch((error) => console.log(error));
}
  
  return (
  <> <Header></Header>

    
    <main className=" pt-[70px]">
            <section className="min-h-screen w-screen  flex flex-col justify-center items-center ">
                     <div className="mb-6">
                          <h2 className="text-2xl font-bold text-sky-800 mb-2">
                               Prendre Rendez-vous
                          </h2>
                          <div className="bg-blue-50 p-3 rounded-md">
                                 <p className="text-sky-800 font-semibold">📅 Jours d'ouverture :</p>
                                 <p className="text-sky-700">Lundi au Samedi - 9h00 à 17h00</p>
                                 <p className="text-red-600 font-semibold mt-1">🚫 Fermé le dimanche</p>
                          </div>
                    </div>
                       <form name='formulaire'
                           onSubmit={(e) => Submit(e)}
                           className=' flex flex-col justify-center items-center'>

                            <div className="flex flex-col justify-center items-center gap-4 mb-4">
                                
                                  <input name='Nom' type="text" placeholder='Votre nom' 
                                    className=' font-semibold w-[250px] pl-2 text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required
                                  />
                                  <input name='Prenom' type="text" placeholder='Votre prenom' 
                                    className='font-semibold w-[250px] pl-2 text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required                                  
                                  />
                            </div>
                            <hr className='text-gray-400 w-[100px] mx-auto'/>
                            <div className="flex flex-col justify-center items-center mt-4 gap-4 mb-4">
                                  <input name='Email' type="email" placeholder='Votre email' 
                                    className='font-semibold w-[250px] pl-2 text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required
                                  />
                                  <input name='Numero' type="tel" placeholder='Votre numero' 
                                    className='pl-2 w-[250px] font-semibold  text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required                                  
                                  />
                            </div>
                            <hr className='text-gray-400 w-[100px] mx-auto'/>
                           <div className="mt-4">
                                <div className="flex flex-col justify-center items-center gap-4">
                                  <input
                                    name="Date"
                                    type="date"
                                    className="pl-2 font-semibold w-[250px] text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent"
                                    required
                                  />
                                  <select
                                    name="Time"
                                    className="pl-2 font-semibold w-[250px]  text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent"
                                    required
                                  >
                                    <option value="">Sélectionnez l'heure</option>
                                    <option value="09:00">9:00</option>
                                    <option value="09:30">9:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                  </select>
                                </div>
                          </div>
                          <button className='bg-sky-900 mx-auto border py-1 px-3.5 border-sky-900 rounded mt-4 cursor-pointer hover:bg-sky-700' type="submit">
                                    <p className='text-sky-50 font-bold'>Envoyer</p>
                          </button>
                      </form>
                     
            </section>
            
    </main>
    <Footer></Footer>
   </>
  )
}
