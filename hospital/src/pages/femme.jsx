import pic1 from "../assets/images/header_pic.jpg";
import Header from "../copoments/header";
import Footer from "../copoments/footer";

export default function Femme() {

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
           
            <section className="min-h-screen w-screen flex flex-col px-2 pt-3">
                      <div className="flex flex-col text-lg gap-2 w-full text-sky-900">
                             <p>
                                 À la Clinique de santé M, nous offrons une gamme complète de services en santé de la femme, 
                                 assurés par nos médecins de famille et infirmières praticiennes spécialisées (IPS). Que ce soit pour un 
                                 suivi gynécologique, une contraception personnalisée ou des examens préventifs
                                 , notre équipe vous accompagne avec écoute, respect et professionnalisme.
                             </p>

                             <p>
                                 Nous proposons des consultations accessibles et confidentielles pour les femmes de tous âges,
                                 dans un environnement sécuritaire et sans jugement.
                             </p>

                             <p>
                                 Consultez la section tarifs pour plus de détails sur nos services en santé féminine.
                             </p>
                      </div>

                      <div className="flex flex-col gap-2 w-full bg-sky-200 text-sky-900">
                          <div className="">
                                  <div className="">
                                        <button>Biopsie de l'endomètre</button>
                                        <i class="ri-arrow-down-line"></i>                            
                                  </div>
                               
                                  <div className="">
                                       <p className="">
                                           Prélèvement de tissu utérin pour analyse, généralement dans le cadre de saignements vaginaux anormaux. 
                                      </p>
                                 </div>                            
                          </div>

                      </div>
            </section>
    </main>
    <Footer></Footer>
    </>
  )
}
