import React from 'react';
import { Award, Truck, Users } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Más de 15 años de experiencia en la industria del hielo
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Calidad Garantizada</h3>
              <p className="mt-2 text-base text-gray-500">
                Hielo cristalino y puro, producido bajo los más altos estándares de calidad
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Truck className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Entrega Puntual</h3>
              <p className="mt-2 text-base text-gray-500">
                Servicio de entrega confiable y puntual para mantener su negocio funcionando
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Servicio Personalizado</h3>
              <p className="mt-2 text-base text-gray-500">
                Atención personalizada y soluciones adaptadas a sus necesidades específicas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}