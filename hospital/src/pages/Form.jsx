import React from 'react'
import Header from "../copoments/header";
import Footer from "../copoments/footer";
import Hero from "../copoments/hero";
import "react-datetime/css/react-datetime.css";
export default function Form() {
  return (
  <> <Header></Header>
    <main className=" pt-[70px]">
            <section className="min-h-screen w-screen flex justify-center items-center ">
                     <form action="">
                           <div className="">
                                 <DateTimePickerComponent 
                                      placeholder="Sélectionnez une date et une heure"
                                />
                          </div>
                     </form>
            </section>
    </main>
    <Footer></Footer>
   </>
  )
}
