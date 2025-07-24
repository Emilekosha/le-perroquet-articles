import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logoimg from '../assets/logo.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-times bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
      
      {/* === Ligne 1 : Logo toujours centré === */}
      <div className="px-6 flex justify-center items-center">
        <img
          src={logoimg}
          alt="logo"
          className="w-[60px] h-[60px] rounded-full object-cover mr-2 mt-4"
        />
        <span className="text-4xl font-bold">Le Perroquet</span>
      </div>

      {/* === Ligne 2 : navigation + actions === */}
      <div className=" flex items-center justify-between lg:justify-between py-6  px-6">

        {/* MENU GAUCHE (Desktop) */}
        <nav className="hidden lg:flex gap-6 text-xl font-medium ml-6">
          <a href="#" className="hover:underline">Accueil</a>
          <a href="#" className="hover:underline">Politique ▼</a>
          <a href="#" className="hover:underline">Sports ▼</a>
          <a href="#" className="hover:underline">Culture ▼</a>
        </nav>

        {/* HAMBURGER (Mobile Only) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* BARRE DE RECHERCHE + BOUTONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex bg-white rounded-full overflow-hidden w-[220px]">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 w-full text-gray-800 text-sm outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white">
              <FaSearch />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
              Se connecter
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* MENU DÉROULANT (Mobile) */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium items-center">
            <a href="#" className="hover:underline">Accueil</a>
            <a href="#" className="hover:underline">Politique ▼</a>
            <a href="#" className="hover:underline">Sports ▼</a>
            <a href="#" className="hover:underline">Culture ▼</a>
          </nav>

          <div className="flex bg-white rounded-full overflow-hidden w-full max-w-xs">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 w-full text-gray-800 text-sm outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white">
              <FaSearch />
            </button>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-xs">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
              Se connecter
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm">
              S'inscrire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
