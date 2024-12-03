export function initHero() {
  const hero = document.getElementById('hero');
  
  const heroHtml = `
    <div class="absolute inset-0">
      <img
        class="w-full h-full object-cover opacity-20"
        src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80"
        alt="Ice background"
      />
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Hielo de Primera Calidad para su Negocio
      </h1>
      <p class="mt-6 text-xl text-blue-100 max-w-3xl">
        Suministramos hielo premium a restaurantes y casinos. Calidad garantizada, 
        entrega puntual y servicio excepcional.
      </p>
      <div class="mt-10">
        <a
          href="#contact"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
        >
          Solicitar Cotización
          <svg class="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  `;

  hero.innerHTML = heroHtml;
}