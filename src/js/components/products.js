const products = [
  {
    name: 'Hielo en Cubos',
    description: 'Perfectos para bebidas y cócteles',
    price: 'Desde $X por kg',
    image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&q=80'
  },
  {
    name: 'Hielo en Escamas',
    description: 'Ideal para exhibición de mariscos y pescados',
    price: 'Desde $X por kg',
    image: 'https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?auto=format&fit=crop&q=80'
  },
  {
    name: 'Bloques de Hielo',
    description: 'Para esculturas y eventos especiales',
    price: 'Desde $X por bloque',
    image: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?auto=format&fit=crop&q=80'
  }
];

export function initProducts() {
  const productsSection = document.getElementById('products');
  
  const productsHtml = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Nuestros Productos
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Ofrecemos diferentes tipos de hielo para satisfacer todas sus necesidades
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        ${products.map(product => `
          <div class="relative group">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
              <img
                src="${product.image}"
                alt="${product.name}"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <h3 class="mt-6 text-xl font-semibold text-gray-900">
              ${product.name}
            </h3>
            <p class="text-base text-gray-500">${product.description}</p>
            <p class="mt-2 text-lg font-medium text-blue-600">${product.price}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  productsSection.innerHTML = productsHtml;
}