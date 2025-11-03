import pic1 from "../assets/images/header_pic.jpg";
import Header from "../copoments/header";
import Footer from "../copoments/footer";
import Option from "../copoments/option";
import { useState } from "react";
import Hero from "../copoments/hero";

export default function Mental() {
  const text = {
    img: pic1,
    title: "Santé mental et TDAH",
  };

  const services = [
    {
      id: 1,
      title: "Évaluation TDAH",
      desc: "Le TDA/H est le trouble déficitaire de l'attention avec ou sans l'hyperactivité. Il s'agit d'une diagnostic complexe à poser et nécessite une évaluation approfondie pour le soutenir. Le TDA/H est de plus en plus présent au Québec. Il faut se questionner sur le réel diagnostic du TDA/H ou ses symptômes qui peuvent être pris en charge différement. Le traitement est varié et ne nécessite pas obligatoirement une médication !",
    },
    {
      id: 2,
      title: "Évaluation pédopsychiatrique",
      desc: "Rencontre avec un médecin ou une IPSSM pour évaluer la santé mentale et le développement psychologique d’un enfant ou d’un adolescent.",
    },
    {
      id: 3,
      title: "Psychologue",
      desc: "La Dre Marie-France Leblanc, psychologue, offre un accompagnement bienveillant et professionnel pour vous aider à traverser les défis du quotidien. Ses services sont accessibles rapidement, en clinique ou en consultation virtuelle.",
    },
    {
      id: 4,
      title: "Neuropsychologue",
      desc: "Le service de neuropsychologie s’adresse aux enfants et adolescents qui présentent des difficultés d’attention, de mémoire, d’apprentissage ou d’adaptation dans leur environnement scolaire ou familial. Grâce à une évaluation approfondie des fonctions cognitives, nous pouvons poser un portrait précis du fonctionnement neurologique et proposer des pistes d’intervention adaptées aux besoins réels de l’enfant, en collaboration avec les parents et les intervenants du milieu.",
    },
    {
      id: 5,
      title: "Consultation IPSSM",
      desc: "Les IPSSM sont des infirmières possédant une formation universitaire de 2e cycle qui peuvent diagnostiquer les problèmes de santé mentale et les troubles mentaux. Les IPSSM possèdent la formation et l’habilitation pour évaluer une clientèle de tout âge incluant le diagnostic, le traitement et le suivi médical nécessaire. ",
    },
    {
      id: 6,
      title:
        "Évaluation du trouble du spectre de l’autisme (TSA) chez l’adulte",
      desc: "La Clinique M offre désormais l’évaluation du trouble du spectre de l’autisme (TSA) pour adultes, réalisée par la psychologue Dre Marie-France Leblanc, directement en clinique à Trois-Rivières.L’approche de Dre Leblanc repose sur l’écoute, la bienveillance et le respect de chaque parcours. Que ce soit pour répondre à des questionnements personnels ou pour officialiser un diagnostic, l’évaluation constitue une démarche importante et constructive.",
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
        <Hero img={text.img} title={text.title}></Hero>

        <section className="min-h-screen gap-4 w-screen flex flex-col  pt-3 md:flex-row md:p-5 md:items-center">
          <div className="flex flex-col text-lg gap-2 w-full text-sky-900 px-2">
            <p>
              La Clinique de santé M offre des services spécialisés en santé
              mentale pour les enfants, les adolescents et les adultes. Notre
              équipe interdisciplinaire, composée de psychologues,
              neuropsychologues, infirmières praticiennes spécialisées en santé
              mentale (IPSSM) et médecins, propose une approche humaine et
              rigoureuse.
            </p>

            <p>
              Notre objectif : offrir un accès rapide à des services en santé
              mentale de qualité, pour permettre une prise en charge précoce, un
              meilleur suivi et un bien-être durable.
            </p>

            <p>
              Consultez la section tarifs pour tous les détails sur nos
              évaluations en TDAH et santé mentale.
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full  text-sky-900">
            {services.map((service) => (
              <Option
                id={service.id}
                title={service.title}
                desc={service.desc}
                openId={openId}
                toggle={toggle}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
