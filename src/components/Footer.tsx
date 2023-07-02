import React from "react";
import Logo from "./../assets/logo/logo_principal 1.png";
export default function Footer() {
  return (
    <footer className="w-full pt-10 bg-primary">
      <div className="w-full flex justify-center">
        <img src={Logo} className="h-16" alt="" />
      </div>
      <div className="flex justify-around text-secondary mt-10 font-medium">
        <ul>
          <li className="text-3xl">Liens utiles</li>
          <li className="text-xl">Notre histoire</li>
          <li className="text-xl">Commande</li>
          <li className="text-xl">Contact</li>
        </ul>
        <ul>
          <li className="text-3xl">Contact</li>
          <li className="text-xl">+33 6 20 69 98 89</li>
          <li className="text-xl">contact@bourbonvanille.com</li>
        </ul>
      </div>
      <div className="h-20 w-full flex items-center justify-center text-secondary text-xl">
        Copyright © 2023
      </div>
    </footer>
  );
}
