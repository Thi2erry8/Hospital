import Header from "../copoments/header";
import Footer from "../copoments/footer";

export default function Apropos() {
  return (<>
    <Header/>

    <main className="pt-[70px]">
           <section className="min-h-screen">
                       <div className="flex flex-col gap-5 justify-center items-center">
                             <div className="text-sky-900 text-3xl font-semibold">
                                   <h1>HISTOIRE</h1>
                             </div>

                             <div className="text-sky-900 px-3 text-lg">
                                   <p>
                                       Bienvenue à la Clinique LOTUS, un établissement dédié à votre 
                                       bien-être physique et mental. Fondée en 2012 par un groupe de professionnels 
                                       de la santé passionnés, la clinique est née d’un constat simple : les soins 
                                       ne peuvent être pleinement efficaces que lorsqu’ils tiennent compte de la personne 
                                       dans sa globalité, et pas seulement de la maladie. Nous avons commencé 
                                       avec une petite équipe médicale et quelques spécialités de base, avant 
                                       d’élargir notre champ d’action à la santé de la femme, la santé mentale, 
                                       la prévention et le bien-être global. Notre mission est simple,  vous 
                                       accompagner à chaque étape de votre santé, avec écoute, bienveillance et expertise.
                                   </p>
                             </div>
                       </div>

                        <div className="flex flex-col gap-5 justify-center items-center">
                             <div className="text-sky-900 text-3xl font-semibold">
                                   <h1>Valeurs</h1>
                             </div>

                             <div className="text-sky-900 px-3 text-lg">
                                   <li className="my-3">
                                       <span className="font-semibold">Compassion</span> : chaque patient est accueilli avec respect et empathie.
                                   </li>
                                   
                                   <li className="my-3">
                                       <span className="font-semibold">Excellence</span> : nos équipes médicales et paramédicales sont formées aux meilleures pratiques pour garantir des soins sûrs et efficaces.

                                   </li>

                                   <li className="my-3">
                                       <span className="font-semibold">Innovation</span> : nous intégrons les avancées technologiques et scientifiques pour améliorer sans cesse nos services.
                                   </li>

                                   <li className="my-3">
                                       <span className="font-semibold">Prévention</span> : nous encourageons une approche proactive de la santé, axée sur la prévention et l’éducation.
                                   </li>
                             </div>
                       </div>
           </section>
    </main>

    <Footer></Footer>
    </>
  )
}
