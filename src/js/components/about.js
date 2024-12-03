export function initAbout() {
  const about = document.getElementById('about');
  
  const aboutHtml = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Sobre Nosotros
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Más de 15 años de experiencia en la industria del hielo
        </p>
      </div>

      <div class="mt-20">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="flex justify-center">
              <svg class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-medium text-gray-900">Calidad Garantizada</h3>
            <p class="mt-2 text-base text-gray-500">
              Hielo cristalino y puro, producido bajo los más altos estándares de calidad
            </p>
          </div>

          <div class="text-center">
            <div class="flex justify-center">
              <svg class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-medium text-gray-900">Entrega Puntual</h3>
            <p class="mt-2 text-base text-gray-500">
              Servicio de entrega confiable y puntual para mantener su negocio funcionando
            </p>
          </div>

          <div class="text-center">
            <div class="flex justify-center">
              <svg class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="mt-6 text-lg font-medium text-gray-900">Servicio Personalizado</h3>
            <p class="mt-2 text-base text-gray-500">
              Atención personalizada y soluciones adaptadas a sus necesidades específicas
            </p>
          </div>
        </div>
      </div>
    </div>
  `;

  about.innerHTML = aboutHtml;
}