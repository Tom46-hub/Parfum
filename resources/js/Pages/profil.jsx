import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function profil() {
  const { user } = usePage().props;

  const handleLogout = () => {
    // Appel à l'API pour déconnecter l'utilisateur
    axios.post('/logout').then(() => {
      // Rediriger vers la page d'accueil après déconnexion
      window.location.href = '/';
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Mon Profil</h1>

      <div className="bg-white shadow-md p-6 rounded-md">
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={user.profile_picture || "/images/user.png"} 
            alt="Profil" 
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Informations</h3>
          <p><strong>Nom:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Ajoutez d'autres informations utilisateurs si nécessaire */}
        </div>

        <div className="mt-6">
          <button 
            onClick={handleLogout} 
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}
