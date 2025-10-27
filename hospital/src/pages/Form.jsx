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

  return (
  <> <Header></Header>
    <main className=" pt-[70px]">
            <section className="min-h-screen w-screen  flex flex-col justify-center items-center ">
                     <div className="mb-6">
                          <h2 className="text-2xl font-bold text-gray-800 mb-2">
                               Prendre Rendez-vous
                          </h2>
                          <div className="bg-blue-50 p-3 rounded-md">
                                 <p className="text-sky-800 font-semibold">📅 Jours d'ouverture :</p>
                                 <p className="text-sky-700">Lundi au Samedi - 9h00 à 17h00</p>
                                 <p className="text-red-600 font-semibold mt-1">🚫 Fermé le dimanche</p>
                          </div>
                    </div>
                     
                     <form action="">

                            <div className="">
                                  <input type="text" placeholder='Votre nom' />
                                  <input type="text" placeholder='Votre prenom' />
                            </div>

                            <div className="">
                                  <input type="email" placeholder='Votre email' 
                                    
                                  />
                                  <input type="tel" placeholder='Votre numero' />
                            </div>
                           <div className="">
                                <DateTime
                                        onChange={handleDateChange}
                                        value={appointment}
                                        isValidDate={isValidDate}
                                        isValidTime={isValidTime}
                                        inputProps={{
                                        placeholder: "Cliquez pour choisir une date et heure",
                                        className: "w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                     </form>
            </section>
    </main>
    <Footer></Footer>
   </>
  )
}
