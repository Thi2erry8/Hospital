import pic1 from "../assets/images/header_pic.jpg";
import Header from "../copoments/header";
import Footer from "../copoments/footer";
import { useState } from "react";
import Hero from "../copoments/hero";

export default function Tarif() {
  const text = {
    img: pic1,
    title: "Tarif",
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header></Header>
      <main className=" pt-[70px]">
        <Hero img={text.img} title={text.title}></Hero>

        <section className="min-h-screen gap-4 w-screen flex flex-col  p-3 md:flex-row md:p-5 md:items-center">
          <div className="flex flex-col text-lg gap-2 w-full text-sky-900 px-2">
            <p>
              Les frais d'abonnement annuel s'appliquent lors de la première
              consultation de l'année en cours, à tous les clients, sauf ceux
              ayant un forfait annuel.
            </p>

            <p>
              Aux bénéficiaires de la AIC. Nous vous avisons que les médecins
              pratiquant à la Clinique LOTUS sont des professionnels non
              participants de la AIC . Si vous avez recours à leurs services
              professionnels, vous devrez donc payer directement le coût des
              services qu’ils vous fourniront. Vous ne pourrez ni demander, ni
              obtenir de la AIC le remboursement du coût des services assurés
              que vous leur avez payé.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full  text-sky-900">
            {/* {services.map((service) => (
                               <Option id={service.id} title={service.title} desc={service.desc} openId={openId} toggle={toggle}/>
                             ))

                             } */}

            {/* Élément 1 */}
            <div className=" p-3">
              <button
                onClick={() => handleToggle(0)}
                className="flex justify-between w-full text-left font-semibold text-sky-900"
              >
                <span className="text-lg">
                  Forfaits et frais administratifs
                </span>
                <i
                  className={`ri-arrow-down-line transition duration-200 ${
                    openIndex === 0 ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              <div
                className={`flex flex-col mt-3  transition duration-200 overflow-hidden ${
                  openIndex === 0 ? "max-h-fit gap-3" : "max-h-0 opacity-0"
                }`}
              >
                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">Frais d'inscription</p>
                  <p className="mt-2 text-sky-900">5000Gdes</p>
                </div>
                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">Frais d'abonnement annuel</p>
                  <p className="mt-2 text-sky-900">1500Gdes</p>
                </div>

                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">
                    Forfait individuel - Prise en charge simple
                  </p>
                  <p className="mt-2 text-sky-900">12500Gdes</p>
                </div>

                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">
                    Forfait familial - Prise en charge familiale
                  </p>
                  <p className="mt-2 text-sky-900">10000Gdes</p>
                </div>

                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">
                    Forfait pédiatrique - 4 consultations
                  </p>
                  <p className="mt-2 text-sky-900">7500Gdes</p>
                </div>

                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">
                    Forfait pédiatrique - 8 consultations
                  </p>
                  <p className="mt-2 text-sky-900">12500Gdes</p>
                </div>
              </div>
            </div>

            {/* Élément 2 */}
            <div className=" p-3">
              <button
                onClick={() => handleToggle(1)}
                className="flex justify-between w-full text-left font-semibold text-sky-900"
              >
                <span className="text-lg">Soin pour la femme</span>
                <i
                  className={`ri-arrow-down-line transition duration-200 ${
                    openIndex === 1 ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              <div
                className={`flex flex-col mt-3 transition duration-200 overflow-hidden ${
                  openIndex === 1 ? "max-h-fit gap-3" : "max-h-0 opacity-0"
                }`}
              >
                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">
                    Examen gynécologique - Test PAP (Cytologie)
                  </p>
                  <p className="mt-2 text-sky-900">8000Gdes</p>
                </div>
                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">Installation de stérilet3</p>
                  <p className="mt-2 text-sky-900">5500Gdes</p>
                </div>

                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">Retrait de stérilet</p>
                  <p className="mt-2 text-sky-900">4500Gdes</p>
                </div>

                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">
                    Consultation en hormonothérapie féminine-suivi
                  </p>
                  <p className="mt-2 text-sky-900">10000Gdes</p>
                </div>

                <div className=" flex flex-row justify-between items-center">
                  <p className="mt-2 text-sky-900">
                    Consultation en hormonothérapie féminine - suivi
                  </p>
                  <p className="mt-2 text-sky-900">8000Gdes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
