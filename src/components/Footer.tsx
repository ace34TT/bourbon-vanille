import Logo from "./../assets/logo/logo_principal 1.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full bg-primary pt-10">
      <div className="flex w-full justify-center">
        <img src={Logo} className="h-16" alt="" />
      </div>
      <div className="mt-10 flex justify-around font-medium text-secondary">
        <ul>
          <li className="text-2xl lg:text-3xl">Liens utiles</li>
          <li className="text-sm lg:text-xl">
            <Link
              to={"order"}
              className="transition-colors duration-300 hover:text-accent"
            >
              Notre histoire
            </Link>
          </li>
          <li className="text-sm lg:text-xl">
            <Link
              to={"our-story"}
              className="transition-colors duration-300 hover:text-accent"
            >
              Commande
            </Link>
          </li>
          <li className="text-sm lg:text-xl">
            <Link
              to={"contact"}
              className="transition-colors duration-300 hover:text-accent"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul>
          <li className="text-2xl lg:text-3xl">Contact</li>
          <li className="text-sm lg:text-xl">+33 6 20 69 98 89</li>
          <li className="text-sm lg:text-xl">contact@bourbonvanille.com</li>
        </ul>
      </div>
      <div className="flex h-20 w-full items-center justify-center text-xl text-secondary">
        Copyright © 2023
      </div>
    </footer>
  );
}
