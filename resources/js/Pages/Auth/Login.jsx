import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/login-bg.jpg')" }}
    >
      <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg backdrop-blur-sm w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Se connecter à Aroma
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-black focus:border-black dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-black focus:border-black dark:bg-gray-700 dark:text-white"
              required
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-900 dark:text-white">Se souvenir de moi</label>
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Connexion
          </button>

          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            Pas encore inscrit ? <a href="/register" className="text-black font-medium hover:underline">Créer un compte</a>
          </p>
        </form>
      </div>
    </section>
  );
}
