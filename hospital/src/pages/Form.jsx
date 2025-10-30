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

  const getFrenchDayName = (date) => {
    const days = [
      'dimanche', 'lundi', 'mardi', 'mercredi', 
      'jeudi', 'vendredi', 'samedi'
    ];
    return days[date.day()];
  };
  {/* 
      */}

  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbxO4pH9gDFnMJi5jKjbD5CMpk0v-L5tfnCLV7JWPIVmRCRHdHejCwTwQca8S3ZQ7BkI/exec"
    fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:(`Nom=${e.target.nom.value}&Prenom=${e.target.prenom.value}&Email=${e.target.email.value}&Numero=${e.target.numero.value}&Dat=${appointment ? appointment.format("YYYY-MM-DD HH:mm") : ""}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
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
                       
                         <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center' action="">

                            <div className="flex flex-col justify-center items-center gap-4 mb-4">
                                
                                  <input name='nom' type="text" placeholder='Votre nom' 
                                    className=' font-semibold pl-2 text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required
                                  />
                                  <input name='prenom' type="text" placeholder='Votre prenom' 
                                    className='font-semibold pl-2 text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required                                  
                                  />
                            </div>
                            <hr className='text-gray-400 w-[100px] mx-auto'/>
                            <div className="flex flex-col justify-center items-center mt-4 gap-4 mb-4">
                                  <input name='email' type="email" placeholder='Votre email' 
                                    className='font-semibold pl-2 text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required
                                  />
                                  <input name='numero' type="tel" placeholder='Votre numero' 
                                    className='pl-2 font-semibold  text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent' 
                                    required                                  
                                  />
                            </div>
                            <hr className='text-gray-400 w-[100px] mx-auto'/>
                           <div className="mt-4">
                                <DateTime
                                        onChange={handleDateChange}
                                        value={appointment}
                                        isValidDate={isValidDate}
                                        isValidTime={isValidTime}
                                        inputProps={{
                                        placeholder: "date et heure",
                                        className: "pl-2 text-center font-semibold text-sky-900 text-lg border border-sky-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800 focus:border-transparent"
                                        }}
                                        timeFormat="HH:mm"
                                        dateFormat="DD/MM/YYYY"
                                        timeConstraints={{
                                        hours: { min: 9, max: 17, step: 1 },
                                        minutes: { min: 0, max: 59, step: 30 } // Pas de 30 minutes
                                        }}
                                        closeOnSelect={true}
                                />
                          </div>
                          <button className='bg-sky-900 mx-auto border px-3.5 border-sky-900 rounded mt-4' type="submit">
                                    <p className='text-sky-50 font-bold'>Envoyer</p>
                          </button>
                      </form>
                     
            </section>
            
    </main>
    <Footer></Footer>
   </>
  )
}
