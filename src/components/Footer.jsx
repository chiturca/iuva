import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const location = useLocation();
  const links = [
    { href: "/about", name: `Hakkımızda` },
    { href: "/contact", name: `Bizimle İletişime Geç` },
    { href: "/privacypolicy", name: `Gizlilik Politikamız` },
  ];
  const linksToDisplay = links.map((link) => (
    <NavLink
      className={`px-5 text-gray-500 font-medium hover:text-[#2D3BBF] duration-500 ${
        location.pathname === link.href
          ? "bg-[#2D3BBF] bg-opacity-50 text-white p-2 rounded-lg"
          : ""
      }`}
      key={link.name}
      to={link.href}
    >
      {link.name}
    </NavLink>
  ));
  return (
    <footer className="bg-[#E4E5E9] shadow-inner text-center md:text-left">
      <div className="container p-6">
        <div name="logo" className="flex justify-between">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <ul name="links" className="flex flex-col md:flex-row">
            {linksToDisplay.map((link) => (
              <li key={link.key} className="text-lg md:mr-4 mb-2 md:mb-0">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        name="copyright"
        className="bg-[#FAFAFA] p-4 text-center text-neutral-700"
      >
        © 2023{" "}
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          Company_Name.
        </a>{" "}
        Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
