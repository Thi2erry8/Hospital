import pic1 from "../assets/images/header_pic.jpg";
import Header from "../copoments/header";
import Footer from "../copoments/footer";
import Option from "../copoments/option";
import { useState } from "react";

export default function mental() {

    const services = [
    {
      id: 1,
      title: "Biopsie de l'endomètre",
      desc: "Prélèvement de tissu utérin pour analyse, généralement dans le cadre de saignements vaginaux anormaux.",
    },
    {
      id: 2,
      title: "Installation ou retrait de stérilet",
      desc: "Pose ou retrait d’un dispositif intra-utérin, avec ou sans hormone.Nécessite une première rencontre avec le médecin ou IPSPL si vous n’avez pas votre prescription.Si vous avez déjà une prescription, vous devez apporter le stérilet prescrit lors de ce rendez-vous. ",
    },
    {
      id: 3,
      title: "Installation de l'implant contraceptif",
      desc: "Pose de l’implant contraceptif sous-cutané, efficace pour une durée de trois ans. Si vous n'avez pas déjà de prescription, une consultation médicale est nécessaire au préalable. Si vous avez votre prescription, vous devrez apporter votre implant au rendez-vous d'installation.",
    },
    {
      id: 4,
      title: "Examen gynécologique – Cytologie – Test PAP",
      desc: "Le dépistage du cancer du col de l'utérus, généralement appelé Test PAP, est conseillé aux deux ans chez les femmes qui sont ou ont déjà été actives sexuellement. Dès l'âge de 21 ans, il est important de faire ce dépistage pour prévenir l'apparition et le développement de cellules anormales pouvant conduire à un cancer. ",
    },
    {
      id: 5,
      title: "Entretien du pessaire",
      desc: "Nettoyage et vérification du pessaire pour les patientes qui en portent, dans un cadre respectueux et bienveillant.",
    },
        {
      id: 6,
      title: "Contraception",
      desc: "Discussion et suivi autour des options contraceptives (pilule, injection, stérilet, etc.), selon vos besoins et préférences.",
    },
  ];

   const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
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
                                      Santé de la femme
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
                             {services.map((service) => (
                               <Option id={service.id} title={service.title} desc={service.desc} openId={openId} toggle={toggle}/>
                             ))

                             }

                      </div>
            </section>
    </main>
    <Footer></Footer>
    </>
  )
}
