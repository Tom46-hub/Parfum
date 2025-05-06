import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo + copyright */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo Aroma" className="w-8 h-8" />
          <span className="text-sm font-light text-gray-400">&copy; {new Date().getFullYear()} Aroma</span>
        </div>

        {/* Liens */}
        <div className="flex gap-6 text-sm">
          <a
            href="/legal"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Mentions légales
          </a>
          <a
            href="/preferences"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Préférences
          </a>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="mt-6 border-t border-gray-600 w-full"></div>

      {/* Crédit supplémentaire */}
      <div className="mt-4 text-center text-xs text-gray-500">
        <span>Créé par Aroma Studio</span>
      </div>
    </footer>
  );
}
