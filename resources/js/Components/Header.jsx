import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth } = usePage().props; // Récupérer l'objet auth de Inertia

  // Fonction pour l'affichage du profil ou de la connexion
  const renderUserSection = () => {
    if (auth?.user) {
      return (
        <Link href="/profil" className="hover:underline">
          <img 
            src={auth.user.profile_picture || "/images/user.png"} 
            alt="Profil" 
            className="w-8 h-8 rounded-full"
          />
        </Link>
      );
    } else {
      return <Link href="/login" className="hover:underline">Connexion</Link>;
    }
  };

  return (
    <header className="bg-white text-black shadow-md border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <div className="hidden lg:flex items-center gap-6 flex-1">
          <input
            type="text"
            placeholder="Rechercher un parfum, une marque..."
            className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black w-full max-w-md"
          />
        </div>

        <div className="flex-1 text-center">
          <Link href="/" className="text-3xl font-serif tracking-widest uppercase">
            Aroma
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 justify-end flex-1 text-sm font-medium">
          <Link href="/newproduct" className="hover:underline">Nouveautés</Link>
          <Link href="/parfums" className="hover:underline">Parfums</Link>
          <Link href="/cart" className="hover:underline">Panier</Link>

          {/* Vérification si l'utilisateur est connecté */}
          {renderUserSection()}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/images/bar.png" alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <div className="flex flex-col gap-4 text-sm font-medium border-t border-gray-200 pt-4">
            <input
              type="text"
              placeholder="Rechercher un parfum, une marque..."
              className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black w-full"
            />
            <Link href="/newproduct" className="hover:underline">Nouveautés</Link>
            <Link href="/parfums" className="hover:underline">Parfums</Link>
            <Link href="/cart" className="hover:underline">Panier</Link>

            {/* Vérification si l'utilisateur est connecté */}
            {renderUserSection()}
          </div>
        </div>
      )}
    </header>
  );
}
