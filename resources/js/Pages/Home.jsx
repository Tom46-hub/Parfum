import MainLayout from '@/Layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="p-4">
        <section className="bg-cover bg-center h-96 relative text-white" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Bienvenue chez Aroma</h1>
            <p className="text-lg sm:text-xl mb-6">Découvrez des parfums exquis pour toutes les occasions</p>
            <a href="#products" className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">Explorer nos produits</a>
          </div>
        </section>

        {/* Section 2: Nos Produits */}
        <section id="products" className="py-16 bg-gray-100">
          <h2 className="text-3xl text-center font-bold mb-8">Nos Parfums Populaires</h2>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Produit 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="/images/parfum1.png" alt="Parfum 1" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Parfum Luxueux</h3>
              <p className="text-gray-500 mb-4">Un parfum aux notes florales et boisées qui vous accompagnera toute la journée.</p>
              <a href="/product/1" className="text-yellow-500 font-semibold hover:text-yellow-600">Voir le produit</a>
            </div>

            {/* Produit 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="/images/parfum1.png" alt="Parfum 2" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eau de Parfum Intense</h3>
              <p className="text-gray-500 mb-4">Laissez-vous séduire par ce parfum riche et complexe aux notes épicées et fruitées.</p>
              <a href="/product/2" className="text-yellow-500 font-semibold hover:text-yellow-600">Voir le produit</a>
            </div>

            {/* Produit 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="/images/parfum1.png" alt="Parfum 3" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sérénité Parfumée</h3>
              <p className="text-gray-500 mb-4">Un parfum apaisant aux arômes délicats de lavande et de vanille.</p>
              <a href="/product/3" className="text-yellow-500 font-semibold hover:text-yellow-600">Voir le produit</a>
            </div>
          </div>
        </section>

        {/* Section 3: Offres spéciales */}
        <section className="bg-yellow-500 py-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Offres Spéciales</h2>
          <p className="text-lg mb-8">Profitez de nos promotions limitées sur une sélection de parfums exclusifs.</p>
          <a href="/offers" className="bg-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">Voir les offres</a>
        </section>

        {/* Section 4: Témoignages */}
        <section className="py-16 bg-gray-200">
          <h2 className="text-3xl text-center font-bold mb-8">Ce que disent nos clients</h2>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Témoignage 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500 mb-4">"J'ai acheté le parfum Luxueux et il a été un véritable coup de cœur. Il dure toute la journée et l'odeur est incroyable!"</p>
              <p className="font-semibold">Émilie L.</p>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500 mb-4">"Aroma propose des parfums vraiment raffinés. Mon eau de parfum intense est devenu un must dans ma routine quotidienne."</p>
              <p className="font-semibold">Pierre D.</p>
            </div>

            {/* Témoignage 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-500 mb-4">"Je suis tombée amoureuse de leur parfum Sérénité. Il est léger, apaisant et parfait pour le quotidien."</p>
              <p className="font-semibold">Sophie M.</p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
