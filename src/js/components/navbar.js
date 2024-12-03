export function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  const navbarHtml = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <span class="text-xl font-bold">IceMaster Pro</span>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#hero" class="hover:bg-blue-700 px-3 py-2 rounded-md">Inicio</a>
            <a href="#products" class="hover:bg-blue-700 px-3 py-2 rounded-md">Productos</a>
            <a href="#about" class="hover:bg-blue-700 px-3 py-2 rounded-md">Nosotros</a>
            <a href="#contact" class="hover:bg-blue-700 px-3 py-2 rounded-md">Contacto</a>
          </div>
        </div>

        <div class="md:hidden">
          <button id="mobile-menu-button" class="p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#hero" class="block hover:bg-blue-700 px-3 py-2 rounded-md">Inicio</a>
        <a href="#products" class="block hover:bg-blue-700 px-3 py-2 rounded-md">Productos</a>
        <a href="#about" class="block hover:bg-blue-700 px-3 py-2 rounded-md">Nosotros</a>
        <a href="#contact" class="block hover:bg-blue-700 px-3 py-2 rounded-md">Contacto</a>
      </div>
    </div>
  `;

  navbar.innerHTML = navbarHtml;

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}