import React from 'react'
import Header from "../copoments/header";
import Footer from "../copoments/footer";
import Hero from "../copoments/hero";
export default function Form() {
  return (
  <> <Header></Header>
    <main className=" pt-[70px]">
            <section className="min-h-screen w-screen flex justify-center items-center ">
                     <form action="">
                           <div className="">
                                <input placeholder='Selectionner une date et une heure' type="datetime-local" name="" id="" />
                          </div>
                     </form>
            </section>
    </main>
    <Footer></Footer>
   </>
  )
}
