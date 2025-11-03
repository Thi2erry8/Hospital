import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col bg-sky-100 max-h-screen gap-10 py-5 px-5 mt-10 md:flex-row md:items-center md:justify-between">
      <div className="">
        <Link to="/">
          <img width="100px" src={logo} alt="" />
        </Link>
      </div>

      <div className=" flex flex-col gap-2 text-sky-900 font-bold">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/femme">Sante de la femme</Link>
        </li>

        <li>
          <Link to="/mental">Sante mental</Link>
        </li>

        <li>
          <Link to="/apropos">A propos de nous</Link>
        </li>

        <li>
          <Link to="/tarif">Tarif</Link>
        </li>

        <li>
          <Link to="/form">Prendre Rendez-vous</Link>
        </li>
      </div>

      <div className="flex flex-row gap-4">
        <i className="text-2xl text-sky-900 ri-facebook-line cursor-pointer"></i>
        <i className="text-2xl text-sky-900 ri-instagram-line cursor-pointer"></i>
        <i className="text-2xl text-sky-900 ri-twitter-fill cursor-pointer"></i>
      </div>
    </footer>
  );
}
export default Footer;
